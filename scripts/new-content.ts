#!/usr/bin/env bun

// biome-ignore lint/performance/noNamespaceImport: explicit import to ignore biome warning
import * as Bun from "bun";

// ── Constants ────────────────────────────────────────────────────────

const CONTENT_TYPES = ["blog", "journal", "project"] as const;
type ContentType = (typeof CONTENT_TYPES)[number];

const ICON_PATTERN = /^(octicon:|mdi:|lucide:|simple-icons:)/;

const USAGE = `
Usage:
  bun scripts/new-content.ts --type <blog|journal|project> --title <title> --description <desc> --icon <icon> --categories <cat1> --categories <cat2>

Options:
  -t, --type          Content type: blog, journal, or project
      --title         Page title
  -d, --description   Page description
  -i, --icon          Icon (must start with octicon:, mdi:, lucide:, or simple-icons:)
  -c, --categories    Categories (repeat flag for multiple, or comma-separated)

Examples:
  bun scripts/new-content.ts -t blog --title "My First Post" -d "A great post" -i "octicon:pencil" -c typescript -c astro
  bun scripts/new-content.ts -t journal --title "June Reflections" -d "Monthly thoughts" -i "mdi:notebook" -c life
  bun scripts/new-content.ts -t project --title "Cool App" -d "My cool app" -i "lucide:rocket" -c "open-source,typescript"
`;

// ── Helpers ──────────────────────────────────────────────────────────

function fail(message: string): never {
  console.error(`\n  ✖ ${message}\n`);
  console.error(USAGE);
  process.exit(1);
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// ── Parse args from Bun.argv ─────────────────────────────────────────

const rawArgs = Bun.argv.slice(2);
const parsed: Record<string, string[]> = {};

for (let i = 0; i < rawArgs.length; i++) {
  const arg = rawArgs[i];
  if (!arg.startsWith("-")) {
    continue;
  }

  const key = arg.replace(/^-+/, "");
  parsed[key] ??= [];

  if (i + 1 < rawArgs.length && !rawArgs[i + 1].startsWith("-")) {
    parsed[key].push(rawArgs[++i]);
  }
}

// Resolve short aliases
const get = (...keys: string[]) => {
  for (const k of keys) {
    if (parsed[k]?.[0]) {
      return parsed[k][0];
    }
  }
  return undefined;
};
const getAll = (...keys: string[]) => {
  for (const k of keys) {
    if (parsed[k]?.length) {
      return parsed[k];
    }
  }
  return [];
};
const has = (...keys: string[]) => keys.some((k) => k in parsed);

// ── Help ─────────────────────────────────────────────────────────────

if (has("h", "help")) {
  console.log(USAGE);
  process.exit(0);
}

// ── Validate ─────────────────────────────────────────────────────────

const type = get("t", "type") as ContentType | undefined;
if (!type) {
  fail("--type is required");
}
if (!CONTENT_TYPES.includes(type)) {
  fail(`--type must be one of: ${CONTENT_TYPES.join(", ")}`);
}

const title = get("title");
if (!title) {
  fail("--title is required");
}

const description = get("d", "description");
if (!description) {
  fail("--description is required");
}

const icon = get("i", "icon")?.toLowerCase();
if (!icon) {
  fail("--icon is required");
}
if (!ICON_PATTERN.test(icon)) {
  fail("--icon must start with octicon:, mdi:, lucide:, or simple-icons:");
}

const rawCategories = getAll("c", "categories");
const categories = rawCategories
  .flatMap((c) => c.split(","))
  .map((c) => c.trim())
  .filter(Boolean);
if (categories.length === 0) {
  fail("--categories requires at least one value");
}

// ── Build file path (template literals instead of path.join) ─────────

const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, "0");
const pubDate = now.toISOString().split("T")[0]; // YYYY-MM-DD
const slug = slugify(title);

function getFilePath(): string {
  switch (type) {
    case "blog":
      return `content/blog/${year}/${slug}.md`;
    case "journal":
      return `content/journal/${year}/${month}.md`;
    case "project":
      return `content/projects/${slug}.md`;
    default:
      fail(`Wrong type argument. Must be one from ${CONTENT_TYPES}`);
  }
}

// ── Generate frontmatter ─────────────────────────────────────────────

function buildContent(): string {
  const categoryLines = categories.join(", ");

  return [
    "---",
    `title: ${title}`,
    `description: ${description}`,
    `icon: ${icon}`,
    `pubDate: ${pubDate}`,
    `categories: [${categoryLines}]`,
    "---",
    "",
  ].join("\n");
}

// ── Write file ───────────────────────────────────────────────────────

const filePath = getFilePath();

if (await Bun.file(filePath).exists()) {
  fail(`File already exists: ${filePath}`);
}

// Create parent directories (no Bun-native mkdir — use Bun's built-in shell)
const dir = filePath.substring(0, filePath.lastIndexOf("/"));
await Bun.$`mkdir -p ${dir}`.quiet();

await Bun.write(filePath, buildContent());

console.log(`\n  ✔ Created ${type}: ${filePath}\n`);
