import { expect, test } from "bun:test";
import { markdownToHtml } from "satteri";
import { autolinkHeadings, githubAlerts } from "./markdown-plugins";

const render = (src: string) =>
  markdownToHtml(src, {
    hastPlugins: [autolinkHeadings],
    mdastPlugins: [githubAlerts],
  }).html;

test("alert markup matches the CSS contract", () => {
  const html = render("> [!NOTE]\n> Body.\n");

  expect(html).toContain('<div class="markdown-alert markdown-alert-note">');
  expect(html).toContain('<p class="markdown-alert-title">');
  expect(html).toContain('class="octicon"');
  expect(html).toContain("Note</p>");
  expect(html).toContain("<p>Body.</p>");
});

test("every alert kind is recognised", () => {
  for (const kind of ["note", "tip", "important", "warning", "caution"]) {
    const html = render(`> [!${kind.toUpperCase()}]\n> x\n`);
    expect(html).toContain(`markdown-alert-${kind}`);
  }
});

test("text after the marker overrides the default title", () => {
  const html = render("> [!CAUTION] Cons\n>\n> Body.\n");

  expect(html).toContain("markdown-alert-caution");
  expect(html).toContain("Cons</p>");
  expect(html).not.toContain("Caution</p>");
  expect(html).toContain("<p>Body.</p>");
});

test("inline body on the line after the marker survives", () => {
  const html = render("> [!TIP]\n> Also **bold** here.\n");

  expect(html).toContain("Tip</p>");
  expect(html).toContain("<p>Also <strong>bold</strong> here.</p>");
});

test("plain blockquotes are untouched", () => {
  expect(render("> just a quote\n")).toContain("<blockquote>");
  // A marker mid-line is not an alert, same as GitHub.
  expect(render("> text [!NOTE] more\n")).toContain("<blockquote>");
});

test("headings get ids, appended anchors, and per-document dedupe", () => {
  const html = render("# Same\n\n## Same\n");

  expect(html).toContain('<h1 id="same">Same<a');
  expect(html).toContain('href="#same"');
  expect(html).toContain('<h2 id="same-1">');
  // Kebab-case SVG attributes survive; camelCase would be dropped by browsers.
  expect(html).toContain('stroke-linecap="round"');
});

test("slug counters do not leak between documents", () => {
  expect(render("# Same\n")).toContain('id="same"');
  expect(render("# Same\n")).toContain('id="same"');
});
