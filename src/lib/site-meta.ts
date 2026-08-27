export const SITE_NAME = "Ivory Rose Cake Company";
export const SITE_TAGLINE = "Bespoke cakes for every celebration";
export const SITE_DESCRIPTION =
  "Custom celebration cakes, wedding cakes, cupcakes and children's cakes handcrafted in Nuneaton, Warwickshire.";

export const OG_IMAGE_PATH = "/og-image.jpg";

export function absoluteOgImage(origin?: string) {
  return `${origin ?? ""}${OG_IMAGE_PATH}`;
}
