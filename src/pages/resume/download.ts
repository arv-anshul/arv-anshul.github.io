// NOTE:
// Headers doesn't work here as there is no Astro adapter like Node.js
// This page will prerender as "download" file without any extension when access
// this route you'll prompt to download this binary file there will no extension
// even while downloading which may confuse the user.

import type { APIRoute } from "astro";
import { loadInfoData } from "@/lib/data-loaders/info";

const DOWNLOAD_FILENAME = "Anshul Raj Verma - Resume.pdf";

const data = await loadInfoData();
const resumeUrl = data.resume_url;

export const GET: APIRoute = async () => {
  const response = await fetch(resumeUrl);
  const pdfBuffer = await response.arrayBuffer();

  return new Response(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `filename="${DOWNLOAD_FILENAME}"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
};
