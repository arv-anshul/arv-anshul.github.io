import { z } from "zod";
import { iconSchema, socialProfileSchema } from "./common";

const projectSchema = z.object({
  // This should be a relative url from the base of the site (that's why startsWith "/")
  relative_url: z.string().startsWith("/").nullable(),
  title: z.string(),
  description: z.string(),
  highlights: z.array(z.string()).min(3).optional(),
  urls: z.array(socialProfileSchema),
  tech_icons: z.array(iconSchema).min(1),
  completed_on: z
    .string()
    .regex(
      /(January|February|March|April|May|June|July|August|September|October|November|December),\s20\d{2}$/
    ),
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
