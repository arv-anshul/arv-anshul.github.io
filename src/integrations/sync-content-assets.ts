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

const DEFAULT_EXTENSIONS = [".png", ".pdf", ".gif", ".svg", ".jpeg", ".jpg"];

const MIME_TYPES: Record<string, string> = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".pdf": "application/pdf",
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

  const results: string[] = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await walk(full, exts)));
    } else if (isAsset(entry.name, exts)) {
      results.push(full);
    }
  }

  return results;
}

// ── Vite plugin (dev server) ───────────────────────────

function createVitePlugin(
  rootDir: string,
  mappings: SyncMapping[],
  exts: Set<string>
): Plugin {
  return {
    name: "vite-plugin-sync-content-assets",

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
    name: "sync-content-assets",

    hooks: {
      "astro:config:setup": ({ config, updateConfig }) => {
        rootDir = fileURLToPath(config.root);

        updateConfig({
          vite: {
            plugins: [createVitePlugin(rootDir, mappings, exts)],
          },
        });
      },

      "astro:build:done": async ({ dir }) => {
        const outDir = fileURLToPath(dir);
        let count = 0;

        console.log(`\n${TAG} 🔄 Syncing content assets to build output…`);

        for (const m of mappings) {
          const absContent = join(rootDir, m.contentDir);
          const files = await walk(absContent, exts);

          for (const file of files) {
            const rel = relative(absContent, file);
            const dest = join(outDir, m.outputDir, rel);

            console.log(`${TAG}   📄 Syncing ${m.outputDir}/${rel}`);
            await mkdir(dirname(dest), { recursive: true });
            await copyFile(file, dest);
            count++;
          }
        }

        console.log(`${TAG} ✅ Synced ${count} asset(s)\n`);
      },
    },
  };
}
