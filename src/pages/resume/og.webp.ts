import {
  getImageBufferFromMarkup,
  getMarkupFromOgData,
  type OgImageData,
} from "@/lib/og";

const imageData: OgImageData = {
  title: "Resume - ARV",
  description: "Resume of ARV in PDF format.",
  icon: "lucide:scroll-text",
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
