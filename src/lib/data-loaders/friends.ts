import { z } from "zod";
import { socialProfileSchema } from "./common";

const friendInfoSchema = z.object({
  name: z.string(),
  primary_url: z.httpUrl(),
  avatar: z.httpUrl(),
  profession: z.string(),
  description: z.string(),
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
