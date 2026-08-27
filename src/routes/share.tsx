import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type ComponentType, type FormEvent, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Cake,
  ChevronDown,
  Globe,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Star,
} from "lucide-react";
import { IvoryRoseLogo } from "@/components/IvoryRoseLogo";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { BUSINESS, SOCIAL } from "@/data/menu";
import {
  NETLIFY_FORM_ENDPOINT,
  NETLIFY_FORM_NAME,
  submitNetlifyForm,
} from "@/lib/netlify-form";
import { getRequestOrigin } from "@/lib/origin.functions";
import { absoluteOgImage } from "@/lib/site-meta";
import { SHARE_PAGE_META } from "@/lib/sharePageMeta";
import { cn } from "@/lib/utils";

const SHARE_TAB_CLASS =
  "group flex w-full min-h-[3.25rem] items-center rounded-2xl border border-border bg-milk px-5 py-3.5 text-sm font-medium text-foreground shadow-[0_2px_12px_rgba(0,0,0,0.06)] transition-all hover:border-sage/30 hover:shadow-[0_4px_18px_rgba(0,0,0,0.08)] active:scale-[0.99]";

const SHARE_FIELD_CLASS =
  "h-11 w-full rounded-xl border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-sage/40 focus:outline-none focus:ring-2 focus:ring-sage/15";

const morphTransition = { duration: 0.38, ease: [0.25, 0.1, 0.25, 1] as const };

