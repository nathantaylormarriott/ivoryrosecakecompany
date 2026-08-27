import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IvoryRoseLogo } from "@/components/IvoryRoseLogo";
import { FacebookIcon, InstagramIcon } from "@/components/SocialIcons";
import { SmoothScroll, scrollToSection } from "@/components/SmoothScroll";
import { LOCAL_SEO } from "@/lib/local-seo";
import {
  MENU,
  REVIEWS,
  BUSINESS,
  SOCIAL,
  ORDER_INFO,
  ALLERGEN_INFO,
} from "@/data/menu";
import heroCake from "@/assets/hero-celebration-cake.jpg";
import celebrationBurgundy from "@/assets/celebration-burgundy.jpg";
import cupcakesSage from "@/assets/cupcakes-sage.jpg";
import weddingCake from "@/assets/wedding-cake.jpg";
import cupcakesPink from "@/assets/cupcakes-pink.jpg";
import celebrationBig50 from "@/assets/celebration-big-50.jpg";
import childrensCarsCake from "@/assets/childrens-cars-cake.jpg";
import celebrationHeartBaby from "@/assets/celebration-heart-baby.jpg";
import celebrationWhite60 from "@/assets/celebration-white-60.jpg";
import giftBoxCupcakes from "@/assets/gift-box-cupcakes.jpg";
import childrensSchoolCake from "@/assets/childrens-school-cake.jpg";
import childrensKpopCake from "@/assets/childrens-kpop-cake.jpg";
import childrensPeppaCake from "@/assets/childrens-peppa-cake.jpg";
import celebrationBlue80 from "@/assets/celebration-blue-80.jpg";
import gamingBirthdayCake from "@/assets/gaming-birthday-cake.jpg";

/** Gallery-only images — not used in hero, story, menu, order or allergen sections */
const GALLERY = [
  { src: cupcakesPink, alt: "Luxury pink and gold birthday cupcakes from a Nuneaton cake maker" },
  { src: celebrationWhite60, alt: "White fondant 60th birthday cake with sugar flowers" },
  { src: giftBoxCupcakes, alt: "Gift box of decorated cupcakes" },
  { src: childrensSchoolCake, alt: "Pink first birthday school-themed children's cake" },
  { src: childrensKpopCake, alt: "KPOP themed children's birthday cake" },
  { src: childrensPeppaCake, alt: "Peppa Pig themed children's birthday cake" },
  { src: celebrationBlue80, alt: "Blue ombre 80th birthday celebration cake" },
  { src: gamingBirthdayCake, alt: "Custom gaming themed 18th birthday cake" },
];

