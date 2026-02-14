export function getBlogSlugs(id: string): string[] {
  const slugs = id.split("/");

  if (slugs.length > 2) {
    throw new Error("Blog post should be one folder nested.");
  }

  return slugs;
}
