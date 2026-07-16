import fs from "node:fs";
import path from "node:path";
import type { APIRoute, GetStaticPaths } from "astro";

const DATA_DIR = path.resolve("data");

export const prerender = true;

export const getStaticPaths: GetStaticPaths = () =>
  fs
    .readdirSync(DATA_DIR, { withFileTypes: true })
    .filter((entry) => entry.isFile())
    .map((entry) => ({
      params: { file: entry.name },
      props: {
        body: fs.readFileSync(path.join(DATA_DIR, entry.name), "utf-8"),
      },
    }));

export const GET: APIRoute = ({ props }) =>
  new Response(props.body as string, {
    headers: {
      "Content-Type": "text/yaml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
