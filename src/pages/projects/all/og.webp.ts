import {
  getImageBufferFromMarkup,
  getMarkupFromOgData,
  type OgImageData,
} from "@/lib/og";

const imageData: OgImageData = {
  title: "All Projects",
  description:
    "A full list of Anshul Raj Verma's minor projects and experiments — small tools, prototypes and side builds in Python and AI.",
  icon: "octicon:rocket-16",
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
