import {
  getImageBufferFromMarkup,
  getMarkupFromOgData,
  type OgImageData,
} from "@/lib/og";

const imageData: OgImageData = {
  title: "404: Not Found",
  description:
    "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
  icon: "mdi:skull-crossbones",
};

export const GET = async ({ request }: { request: Request }) => {
  const markup = await getMarkupFromOgData(
    new URL(request.url).origin,
    imageData
  );
  const imageBuffer = await getImageBufferFromMarkup(markup);
  return new Response(imageBuffer);
};
