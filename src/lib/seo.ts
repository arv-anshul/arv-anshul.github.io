import { AUTHOR_JOB_TITLE } from "@/consts";
import type { InfoData } from "@/lib/data-loaders/info";

type JsonLd = Record<string, unknown>;

/** schema.org Person node for the site author. */
export function getPersonJsonLd(info: InfoData): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    image: info.avatar_url,
    jobTitle: AUTHOR_JOB_TITLE,
    name: info.name,
    sameAs: info.socials
      .filter((s) => !s.url.startsWith("mailto:") && s.url !== info.site_url)
      .map((s) => s.url),
    url: info.site_url,
  };
}

/** schema.org WebSite node for the homepage. */
export function getWebSiteJsonLd(info: InfoData): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    author: { "@type": "Person", name: info.name, url: info.site_url },
    name: info.name,
    url: info.site_url,
  };
}

/**
 * schema.org BreadcrumbList derived from the URL path segments.
 * Returns null for the root path (no meaningful trail).
 */
export function getBreadcrumbJsonLd(url: URL, siteUrl: string): JsonLd | null {
  const segments = url.pathname.split("/").filter(Boolean);
  if (segments.length === 0) {
    return null;
  }

  const crumbs = [
    { item: siteUrl, name: "Home" },
    ...segments.map((seg, i) => ({
      item: new URL(
        `/${segments.slice(0, i + 1).join("/")}`,
        siteUrl
      ).toString(),
      name: decodeURIComponent(seg).replace(/-/g, " "),
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      item: c.item,
      name: c.name,
      position: i + 1,
    })),
  };
}

/** schema.org BlogPosting node for a Markdown content entry. */
export function getArticleJsonLd(opts: {
  title: string;
  description: string;
  url: string;
  image: string;
  pubDate: Date;
  updatedDate?: Date;
  author: string;
  categories: string[];
  siteUrl: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    author: { "@type": "Person", name: opts.author, url: opts.siteUrl },
    dateModified: (opts.updatedDate ?? opts.pubDate).toISOString(),
    datePublished: opts.pubDate.toISOString(),
    description: opts.description,
    headline: opts.title,
    image: opts.image,
    keywords: opts.categories.join(", "),
    mainEntityOfPage: { "@id": opts.url, "@type": "WebPage" },
  };
}
