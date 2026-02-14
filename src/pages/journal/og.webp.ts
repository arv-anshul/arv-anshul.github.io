import {
  getImageBufferFromMarkup,
  getMarkupFromOgData,
  type OgImageData,
} from "@/lib/og";

const imageData: OgImageData = {
  title: "Journal - ARV",
  description: "Weekly Journals written by ARV.",
  icon: "lucide:notebook-pen",
};

export const GET = async ({
  request,
}: {
  props: OgImageData;
  request: Request;
}) => {
  const markup = await getMarkupFromOgData(request.url, imageData);
  const imageBuffer = await getImageBufferFromMarkup(markup);
  return new Response(imageBuffer);
};