const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(BUSINESS.address)}`;

function ShareTabAnimatedArrow() {
  const reduceMotion = useReducedMotion();
  if (reduceMotion) {
    return <ArrowRight className="h-4 w-4 shrink-0 text-sage-deep" strokeWidth={2.5} aria-hidden />;
  }
  return (
    <motion.span
      aria-hidden
      className="flex shrink-0 items-center"
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.15, repeat: Infinity, ease: "easeInOut" }}
    >
      <ArrowRight className="h-4 w-4 shrink-0 text-sage-deep" strokeWidth={2.5} />
    </motion.span>
  );
}

function ShareTabContent({
  label,
  icon: Icon,
  trailing,
}: {
  label: string;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
  trailing?: ReactNode;
}) {
  return (
    <div className="relative flex w-full items-center self-stretch">
      <span className="relative z-10 flex shrink-0 items-center text-sage-deep">
        {Icon ? <Icon className="h-4 w-4" strokeWidth={2.5} aria-hidden /> : null}
      </span>
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center px-10 text-center leading-snug">
        {label}
      </span>
      <span className="relative z-10 ml-auto flex shrink-0 items-center">
        {trailing ?? <span className="h-4 w-4 shrink-0" aria-hidden />}
      </span>
    </div>
  );
}

type ShareLink = {
  label: string;
  href: string;
  external?: boolean;
  animatedArrow?: boolean;
  icon?: ComponentType<{ className?: string; strokeWidth?: number }>;
};

function ShareLinkButton({ label, href, external, animatedArrow, icon: Icon }: ShareLink) {
  const content = (
    <ShareTabContent label={label} icon={Icon} trailing={animatedArrow ? <ShareTabAnimatedArrow /> : undefined} />
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={SHARE_TAB_CLASS}>
        {content}
      </a>
    );
  }

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={SHARE_TAB_CLASS}>
        {content}
      </Link>
    );
  }

  return (
    <a href={href} className={SHARE_TAB_CLASS}>
      {content}
    </a>
  );
}

function ShareContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const isNetlify = typeof window !== "undefined" && /netlify/i.test(window.location.host);

    if (!isNetlify) {
      form.reset();
      setStatus("sent");
      return;
    }

    setStatus("sending");
    try {
      await submitNetlifyForm(form);
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="border-t border-border px-5 py-4 text-center" role="status" aria-live="polite">
        <p className="text-sm font-medium text-sage-deep">Thank you — we&apos;ll be in touch within 48 hours.</p>
      </div>
    );
  }

  return (
    <form
      name={NETLIFY_FORM_NAME}
      action={NETLIFY_FORM_ENDPOINT}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      className="space-y-2.5 border-t border-border px-4 pb-4 pt-3"
    >
      <input type="hidden" name="form-name" value={NETLIFY_FORM_NAME} />
      <input type="hidden" name="subject" value="Share page enquiry" />
      <p className="hidden" aria-hidden>
        <label>
          Leave this empty: <input name="bot-field" />
        </label>
      </p>
      <input name="name" type="text" autoComplete="name" placeholder="Your name" className={SHARE_FIELD_CLASS} />
      <input
        name="email"
        type="email"
        autoComplete="email"
        placeholder="you@example.com"
        required
        className={SHARE_FIELD_CLASS}
      />
      <textarea
        name="message"
        rows={3}
        placeholder="Custom order or question…"
        required
        className={cn(SHARE_FIELD_CLASS, "h-auto min-h-[5.5rem] resize-none py-3")}
      />
      {status === "error" && (
        <p className="text-sm text-destructive">Something went wrong — please message us on Instagram.</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          SHARE_TAB_CLASS,
          "min-h-[2.75rem] w-full justify-center gap-2 bg-primary text-primary-foreground hover:text-primary-foreground",
        )}
      >
        <span>{status === "sending" ? "Sending…" : "Send message"}</span>
        <Send className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
      </button>
    </form>
  );
}

const SOCIAL_LINKS = [
  { label: "Facebook", href: SOCIAL.facebook, Icon: FacebookIcon },
  { label: "Instagram", href: SOCIAL.instagram, Icon: InstagramIcon },
] as const;

export const Route = createFileRoute("/share")({
  loader: async () => ({ origin: await getRequestOrigin() }),
  head: ({ loaderData }) => {
    const origin = loaderData?.origin ?? "";
    const ogImage = absoluteOgImage(origin);
    const shareUrl = `${origin}${SHARE_PAGE_META.ogUrl}`;
    return {
      meta: [
        { title: SHARE_PAGE_META.title },
        { name: "description", content: SHARE_PAGE_META.description },
        { property: "og:site_name", content: "Ivory Rose Cake Company" },
        { property: "og:title", content: SHARE_PAGE_META.ogTitle },
        { property: "og:description", content: SHARE_PAGE_META.description },
        { property: "og:type", content: "website" },
        { property: "og:url", content: shareUrl },
        { property: "og:image", content: ogImage },
        { property: "og:image:alt", content: "Custom celebration cake from Ivory Rose Cake Company" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: SHARE_PAGE_META.ogTitle },
        { name: "twitter:description", content: SHARE_PAGE_META.description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: shareUrl }],
    };
  },
  component: SharePage,
});

function SharePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="grain mesh-bg relative min-h-[100dvh] overflow-x-hidden font-sans antialiased">
      <main className="relative z-10 mx-auto flex min-h-[100dvh] w-full max-w-md flex-col px-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] pt-[max(1.5rem,env(safe-area-inset-top))] sm:px-6 md:py-8">
        <div className="flex flex-1 flex-col overflow-hidden rounded-[2rem] border border-border bg-milk/95 p-6 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.12)] backdrop-blur-sm sm:p-8">
          <header className="text-center">
            <IvoryRoseLogo className="mx-auto items-center justify-center" />
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {BUSINESS.tagline} — bespoke celebration cakes, wedding tiers and cupcakes from Nuneaton.
            </p>
            <nav className="mt-5 flex items-center justify-center gap-1" aria-label="Social links">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-sage-light hover:text-sage-deep"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </nav>
          </header>

          <nav className="mt-8 flex flex-1 flex-col gap-2.5" aria-label="Quick links">
            <ShareLinkButton label="Visit our website" href="/" icon={Globe} animatedArrow />
            <ShareLinkButton label="View our services" href="/#menu" icon={Cake} />
            <ShareLinkButton label="See our gallery" href="/#gallery" icon={Star} />
            <ShareLinkButton label="Get directions" href={directionsUrl} external icon={MapPin} />
            <ShareLinkButton label="Call us" href={BUSINESS.phoneHref} external icon={Phone} />
            <ShareLinkButton label="How to order" href="/#order" icon={Mail} />
            <ShareLinkButton label="Allergen info" href="/#allergens" icon={ShieldCheck} />
            <ShareLinkButton
              label={`Google reviews · ${BUSINESS.rating}`}
              href={SOCIAL.googleReview}
              external
              icon={Star}
            />

            <div className="overflow-hidden rounded-2xl border border-border bg-milk shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
              <button
                type="button"
                aria-expanded={contactOpen}
                onClick={() => setContactOpen((open) => !open)}
                className={cn(SHARE_TAB_CLASS, "rounded-none border-0 shadow-none")}
              >
                <ShareTabContent
                  label="Send a message"
                  icon={Mail}
                  trailing={
                    <ChevronDown
                      className={cn("h-4 w-4 text-sage-deep transition-transform", contactOpen && "rotate-180")}
                      strokeWidth={2.5}
                      aria-hidden
                    />
                  }
                />
              </button>
              <AnimatePresence initial={false}>
                {contactOpen ? (
                  <motion.div
                    key="contact"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={morphTransition}
                    className="overflow-hidden"
                  >
                    <ShareContactForm />
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </main>
    </div>
  );
}
