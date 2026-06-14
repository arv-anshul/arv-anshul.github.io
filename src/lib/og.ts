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
  const { node, stylesheets } = await fromJsx(markup);

  const renderer = new Renderer();
  const png = await renderer.render(node, {
    stylesheets,
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
    <!-- Outer Background to simulate depth -->
    <div tw="flex w-full h-full bg-zinc-950 p-3">
      <!-- Main Card -->
      <div tw="flex flex-col justify-between w-full h-full rounded-3xl border-4 border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

        <!-- Top Content Wrapper -->
        <div tw="flex flex-col w-full">
          <!-- Header row -->
          <div tw="flex items-center w-full mb-8">
            <!-- Icon -->
            <div tw="flex items-center justify-center w-40 h-40 rounded-3xl bg-zinc-800 border-2 border-zinc-700 mr-10 shadow-lg shrink-0">
              <img src="${iconDataUri}" tw="h-25 w-25" />
            </div>

            <!-- Title + Meta -->
            <div tw="flex flex-col justify-center max-w-3xl">
              <h1 tw="text-6xl mt-0 mb-5 font-bold text-white tracking-tight leading-tight line-clamp-2">${data.title}</h1>

              <div tw="flex items-center text-zinc-400">
                <div tw="flex items-center mr-8">
                  <img src="${calendarIconUri}" tw="h-6 w-6 mr-3" />
                  <span tw="text-2xl uppercase tracking-wide">
                    ${data.pubDate.toLocaleDateString("en-IN", { year: "numeric", month: "short", day: "2-digit" })}
                  </span>
                </div>

                <div tw="flex items-center">
                  <img src="${userIconUri}" tw="h-6 w-6 mr-3" />
                  <span tw="text-2xl">${data.author}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Description -->
          <p tw="text-3xl mt-0 text-zinc-400 leading-relaxed overflow-hidden max-h-32">
            ${data.description}
          </p>
        </div>

        <!-- Footer perfectly locked to the bottom -->
        <div tw="flex w-full justify-end items-end mt-4 shrink-0">
          <span tw="text-zinc-500 text-2xl tracking-wide font-mono">${url.replace("/og.webp", "")}</span>
        </div>

      </div>
    </div>
  `;

  return markup;
}

export interface OgImageData {
  description: string;
  icon?: string;
  title: string;
}

export async function getMarkupFromOgData(url: string, data: OgImageData) {
  // Convert <svg> component into data URI to render it via <img> tag
  const mainIcon = data.icon
    ? await getIconSVGString(data.icon)
    : OmSvg.toString();
  const iconDataUri = `data:image/svg+xml,${encodeURIComponent(mainIcon.replace(/currentColor/g, "#ffffff").replace("favicon", "no-favicon"))}`;

  const markup = html`
    <!-- Outer Background to simulate depth -->
    <div tw="flex w-full h-full bg-zinc-950 p-3">
      <!-- Main Card -->
      <div tw="flex flex-col justify-between items-center w-full h-full rounded-3xl border-4 border-zinc-800 bg-zinc-900 p-12 shadow-2xl">

        <!-- Empty spacer to balance the flex distribution -->
        <div tw="flex w-full h-8 shrink-0"></div>

        <!-- Center Content -->
        <div tw="flex flex-col items-center justify-center w-full max-w-4xl">
          <!-- Icon -->
          <div tw="flex items-center justify-center w-40 h-40 rounded-3xl bg-zinc-800 border-2 border-zinc-700 mb-3 shadow-lg shrink-0">
            <img src="${iconDataUri}" tw="h-25 w-25" />
          </div>
          <!-- Title -->
          <h1 tw="text-7xl font-bold mt-0 mb-3 text-white leading-tight text-center tracking-tight">${data.title}</h1>
          <!-- Description -->
          <p tw="text-3xl text-zinc-400 mt-0 mb-0 leading-relaxed text-center overflow-hidden max-h-32">${data.description}</p>
        </div>

        <!-- Footer perfectly locked to the bottom -->
        <div tw="flex w-full justify-center items-end shrink-0">
          <span tw="text-zinc-500 text-2xl tracking-wide font-mono">${url.replace("/og.webp", "")}</span>
        </div>

      </div>
    </div>
  `;

  return markup;
}
