import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod/v4";
import { iconSchema } from "@/lib/data-loaders/common";

/**
 * This is a subset of `@astrojs/rss`'s `rssSchema` schema.
 */
const BASE_COLLECTION_SCHEMA = z.object({
  title: z.string(),
  description: z.string(),
  icon: iconSchema,
  author: z.enum(["Anshul Raj Verma"] as const).default("Anshul Raj Verma"),
  pubDate: z
    .union([z.string(), z.number(), z.date()])
    .transform((value) => new Date(value))
    .refine((value) => !Number.isNaN(value.getTime())), // From @astro/rss package
  categories: z.array(z.string()).min(1),
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "content/blog" }),
  schema: BASE_COLLECTION_SCHEMA,
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "content/projects" }),
  schema: BASE_COLLECTION_SCHEMA,
});

const journal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "content/journal" }),
  schema: BASE_COLLECTION_SCHEMA,
});

export const collections = { blog, projects, journal };
