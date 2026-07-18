import { z } from "zod";

export const resumeSchema = z.object({
  basics: z.object({
    email: z.email(),
    label: z.string(),
    location: z.object({ address: z.string() }),
    name: z.string(),
    profiles: z.array(
      z.object({ network: z.string(), url: z.httpUrl(), username: z.string() })
    ),
    url: z.httpUrl(),
  }),
  certificates: z.array(
    z.object({
      date: z.string(),
      issuer: z.string(),
      name: z.string(),
      summary: z.string(),
    })
  ),
  education: z.array(
    z.object({
      area: z.string(),
      endDate: z.string(),
      institution: z.string(),
      score: z.string(),
      startDate: z.string(),
      studyType: z.string(),
    })
  ),
  languages: z.array(z.object({ fluency: z.string(), language: z.string() })),
  projects: z.array(
    z.object({
      description: z.string(),
      highlights: z.array(z.string()),
      name: z.string(),
      url: z.httpUrl(),
    })
  ),
  skills: z.array(
    z.object({ keywords: z.array(z.string()), name: z.string() })
  ),
  work: z.array(
    z.object({
      endDate: z.string(),
      highlights: z.array(z.string()),
      name: z.string(),
      position: z.string(),
      startDate: z.string(),
      summary: z.string(),
    })
  ),
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
