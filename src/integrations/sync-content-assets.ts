import { createReadStream, existsSync } from "node:fs";
import { copyFile, mkdir, readdir } from "node:fs/promises";
import { dirname, extname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import type { Plugin, ViteDevServer } from "vite";

// ── Types ──────────────────────────────────────────────

interface SyncMapping {
  /** Relative to project root, e.g. "content/projects" */
  contentDir: string;
  /** Relative to dist root, e.g. "projects" */
  outputDir: string;
}

interface SyncContentAssetsOptions {
  extensions?: string[];
  mappings?: SyncMapping[];
}

// ── Defaults ───────────────────────────────────────────

const DEFAULT_MAPPINGS: SyncMapping[] = [
  { contentDir: "content/projects", outputDir: "projects" },
  { contentDir: "content/blog", outputDir: "blog" },
];

const DEFAULT_EXTENSIONS = [
  ".png",
  ".pdf",
  ".gif",
  ".svg",
  ".jpeg",
  ".jpg",
  ".xlsx",
];

const MIME_TYPES: Record<string, string> = {
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};

// ── Helpers ────────────────────────────────────────────

const TAG = "\x1b[36m[sync-assets]\x1b[0m";

function isAsset(filePath: string, exts: Set<string>): boolean {
  return exts.has(extname(filePath).toLowerCase());
}

async function walk(dir: string, exts: Set<string>): Promise<string[]> {
  if (!existsSync(dir)) {
    return [];
  }

  const entries = await readdir(dir, { withFileTypes: true });

  const tasks = entries.map((entry) => {
    const full = join(dir, entry.name);

    if (entry.isDirectory()) {
      return walk(full, exts);
    }

    if (isAsset(entry.name, exts)) {
      return [full];
    }

    return [];
  });

  const results = await Promise.all(tasks);
  return results.flat();
}

// ── Vite plugin (dev server) ───────────────────────────

function createVitePlugin(
  rootDir: string,
  mappings: SyncMapping[],
  exts: Set<string>
): Plugin {
  return {
    configureServer(server: ViteDevServer) {
      // ── 1. Watch content dirs ────────────────────────
      for (const m of mappings) {
        const abs = join(rootDir, m.contentDir);
        if (existsSync(abs)) {
          server.watcher.add(abs);
          console.log(`${TAG} 👀 Watching ${m.contentDir}/`);
        }
      }

      // ── 2. HMR – full-reload on asset change ────────
      const onFile = (file: string, action: string) => {
        if (!isAsset(file, exts)) {
          return;
        }

        for (const m of mappings) {
          const abs = join(rootDir, m.contentDir);
          if (file.startsWith(abs)) {
            const rel = relative(abs, file);
            console.log(`${TAG} 🔄 ${action}: ${m.outputDir}/${rel}`);
            server.ws.send({ type: "full-reload" });
            return;
          }
        }
      };

      server.watcher.on("add", (f) => onFile(f, "Added"));
      server.watcher.on("change", (f) => onFile(f, "Changed"));
      server.watcher.on("unlink", (f) => onFile(f, "Removed"));

      // ── 3. Serve assets from content dirs ────────────
      server.middlewares.use((req, res, next) => {
        if (!req.url) {
          return next();
        }

        const pathname = decodeURIComponent(req.url.split("?")[0]);

        for (const m of mappings) {
          const prefix = `/${m.outputDir}/`;
          if (!pathname.startsWith(prefix)) {
            continue;
          }

          const relPath = pathname.slice(prefix.length);
          const filePath = join(rootDir, m.contentDir, relPath);
          const ext = extname(filePath).toLowerCase();

          if (exts.has(ext) && existsSync(filePath)) {
            console.log(`${TAG} 📤 Serving ${pathname}`);
            res.setHeader(
              "Content-Type",
              MIME_TYPES[ext] ?? "application/octet-stream"
            );
            res.setHeader("Cache-Control", "no-cache");
            createReadStream(filePath).pipe(res);
            return;
          }
        }

        next();
      });
    },
    name: "vite-plugin-sync-content-assets",
  };
}

// ── Main integration ───────────────────────────────────

export default function syncContentAssets(
  options: SyncContentAssetsOptions = {}
): AstroIntegration {
  const mappings = options.mappings ?? DEFAULT_MAPPINGS;
  const exts = new Set(options.extensions ?? DEFAULT_EXTENSIONS);
  let rootDir: string;

  return {
    hooks: {
      "astro:build:done": async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        let count = 0;

        console.log(`\n${TAG} 🔄 Syncing content assets to build output…`);

        const dirsToCreate = new Set<string>();

        // 1. Gather file metadata and deduplicate required directories
        const tasks = mappings.map(async (m) => {
          const absContent = join(rootDir, m.contentDir);
          const files = await walk(absContent, exts);

          return files.map((file) => {
            const rel = relative(absContent, file);
            const dest = join(outDir, m.outputDir, rel);

            dirsToCreate.add(dirname(dest));

            return { dest, file, outputDir: m.outputDir, rel };
          });
        });

        const allFilesNested = await Promise.all(tasks);
        const flattenedFiles = allFilesNested.flat();

        // 2. Concurrently create unique directory paths safely
        await Promise.all(
          Array.from(dirsToCreate).map((d) => mkdir(d, { recursive: true }))
        );

        // 3. Concurrently execute file mutations
        await Promise.all(
          flattenedFiles.map(async ({ file, dest, rel, outputDir }) => {
            console.log(`${TAG}   📄 Syncing ${outputDir}/${rel}`);
            await copyFile(file, dest);
            count += 1;
          })
        );

        console.log(`${TAG} ✅ Synced ${count} asset(s)\n`);
      },
      "astro:config:setup": ({ config, updateConfig }) => {
        rootDir = fileURLToPath(config.root);

        updateConfig({
          vite: {
            plugins: [createVitePlugin(rootDir, mappings, exts)],
          },
        });
      },
    },
    name: "sync-content-assets",
  };
}
