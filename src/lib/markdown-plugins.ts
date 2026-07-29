import octiconSet from "@iconify-json/octicon/icons.json";
import GithubSlugger from "github-slugger";
import type { Blockquote, Paragraph } from "mdast";
import { defineHastPlugin, defineMdastPlugin } from "satteri";

/**
 * `hName`/`hProperties` are the mdast→hast escape hatch Sätteri honours, but
 * the augmentation normally lives in `mdast-util-to-hast`, which we don't pull
 * in. Declare just the two fields we set.
 */
declare module "mdast" {
  interface BlockquoteData {
    hName?: string;
    hProperties?: Record<string, unknown>;
  }
  interface ParagraphData {
    hProperties?: Record<string, unknown>;
  }
}

/* ==========================================================================
 * GitHub alerts — replaces `remark-github-alerts`
 *
 * `> [!NOTE]` blockquotes become:
 *   <div class="markdown-alert markdown-alert-note">
 *     <p class="markdown-alert-title"><svg class="octicon">…</svg>Note</p>
 *     …body…
 *   </div>
 * Styled in src/styles/custom-prose.css.
 * ========================================================================== */

/**
 * Alert kind → title and the Octicon GitHub itself uses. Icons resolve from
 * `@iconify-json/octicon` (already a dependency) at build time, so bumping the
 * icon set updates them.
 */
const ALERTS = {
  caution: { icon: "stop-16", label: "Caution" },
  important: { icon: "report-16", label: "Important" },
  note: { icon: "info-16", label: "Note" },
  tip: { icon: "light-bulb-16", label: "Tip" },
  warning: { icon: "alert-16", label: "Warning" },
} as const;

type AlertKind = keyof typeof ALERTS;

// Narrow cast: letting TS infer the 482 KB icons.json literal type would crawl.
const octicons = (octiconSet as { icons: Record<string, { body: string }> })
  .icons;

/** Every `*-16` Octicon is 16×16; the set declares no default dimensions. */
const ALERT_ICONS = Object.fromEntries(
  Object.entries(ALERTS).map(([kind, { icon }]) => {
    const body = octicons[icon]?.body;
    if (!body) {
      throw new Error(`Octicon "${icon}" missing from @iconify-json/octicon`);
    }
    return [
      kind,
      `<svg class="octicon" viewBox="0 0 16 16" width="16" height="16" aria-hidden="true">${body}</svg>`,
    ];
  })
) as Record<AlertKind, string>;

/**
 * The marker must open the blockquote's first line. Anything else on that line
 * overrides the default title (`> [!CAUTION] Cons`), matching the behaviour
 * `remark-github-alerts` gave us.
 */
const ALERT_MARKER =
  /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\][ \t]*([^\n]*)(?:\n|$)/;

export const githubAlerts = defineMdastPlugin({
  blockquote(node) {
    const [lead, ...siblings] = node.children;
    if (lead?.type !== "paragraph") {
      return;
    }

    const [marker, ...inlineRest] = lead.children;
    if (marker?.type !== "text") {
      return;
    }

    const match = ALERT_MARKER.exec(marker.value);
    if (!match) {
      return;
    }

    const kind = match[1].toLowerCase() as AlertKind;
    const title = match[2].trim() || ALERTS[kind].label;

    // Whatever followed the marker inside that first paragraph stays as body.
    const leftover = marker.value.slice(match[0].length);
    const leadRest = [
      ...(leftover ? [{ type: "text" as const, value: leftover }] : []),
      ...inlineRest,
    ];

    // Reuses the `blockquote` type with an `hName` override: Sätteri's
    // op-stream can only encode known mdast node types, so a custom one throws.
    const heading: Paragraph = {
      children: [
        { type: "html", value: ALERT_ICONS[kind] },
        { type: "text", value: title },
      ],
      data: { hProperties: { className: ["markdown-alert-title"] } },
      type: "paragraph",
    };

    const alert: Blockquote = {
      children: [
        heading,
        ...(leadRest.length ? [{ ...lead, children: leadRest }] : []),
        ...siblings,
      ],
      data: {
        hName: "div",
        hProperties: {
          className: ["markdown-alert", `markdown-alert-${kind}`],
        },
      },
      type: "blockquote",
    };

    return alert;
  },
  name: "github-alerts",
});

/* ==========================================================================
 * Heading anchors — replaces `rehype-autolink-headings` (behavior: 'append')
 *
 * Sätteri assigns heading ids too, but Astro pushes its `heading-ids` plugin
 * *after* user hast plugins (see @astrojs/markdown-satteri satteri-processor.js),
 * so `node.properties.id` is not set yet when we run. We slug it ourselves with
 * the same `github-slugger` Astro uses; its plugin then reuses the existing id,
 * keeping the TOC metadata and every existing URL fragment intact.
 * ========================================================================== */

const CHAIN_ICON_PATHS = [
  "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",
  "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",
];

export const autolinkHeadings = defineHastPlugin({
  element: {
    filter: ["h1", "h2", "h3", "h4", "h5", "h6"],
    visit(node, ctx) {
      let id = node.properties?.id;

      if (typeof id !== "string") {
        // One slugger per document, so duplicate headings dedupe within a page
        // but counters never leak across pages.
        const bag = ctx.data as { slugger?: GithubSlugger };
        bag.slugger ??= new GithubSlugger();
        id = bag.slugger.slug(ctx.textContent(node));
        ctx.setProperty(node, "id", id);
      }

      ctx.appendChild(node, {
        children: [
          {
            children: [
              {
                children: CHAIN_ICON_PATHS.map((d) => ({
                  children: [],
                  properties: { d },
                  tagName: "path",
                  type: "element" as const,
                })),
                // Kebab-case, not hast camelCase: Sätteri passes unknown
                // camelCase keys through verbatim and SVG attributes are
                // case-sensitive, so `strokeLinecap` would be ignored.
                properties: {
                  fill: "none",
                  height: 24,
                  stroke: "currentColor",
                  "stroke-linecap": "round",
                  "stroke-linejoin": "round",
                  "stroke-width": 2,
                  viewBox: "0 0 24 24",
                  width: 24,
                  xmlns: "http://www.w3.org/2000/svg",
                },
                tagName: "svg",
                type: "element",
              },
            ],
            properties: { className: ["heading-anchor-icon"] },
            tagName: "span",
            type: "element",
          },
        ],
        properties: {
          "aria-label": "Link to section",
          className: ["heading-anchor"],
          href: `#${id}`,
        },
        tagName: "a",
        type: "element",
      });
    },
  },
  name: "autolink-headings",
});
