import { z } from "zod/v4";
import { socialProfileSchema } from "./common";

const friendInfoSchema = z.object({
  avatar: z.httpUrl(),
  description: z.string(),
  name: z.string(),
  primary_url: z.httpUrl(),
  profession: z.string(),
  socials: z.array(socialProfileSchema),
});

const friendsDataSchema = z.object({
  friends: z.array(friendInfoSchema),
});

export type FriendsData = z.infer<typeof friendsDataSchema>;

export async function loadFriendsData(): Promise<FriendsData> {
  const rawFriendsData = await import("data/friends.yaml");
  return friendsDataSchema.parse(rawFriendsData);
}
