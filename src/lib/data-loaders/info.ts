import { z } from "zod";
import { iconSchema, socialProfileSchema } from "./common";

const infoDataSchema = z.object({
  name: z.string(),
  avatar_url: z.httpUrl(),
  resume_url: z.httpUrl(),
  intro_text: z.string(),
  socials: z.array(socialProfileSchema),
  tech_stack: z.record(
    z.string(),
    z.array(
      z.object({
        name: z.string(),
        icon: iconSchema,
      })
    )
  ),
});

export type InfoData = z.infer<typeof infoDataSchema>;

export async function loadInfoData(): Promise<InfoData> {
  const rawInfoData = await import("data/info.yaml");
  return infoDataSchema.parse(rawInfoData);
}
