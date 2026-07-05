import {
  getImageBufferFromMarkup,
  getMarkupFromOgData,
  type OgImageData,
} from "@/lib/og";

const imageData: OgImageData = {
  title: "404 — Page Not Found",
  description:
    "The page you're looking for may have been moved, renamed or removed. Head back home to explore projects, blog and more.",
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
