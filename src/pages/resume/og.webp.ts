// Fetch the OG Image of GitHub repository (https://github.com/arv-anshul/resume) and serve.

const IMAGE_URL =
  "https://repository-images.githubusercontent.com/922600035/72c58a40-21cd-455e-a322-2a76019a66ef";

export const GET = async () => {
  const image = await fetch(IMAGE_URL);
  return new Response(await image.arrayBuffer());
};
