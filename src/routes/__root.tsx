import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import { LocalBusinessJsonLd } from "../components/LocalBusinessJsonLd";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { absoluteUrl, LOCAL_SEO } from "../lib/local-seo";
import { getRequestOrigin } from "../lib/origin.functions";
import {
  SITE_NAME,
  absoluteOgImage,
} from "../lib/site-meta";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin;
    const ogImage = absoluteOgImage(origin);
    const canonical = absoluteUrl(origin, "/");
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: LOCAL_SEO.title },
        { name: "description", content: LOCAL_SEO.description },
        { name: "keywords", content: LOCAL_SEO.keywords },
        { name: "geo.region", content: "GB-WAR" },
        { name: "geo.placename", content: `${LOCAL_SEO.primaryCity}, ${LOCAL_SEO.region}` },
        { name: "geo.position", content: `${LOCAL_SEO.geo.latitude};${LOCAL_SEO.geo.longitude}` },
        { name: "ICBM", content: `${LOCAL_SEO.geo.latitude}, ${LOCAL_SEO.geo.longitude}` },
        { name: "theme-color", content: "#8B4A52" },
        { property: "og:site_name", content: SITE_NAME },
        { property: "og:title", content: LOCAL_SEO.title },
        { property: "og:description", content: LOCAL_SEO.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: canonical },
        { property: "og:locale", content: "en_GB" },
        { property: "og:image", content: ogImage },
        { property: "og:image:alt", content: "Custom celebration cake from Ivory Rose Cake Company in Nuneaton" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: LOCAL_SEO.title },
        { name: "twitter:description", content: LOCAL_SEO.description },
        { name: "twitter:image", content: ogImage },
        { name: "twitter:image:alt", content: "Custom celebration cake from Ivory Rose Cake Company in Nuneaton" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "canonical", href: canonical },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
        { rel: "icon", href: "/apple-touch-icon.png", type: "image/png", sizes: "180x180" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { origin } = Route.useLoaderData();

  return (
    <QueryClientProvider client={queryClient}>
      <LocalBusinessJsonLd origin={origin} />
      <Outlet />
    </QueryClientProvider>
  );
}
