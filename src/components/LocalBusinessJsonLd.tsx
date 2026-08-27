import { buildLocalBusinessJsonLd } from "@/lib/local-seo";

export function LocalBusinessJsonLd({ origin }: { origin?: string }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: buildLocalBusinessJsonLd(origin) }}
    />
  );
}
