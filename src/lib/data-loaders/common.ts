import { z } from "zod/v4";

export const iconSchema = z
  .string()
  .regex(/^(octicon:|mdi:|lucide:|simple-icons:)/)
  .lowercase();

export const socialProfileSchema = z.object({
  icon: iconSchema,
  name: z.string(),
  url: z.url(), // Not z.httpUrl() because it can be mailto:email@email.com type url too.
});
