import { z } from "zod";

export const resumeSchema = z.object({
  basics: z.object({
    name: z.string(),
    label: z.string(),
    email: z.email(),
    url: z.httpUrl(),
    location: z.object({ address: z.string() }),
    profiles: z.array(
      z.object({ network: z.string(), username: z.string(), url: z.httpUrl() })
    ),
  }),
  work: z.array(
    z.object({
      name: z.string(),
      position: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      summary: z.string(),
      highlights: z.array(z.string()),
    })
  ),
  education: z.array(
    z.object({
      institution: z.string(),
      area: z.string(),
      studyType: z.string(),
      startDate: z.string(),
      endDate: z.string(),
      score: z.string(),
    })
  ),
  certificates: z.array(
    z.object({
      name: z.string(),
      date: z.string(),
      issuer: z.string(),
      summary: z.string(),
    })
  ),
  skills: z.array(
    z.object({ name: z.string(), keywords: z.array(z.string()) })
  ),
  projects: z.array(
    z.object({
      name: z.string(),
      url: z.httpUrl(),
      description: z.string(),
      highlights: z.array(z.string()),
    })
  ),
  languages: z.array(z.object({ language: z.string(), fluency: z.string() })),
});

export type ResumeData = z.infer<typeof resumeSchema>;

export async function loadResumeData(): Promise<ResumeData> {
  const response = await fetch(
    "https://raw.githubusercontent.com/arv-anshul/resume/refs/heads/main/resume.json"
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch resume JSON: ${response.status} ${response.statusText}`
    );
  }

  const data = await response.json();

  const parsed = resumeSchema.safeParse(data);
  if (!parsed.success) {
    console.error(parsed.error);
    throw new Error("Invalid resume JSON format");
  }

  return parsed.data;
}
