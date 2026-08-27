export const SITE_NAME = "BakEM Bakery";
export const SITE_TAGLINE = "Handmade bakes for every occasion";
export const SITE_DESCRIPTION =
  "Custom cookies, cookie cakes, brownie bites and sweet treats from the BakEM Bake Shed in Hayloft Way, CV11 7AQ.";

export const OG_IMAGE_PATH = "/og-image.jpg";

export function absoluteOgImage(origin?: string) {
  return `${origin ?? ""}${OG_IMAGE_PATH}`;
}
