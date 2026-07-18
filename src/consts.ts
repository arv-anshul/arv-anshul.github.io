/**
 * Site-level SEO constants for non-markdown pages.
 *
 * `site_url`, author name and social links come from `data/info.yaml`
 * (via `@/lib/data-loaders/info`). Per-entry metadata (blogs, journals,
 * projects) lives in the markdown frontmatter. Do NOT duplicate either here.
 */

export const AUTHOR_JOB_TITLE = "Data Scientist and GenAI Developer";

export const DEFAULT_DESCRIPTION =
  "Data Scientist building end-to-end GenAI apps with LangChain, LangGraph and MCP. Explore my projects, blog, resume and journal.";

export const LOCALE = "en_US";
export const TWITTER_HANDLE = "@arvanshul";

export const SITE_KEYWORDS = [
  "Anshul Raj Verma",
  "ARV",
  "Data Scientist",
  "GenAI Developer",
  "LangChain",
  "LangGraph",
  "LlamaIndex",
  "Model Context Protocol",
  "MCP",
  "Machine Learning",
  "Python",
];

// theme-color meta values, matched to the site's light/dark backgrounds.
export const THEME_COLOR_LIGHT = "#fafafa"; // zinc-50
export const THEME_COLOR_DARK = "#09090b"; // zinc-950
