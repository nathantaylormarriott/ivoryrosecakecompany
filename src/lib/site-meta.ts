export const SITE_NAME = "Ivory Rose Cake Company";
export const SITE_TAGLINE = "Bespoke cakes for every celebration";
export const SITE_DESCRIPTION =
  "Custom celebration cakes, wedding cakes, cupcakes and children's cakes from a cake maker in Nuneaton, Warwickshire. 5★ rated — enquire for birthdays, weddings and events.";

export const OG_IMAGE_PATH = "/og-image.jpg";

export function absoluteOgImage(origin?: string) {
  const base = (origin ?? "").replace(/\/$/, "");
  return `${base}${OG_IMAGE_PATH}`;
}
