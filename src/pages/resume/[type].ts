import type { APIRoute, GetStaticPaths } from "astro";

const DOWNLOAD_FILENAME = "Anshul Raj Verma - Resume.pdf";

const resumeUrls: Record<string, string> = {
  basic: "https://github.com/arv-anshul/resume/raw/main/pdf/basic.pdf",
  vantage: "https://github.com/arv-anshul/resume/raw/main/pdf/vantage.pdf",
};

export const getStaticPaths: GetStaticPaths = () =>
  Object.keys(resumeUrls).map((type) => ({ params: { type } }));

export const GET: APIRoute = async ({ params }) => {
  const pdfUrl = resumeUrls[params.type || "basic"];

  const response = await fetch(pdfUrl);
  const pdfBuffer = await response.arrayBuffer();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `inline; filename="${DOWNLOAD_FILENAME}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
};
