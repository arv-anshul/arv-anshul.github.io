import { z } from "zod/v4";
import { iconSchema, socialProfileSchema } from "./common";

const projectSchema = z.object({
  completed_on: z
    .string()
    .regex(
      /(January|February|March|April|May|June|July|August|September|October|November|December),\s20\d{2}$/
    ),
  description: z.string(),
  highlights: z.array(z.string()).min(3).optional(),
  // This should be a relative url from the base of the site (that's why startsWith "/")
  relative_url: z.string().startsWith("/").nullable(),
  tech_icons: z.array(iconSchema).min(1),
  title: z.string(),
  urls: z.array(socialProfileSchema),
});

const projectsIndexSchema = z.object({
  projects: z.array(projectSchema),
});

export type Project = z.infer<typeof projectSchema>;
export type ProjectsData = z.infer<typeof projectsIndexSchema>;

export async function loadProjectsData(): Promise<ProjectsData> {
  const rawProjectsData = await import("data/projects.yaml");
  return projectsIndexSchema.parse(rawProjectsData);
}
