import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod/v4";
import { iconSchema } from "@/lib/data-loaders/common";

/**
 * This is a subset of `@astrojs/rss`'s `rssSchema` schema.
 */
const BASE_COLLECTION_SCHEMA = z.object({
  author: z.enum(["Anshul Raj Verma"] as const).default("Anshul Raj Verma"),
  categories: z.array(z.string()).min(1),
  description: z.string(),
  icon: iconSchema,
  pubDate: z
    .union([z.string(), z.number(), z.date()])
    .transform((value) => new Date(value))
    .refine((value) => !Number.isNaN(value.getTime())), // From @astro/rss package
  title: z.string(),
  updatedDate: z
    .union([z.string(), z.number(), z.date()])
    .transform((value) => new Date(value))
    .refine((value) => !Number.isNaN(value.getTime()))
    .optional(),
});

const blog = defineCollection({
  loader: glob({ base: "content/blog", pattern: "**/*.md" }),
  schema: BASE_COLLECTION_SCHEMA,
});

const projects = defineCollection({
  loader: glob({ base: "content/projects", pattern: "**/*.md" }),
  schema: BASE_COLLECTION_SCHEMA,
});

const journal = defineCollection({
  loader: glob({ base: "content/journal", pattern: "**/*.md" }),
  schema: BASE_COLLECTION_SCHEMA,
});

export const collections = { blog, journal, projects };
