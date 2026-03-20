import { z } from "zod/v4";
import { iconSchema } from "./common";

const allProjectsSchema = z.object({
  projects: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: iconSchema,
      url: z.string(),
    })
  ),
});

export type AllProjectsData = z.infer<typeof allProjectsSchema>;

export async function loadAllProjects(): Promise<AllProjectsData> {
  const rawInfoData = await import("data/all_projects.yaml");
  return allProjectsSchema.parse(rawInfoData);
}
