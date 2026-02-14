import { z } from "zod";

export const iconSchema = z
  .string()
  .regex(/^(octicon:|mdi:|lucide:|simple-icons:)/)
  .lowercase();

export const socialProfileSchema = z.object({
  name: z.string(),
  icon: iconSchema,
  url: z.url(), // Not z.httpUrl() because it can be mailto:email@email.com type url too.
});
