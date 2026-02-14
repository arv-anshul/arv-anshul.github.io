import type { DataEntryMap, InferEntrySchema } from "astro:content";
import { Renderer, type RenderOptions } from "@takumi-rs/core";
import { fromJsx } from "@takumi-rs/helpers/jsx";
import OmSvg from "public/favicon.svg?raw";
import { html } from "satori-html";
import getIconSVGString from "@/lib/icon-svg";

export const renderOptions: RenderOptions = {
  width: 1200,
  height: 630,
  format: "webp",
};

export async function getImageBufferFromMarkup(
  markup: ReturnType<typeof html>,
  options?: Partial<RenderOptions>
) {
  const node = await fromJsx(markup);

  const renderer = new Renderer();
  const png = await renderer.render(node, {
    ...renderOptions,
    ...options,
  });
  return png.buffer as ArrayBuffer;
}

export async function getMarkupFromEntry(
  url: string,
  data: InferEntrySchema<keyof DataEntryMap>
) {
  // Convert <svg> component into data URI to render it via <img> tag
  const calendarIcon = await getIconSVGString("lucide:calendar");
  const calendarIconUri = `data:image/svg+xml,${encodeURIComponent(calendarIcon.replace(/currentColor/g, "#a1a1aa"))}`;

  const userIcon = await getIconSVGString("lucide:user-pen");
  const userIconUri = `data:image/svg+xml,${encodeURIComponent(userIcon.replace(/currentColor/g, "#a1a1aa"))}`;

  const mainIcon = await getIconSVGString(data.icon);
  const iconDataUri = `data:image/svg+xml,${encodeURIComponent(mainIcon.replace(/currentColor/g, "#ffffff"))}`;

  const markup = html`
      <!-- Card -->
      <div tw="flex flex-col justify-center w-full h-full rounded-2xl border-4 border-zinc-700 bg-zinc-900 p-10 pb-6">
        <!-- Header row -->
        <div tw="flex justify-between items-start w-full">
          <!-- Title + Meta -->
          <div tw="flex flex-col">
            <h1 tw="text-7xl mt-0 mb-2 font-bold text-white leading-tight">${data.title}</h1>
            <div tw="flex gap-2 items-center text-zinc-400">
              <img src="${calendarIconUri}" tw="h-8 w-8" />
              <span tw="text-xl mr-4"> ${data.pubDate.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "2-digit" })} </span>
              <img src="${userIconUri}" tw="h-8 w-8" />
              <span tw="text-xl">${data.author}</span>
            </div>
          </div>
          <!-- Icon -->
          <div tw="flex items-center justify-center w-32 h-32 rounded-lg bg-zinc-800">
            <img src="${iconDataUri}" tw="h-24 w-24" />
          </div>
        </div>
        <!-- Description -->
        <p tw="text-3xl mb-auto text-zinc-400 leading-relaxed overflow-hidden"> ${data.description} </p>
        <!-- Footer -->
        <p tw="text-zinc-600 text-2xl mb-0 text-end">${url.replace("/og.webp", "")}</p>
      </div>
  `;

  return markup;
}

export interface OgImageData {
  title: string;
  description: string;
  icon?: string;
}

export async function getMarkupFromOgData(url: string, data: OgImageData) {
  // Convert <svg> component into data URI to render it via <img> tag
  const mainIcon = data.icon
    ? await getIconSVGString(data.icon)
    : OmSvg.toString();
  const iconDataUri = `data:image/svg+xml,${encodeURIComponent(mainIcon.replace(/currentColor/g, "#ffffff").replace("favicon", "no-favicon"))}`;

  const markup = html`
      <!-- Card -->
      <div tw="flex flex-col justify-center items-center w-full h-full rounded-2xl border-4 border-zinc-700 bg-zinc-900 p-10">
        <!-- Icon -->
        <div tw="flex items-center mt-0 mb-0 justify-center w-36 h-36 rounded-lg bg-zinc-800">
          <img src="${iconDataUri}" tw="h-28 w-28" />
        </div>
        <!-- Title -->
        <h1 tw="text-7xl font-bold mt-0 mb-0 text-white leading-tight">${data.title}</h1>
        <!-- Description -->
        <p tw="text-3xl text-zinc-400 mt-0 mb-0 leading-relaxed overflow-hidden text-center">${data.description}</p>
        <p tw="text-zinc-600 text-2xl mt-2 mb-0 text-end">${url.replace("/og.webp", "")}</p>
      </div>
  `;

  return markup;
}
