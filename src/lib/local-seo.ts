import { BUSINESS, SOCIAL } from "@/data/menu";
import { OG_IMAGE_PATH, SITE_DESCRIPTION, SITE_NAME } from "@/lib/site-meta";

export const SITE_URL = "https://www.ivoryrosecakecompany.co.uk";

export const LOCAL_SEO = {
  primaryCity: "Nuneaton",
  region: "Warwickshire",
  country: "United Kingdom",
  title: `Cake Maker Nuneaton | ${SITE_NAME} | Wedding & Birthday Cakes`,
  description:
    "Custom cakes in Nuneaton — wedding cakes, birthday cakes and cupcakes from a 5★ rated cake baker. Serving Nuneaton, Warwickshire and surrounding areas.",
  keywords: [
    "cake maker nuneaton",
    "cakes nuneaton",
    "birthday cakes nuneaton",
    "wedding cakes nuneaton",
    "custom cakes nuneaton",
    "cupcakes nuneaton",
    "cake baker warwickshire",
    "celebration cakes nuneaton",
    "children's cakes nuneaton",
    "bespoke cakes nuneaton",
  ].join(", "),
  serviceAreas: [
    "Nuneaton",
    "Bedworth",
    "Hinckley",
    "Atherstone",
    "Rugby",
    "Coventry",
    "Warwickshire",
  ],
  geo: {
    latitude: 52.5235,
    longitude: -1.4679,
  },
} as const;

export function absoluteUrl(origin: string | undefined, path = "/") {
  const base = (origin || SITE_URL).replace(/\/$/, "");
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function buildLocalBusinessSchema(origin?: string) {
  const url = absoluteUrl(origin, "/");
  const image = absoluteUrl(origin, OG_IMAGE_PATH);

  return {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "@id": `${url}#bakery`,
    name: BUSINESS.fullName,
    description: SITE_DESCRIPTION,
    url,
    image,
    telephone: BUSINESS.phoneHref.replace("tel:", ""),
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2 West View",
      addressLocality: LOCAL_SEO.primaryCity,
      addressRegion: LOCAL_SEO.region,
      postalCode: "CV10 0PZ",
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: LOCAL_SEO.geo.latitude,
      longitude: LOCAL_SEO.geo.longitude,
    },
    areaServed: LOCAL_SEO.serviceAreas.map((area) => ({
      "@type": "City",
      name: area,
    })),
    sameAs: [SOCIAL.facebook, SOCIAL.instagram],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cake baking services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding cakes in Nuneaton" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Birthday cakes in Nuneaton" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom celebration cakes" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cupcakes and gift boxes" } },
      ],
    },
  };
}

export function buildWebSiteSchema(origin?: string) {
  const url = absoluteUrl(origin, "/");

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}#website`,
    url,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    publisher: {
      "@id": `${url}#bakery`,
    },
    inLanguage: "en-GB",
  };
}

export function buildLocalBusinessJsonLd(origin?: string) {
  return JSON.stringify([buildLocalBusinessSchema(origin), buildWebSiteSchema(origin)]);
}