const MENU_IMAGES = [celebrationBurgundy, weddingCake, cupcakesSage, childrensCarsCake];

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <div className="grain mesh-bg relative">
        <SmoothScroll />
        <Nav />
        <Hero />
        <StorySection />
        <GallerySection />
        <MenuSection />
        <OrderSection />
        <AllergenSection />
        <ReviewsCarousel />
        <LocalAreaSection />
        <VisitSection />
        <ContactSection />
      </div>
      <StickyRevealFooter />
    </>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md bg-cream/70 border-b border-border" : ""
      }`}
    >
      <div className="container-tight flex items-center justify-between py-4">
        <a href="#top" className="inline-flex shrink-0">
          <IvoryRoseLogo />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#gallery" className="hover:text-sage-deep transition">Gallery</a>
          <a href="#menu" className="hover:text-sage-deep transition">Services</a>
          <a href="#visit" className="hover:text-sage-deep transition">Visit</a>
          <a href="#contact" className="hover:text-sage-deep transition">Contact</a>
        </nav>
        <a
          href={SOCIAL.facebook}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition"
        >
          Follow us →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] overflow-x-clip flex flex-col pt-20 md:pt-24">
      <div className="relative flex min-h-0 flex-1 items-center px-[30px] pb-10 md:px-0 md:pb-0">
        <div className="flex w-full flex-col items-center gap-8 md:flex-row md:items-center md:justify-evenly md:gap-0 md:-translate-y-12">
          <div className="order-2 relative z-10 w-full min-w-0 max-w-lg md:order-1 md:w-auto md:max-w-xl md:shrink-0">
            <h1 className="font-display text-[9vw] leading-[0.92] tracking-[-0.01em] md:text-[5.5vw]">
              <span className="italic text-sage-deep">Bespoke cakes</span> in Nuneaton
            </h1>

            <div className="mt-5 hidden md:block">
              <p className="text-sm text-muted-foreground md:text-base">
                Wedding cakes, birthday cakes and cupcakes from a local cake maker in Nuneaton,
                Warwickshire. Tell us your vision and we&apos;ll bring it to life.
              </p>
            </div>

            <div className="mt-6 flex max-w-md gap-2.5">
              <div className="group flex min-h-[5.25rem] flex-1 flex-col justify-between rounded-2xl border border-mauve/25 bg-mauve-light px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-mauve/40 hover:shadow-md md:px-4 md:py-4">
                <span className="text-lg font-semibold leading-none text-foreground">Custom</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Made to order</span>
              </div>

              <div className="group flex min-h-[5.25rem] flex-1 flex-col justify-between rounded-2xl border border-mauve/25 bg-mauve-light px-4 py-3.5 shadow-sm transition-all duration-300 hover:border-mauve/40 hover:shadow-md md:px-4 md:py-4">
                <span className="text-lg font-semibold leading-none">
                  <span className="font-nums text-sage-deep">5</span>
                  <span className="text-sage-deep">★</span>
                </span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Hygiene rated</span>
              </div>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact", true);
                }}
                className="group flex min-h-[5.25rem] flex-1 flex-col justify-between rounded-2xl bg-sage-deep px-4 py-3.5 text-primary-foreground shadow-sm transition-all duration-300 hover:bg-sage-deep/90 hover:shadow-md md:px-4 md:py-4"
              >
                <span className="text-lg font-semibold leading-none">Enquire</span>
                <span className="text-[10px] uppercase tracking-[0.14em] text-primary-foreground/75 transition-colors group-hover:text-primary-foreground">
                  Get a quote →
                </span>
              </a>
            </div>
          </div>

          <div className="order-1 pointer-events-none relative z-0 mx-auto mt-2 aspect-[3/4] w-[62vw] max-w-[300px] shrink-0 overflow-visible md:order-2 md:mx-0 md:mt-0 md:w-[40vw] md:max-w-[420px]">
            <div
              className="absolute top-[10%] z-0 aspect-[3/4] w-[54%] -left-[10%] md:w-[64%] md:-left-[32%]"
              aria-hidden
            >
              <div className="float-bob-reverse h-full w-full [animation-delay:-2.5s]">
                <img
                  src={cupcakesSage}
                  alt=""
                  className="photo-frame h-full w-full rounded-[1.25rem] shadow-lg"
                />
              </div>
            </div>

            <div className="relative z-10 ml-auto h-full w-[72%] md:w-[78%]">
              <div className="float-bob h-full w-full">
                <img
                  src={heroCake}
                  alt="Elegant yellow celebration cake with macarons and gold topper"
                  className="photo-frame h-full w-full rounded-[1.5rem] shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <HeroMarquee className="mt-8 shrink-0 md:mt-auto" />
    </section>
  );
}

function HeroMarquee({ className = "" }: { className?: string }) {
  const words = [
    "Celebration Cakes",
    "Wedding Cakes",
    "Cupcakes",
    "Children's Cakes",
    "Buttercream",
    "Fondant",
    "Sugar Flowers",
    "Personalised",
    "Handcrafted",
    "Made to Order",
  ];
  const line = [...words, ...words];
  return (
    <div aria-hidden className={`w-full shrink-0 overflow-hidden border-t border-border bg-sage/30 py-3 ${className}`}>
      <div className="marquee-track gap-6 whitespace-nowrap font-display text-lg md:text-xl italic">
        {line.map((w, i) => (
          <span key={i} className="flex items-center gap-6">
            {w}
            <span className="text-sage-deep text-sm">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function StorySection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section ref={ref} className="py-24 md:py-40">
      <div className="container-tight grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <span className="pill mb-6">Our story</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            More than a<br />
            <span className="italic text-sage-deep">cake</span> — a memory.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            Ivory Rose Cake Company is a Nuneaton cake baker specialising in custom celebration cakes,
            wedding cakes and cupcakes across Warwickshire. From milestone birthdays to elegant wedding
            tiers and playful children&apos;s designs, every cake is handcrafted with artistry and care.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Handcrafted", "Fully custom", "Wedding cakes", "Cupcake boxes"].map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
        </div>
        <div className="relative aspect-square">
          <motion.img
            style={{ y: y1 }}
            src={celebrationBurgundy}
            alt="Burgundy floral two-tier celebration cake"
            className="photo-frame absolute top-0 left-0 w-2/3 rounded-[2rem] shadow-xl"
          />
          <motion.img
            style={{ y: y2 }}
            src={weddingCake}
            alt="Wedding cake with purple sugar rose cascade"
            className="photo-frame absolute bottom-0 right-0 w-2/3 rounded-[2rem] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-milk">
      <div className="container-tight">
        <div className="mb-12 max-w-2xl">
          <span className="pill mb-4">Our work</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            A taste of what we <span className="italic text-sage-deep">create</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every cake is unique — here are just a few of our recent creations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {GALLERY.map((img) => (
            <div key={img.alt} className="overflow-hidden rounded-[1.25rem]">
              <img src={img.src} alt={img.alt} className="photo-frame aspect-[4/5] w-full rounded-[1.25rem]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MenuSection() {
  const [active, setActive] = useState(0);
  const cat = MENU[active];

  return (
    <section id="menu" className="py-24 md:py-32">
      <div className="container-tight">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <span className="pill mb-4">What we make</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Cakes for every <span className="italic text-sage-deep">occasion</span> in Nuneaton
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Request a quote →
          </a>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 sticky top-16 z-30 py-3 bg-cream/80 backdrop-blur -mx-[30px] px-[30px] border-b border-border">
          {MENU.map((c, i) => (
            <button
              key={c.title}
              onClick={() => setActive(i)}
              className={`rounded-full px-4 py-2 text-sm font-medium border transition ${
                active === i
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border hover:bg-secondary"
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start">
          <div className="md:sticky md:top-40">
            <img
              src={MENU_IMAGES[active]}
              alt={cat.title}
              className="photo-frame rounded-[2rem] aspect-[4/5] w-full shadow-xl"
            />
            <p className="mt-4 text-muted-foreground italic">{cat.tagline}</p>
          </div>
          <motion.ul
            key={cat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="divide-y divide-border border-y border-border"
          >
            {cat.items.map((it) => (
              <li key={it.name} className="grid grid-cols-[1fr_auto] gap-6 py-5 group">
                <div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight group-hover:text-sage-deep transition">
                    {it.name}
                  </h3>
                  {it.desc && <p className="text-sm text-muted-foreground mt-1 max-w-lg">{it.desc}</p>}
                </div>
                <div className="font-nums text-xl md:text-2xl whitespace-nowrap">{it.price}</div>
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}

function OrderSection() {
  return (
    <section id="order" className="py-24 md:py-32 bg-milk">
      <div className="container-tight grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <span className="pill mb-6">How to order</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Simple, <span className="italic text-sage-deep">personal</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{ORDER_INFO.intro}</p>

          <ol className="mt-8 space-y-4">
            {ORDER_INFO.steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-sage/40 text-sage-deep flex items-center justify-center font-nums text-lg">
                  {i + 1}
                </span>
                <span className="text-lg pt-0.5">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h3 className="font-display text-xl text-sage-deep mb-2">Planning ahead</h3>
            <p className="text-muted-foreground">{ORDER_INFO.note}</p>
          </div>

          <p className="mt-8 font-display italic text-2xl text-sage-deep">{ORDER_INFO.closing} ♥</p>
        </div>
        <div className="relative">
          <img
            src={celebrationBig50}
            alt="Ivory and pink 50th birthday celebration cake"
            className="photo-frame rounded-[2rem] w-full aspect-[4/5] shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

function AllergenSection() {
  return (
    <section id="allergens" className="py-24 md:py-32 bg-sage/20">
      <div className="container-tight grid md:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="order-2 md:order-1">
          <img
            src={celebrationHeartBaby}
            alt="Heart-shaped baby shower cake with baby's breath flowers"
            className="photo-frame rounded-[2rem] w-full aspect-[4/5] shadow-xl"
          />
        </div>
        <div className="order-1 md:order-2">
          <span className="pill mb-6">Allergen information</span>
          <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
            Baked with <span className="italic text-sage-deep">care</span>.
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">{ALLERGEN_INFO.intro}</p>
          <p className="mt-6 text-muted-foreground">{ALLERGEN_INFO.allergens}</p>
          <p className="mt-6 font-medium italic">{ALLERGEN_INFO.disclaimer}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {[
              { key: "hygiene", label: <>★ <span className="font-nums">5</span> Hygiene rated</> },
              { key: "level", label: <>Level <span className="font-nums">2</span> certified</> },
              { key: "allergy", label: "Allergy trained" },
            ].map((t) => (
              <span key={t.key} className="pill">{t.label}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 4200);
    return () => clearInterval(t);
  }, []);
  return (
    <section id="reviews" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container-tight">
        <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
          <span className="pill">What our customers say</span>
          <a
            href={SOCIAL.googleReview}
            target="_blank"
            rel="noreferrer"
            className="text-sm underline underline-offset-4 hover:text-sage-deep"
          >
            Leave us a review →
          </a>
        </div>

        <div className="relative min-h-[280px] md:min-h-[220px]">
          {REVIEWS.map((r, idx) => (
            <motion.blockquote
              key={idx}
              initial={false}
              animate={{
                opacity: idx === i ? 1 : 0,
                y: idx === i ? 0 : 30,
                pointerEvents: idx === i ? "auto" : "none",
              }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <div className="text-yellow-500 mb-4 text-lg">{"★".repeat(r.rating)}</div>
              <p className="font-display text-3xl md:text-6xl leading-[1.05] tracking-tight">
                &ldquo;{r.quote}&rdquo;
              </p>
              <footer className="mt-6 text-sm text-muted-foreground uppercase tracking-widest">
                — {r.author}
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-10 flex gap-2">
          {REVIEWS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Show review ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-primary" : "w-4 bg-border"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalAreaSection() {
  return (
    <section id="local" className="py-24 md:py-32 bg-milk">
      <div className="container-tight max-w-3xl">
        <span className="pill mb-6">Local cake maker</span>
        <h2 className="font-display text-4xl md:text-6xl leading-[0.95]">
          Custom cakes in <span className="italic text-sage-deep">Nuneaton</span>
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          Looking for a cake maker in Nuneaton? Ivory Rose Cake Company creates bespoke birthday cakes,
          wedding cakes, cupcakes and celebration cakes for customers across {LOCAL_SEO.region} and
          nearby towns. Whether you need a show-stopping wedding cake, a themed children&apos;s birthday
          cake or a luxury cupcake box, we bake every order fresh to your brief.
        </p>
        <p className="mt-4 text-muted-foreground">
          Based at {BUSINESS.address}, we welcome collection and can arrange local delivery across
          Nuneaton and surrounding areas by appointment.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {LOCAL_SEO.serviceAreas.map((area) => (
            <span key={area} className="pill">{area}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function VisitSection() {
  return (
    <section id="visit" className="py-24 md:py-32 bg-sage/30">
      <div className="container-tight grid md:grid-cols-2 gap-10 items-stretch">
        <div className="flex flex-col justify-between">
          <div>
            <span className="pill mb-6">Find us</span>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.95]">
              Your Nuneaton <span className="italic text-sage-deep">cake baker</span>.
            </h2>
            <dl className="mt-10 space-y-6 text-lg" itemScope itemType="https://schema.org/Bakery">
              <meta itemProp="name" content={BUSINESS.fullName} />
              <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Address</dt>
                <dd className="mt-1">
                  <span itemProp="streetAddress">2 West View</span>,{" "}
                  <span itemProp="addressLocality">Nuneaton</span>{" "}
                  <span itemProp="postalCode">CV10 0PZ</span>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Phone</dt>
                <dd className="mt-1">
                  <a href={BUSINESS.phoneHref} className="hover:text-sage-deep transition" itemProp="telephone">
                    {BUSINESS.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-widest text-muted-foreground">Collection</dt>
                <dd className="mt-1">Cakes are made to order — collection and local delivery by arrangement.</dd>
              </div>
            </dl>
          </div>
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex w-fit items-center gap-3 rounded-full bg-primary text-primary-foreground px-6 py-4 font-medium hover:opacity-90"
          >
            Get directions →
          </a>
        </div>
        <div className="photo-frame rounded-[2rem] overflow-hidden min-h-[380px]">
          <iframe
            title="Ivory Rose Cake Company location"
            src="https://www.google.com/maps?q=2+West+View+Nuneaton+CV10+0PZ&output=embed"
            className="h-full min-h-[380px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-tight grid md:grid-cols-[1fr_1.2fr] gap-12">
        <div>
          <span className="pill mb-6">Get in touch</span>
          <h2 className="font-display text-5xl md:text-6xl leading-[0.95]">
            Let&apos;s create something <span className="italic text-sage-deep">beautiful</span>.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            Planning a wedding, birthday or special event? Send us your ideas — we reply within 48 hours.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="pill"
            >
              <FacebookIcon className="h-3.5 w-3.5 text-sage-deep/80" />
              Facebook
            </a>
            <a
              href={SOCIAL.instagram}
              target="_blank"
              rel="noreferrer"
              className="pill"
            >
              <InstagramIcon className="h-3.5 w-3.5 text-sage-deep/80" />
              Instagram
            </a>
            <a href={BUSINESS.phoneHref} className="pill">
              {BUSINESS.phone}
            </a>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={(e) => {
            const isNetlify = typeof window !== "undefined" && /netlify/i.test(window.location.host);
            if (!isNetlify) {
              e.preventDefault();
              setSent(true);
            }
          }}
          className="rounded-[2rem] border border-border bg-card p-6 md:p-8 space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don&apos;t fill this out: <input name="bot-field" /></label>
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Field label="Name" name="name" required />
            <Field label="Email" name="email" type="email" required />
          </div>
          <Field label="Event date" name="event-date" />
          <Field label="Cake type" name="subject" />
          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us your ideas</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Servings, theme, colours, inspiration…"
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:opacity-90"
          >
            {sent ? "Message sent ✓" : "Send enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
  );
}

function StickyRevealFooter() {
  const panelRef = useRef<HTMLDivElement>(null);
  const [spacerHeight, setSpacerHeight] = useState(0);

  useLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const measure = () => {
      const panelHeight = panel.offsetHeight;
      setSpacerHeight(Math.max(panelHeight, window.innerHeight));
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(panel);
    window.addEventListener("resize", measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <div
      className="relative isolate"
      style={{
        height: spacerHeight || "100vh",
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      }}
    >
      <div
        ref={panelRef}
        className="fixed inset-x-0 bottom-0 z-20 bg-charcoal text-milk pb-[env(safe-area-inset-bottom,0px)]"
      >
        <div className="container-tight flex flex-col gap-8 py-8 md:gap-10 md:py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <IvoryRoseLogo variant="onDark" />
            <a
              href={SOCIAL.facebook}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-milk px-4 py-2.5 text-sm font-medium text-charcoal hover:opacity-90"
            >
              Follow us →
            </a>
          </div>

          <div className="grid gap-6 border-t border-milk/15 pt-6 text-sm sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:pt-8">
            <div>
              <div className="mb-2 text-xs uppercase tracking-widest text-milk/60">Visit</div>
              <p>{BUSINESS.address}</p>
              <p className="mt-2">
                <a href={BUSINESS.phoneHref} className="hover:underline">{BUSINESS.phone}</a>
              </p>
            </div>
            <div>
              <div className="mb-2 text-xs uppercase tracking-widest text-milk/60">Services</div>
              <ul className="space-y-1">
                {MENU.map((m) => (
                  <li key={m.title}><a href="#menu" className="hover:underline">{m.title}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs uppercase tracking-widest text-milk/60">Info</div>
              <ul className="space-y-1">
                <li><a href="#order" className="hover:underline">How to Order</a></li>
                <li><a href="#allergens" className="hover:underline">Allergen Info</a></li>
                <li><a href="#contact" className="hover:underline">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="mb-2 text-xs uppercase tracking-widest text-milk/60">Follow</div>
              <ul className="space-y-1">
                <li><a href={SOCIAL.facebook} target="_blank" rel="noreferrer" className="hover:underline">Facebook</a></li>
                <li><a href={SOCIAL.instagram} target="_blank" rel="noreferrer" className="hover:underline">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-milk/15 pt-6 md:pt-8 pb-8 md:pb-10">
          <h2 className="footer-tagline px-[30px]">Baked with love.</h2>
          <div className="flex flex-wrap justify-between gap-2 px-[30px] pt-4 text-xs text-milk/60 md:pt-5">
            <span>© <span className="font-nums">{new Date().getFullYear()}</span> Ivory Rose Cake Company</span>
            <span>Handcrafted in Nuneaton</span>
          </div>
        </div>
      </div>
    </div>
  );
}
