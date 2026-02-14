import type { IconifyJSON } from "@iconify/types";
import { getIconData, iconToHTML, iconToSVG, replaceIDs } from "@iconify/utils";

interface IconOptions {
  size?: number | string;
  width?: number | string;
  height?: number | string;
}

/**
 *
 * @param name Icon name in "setName:IconName" format.
 * @param options Provide size, width, and height attributes to svg.
 * @returns <svg> tag as string.
 */
export default async function getIconSVGString(
  name: string,
  options: IconOptions = {}
): Promise<string> {
  const [setName, iconName] = name.split(":");

  if (!(setName && iconName)) {
    throw new Error(`Invalid icon name: "${name}"`);
  }

  let iconSet: IconifyJSON;
  try {
    iconSet = await import(
      `../../node_modules/@iconify-json/${setName}/icons.json`
    );
  } catch {
    throw new Error(`Icon set "${setName}" not found.`);
  }

  const iconData = getIconData(iconSet, iconName);
  if (!iconData) {
    throw new Error(`Icon "${iconName}" not found in "${setName}"`);
  }

  const renderData = iconToSVG(iconData, {
    width: options.size ?? options.width ?? "1em",
    height: options.size ?? options.height ?? "1em",
  });

  return iconToHTML(replaceIDs(renderData.body), renderData.attributes);
}
