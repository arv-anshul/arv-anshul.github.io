import {
  getImageBufferFromMarkup,
  getMarkupFromOgData,
  type OgImageData,
} from "@/lib/og";

const imageData: OgImageData = {
  description:
    "Meet the friends and fellow developers Anshul Raj Verma builds, learns and shares this journey with, in tech and beyond.",
  icon: "lucide:users",
  title: "Friends",
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
