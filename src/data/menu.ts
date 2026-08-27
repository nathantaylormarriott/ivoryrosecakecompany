export type MenuItem = { name: string; price: string; desc?: string };
export type MenuCategory = { title: string; tagline: string; items: MenuItem[] };

export const LINKTREE_URL = "https://linktr.ee/bakemcompany";

export const SOCIAL = {
  instagram: "https://www.instagram.com/bakemcompany",
  tiktok: "https://www.tiktok.com/@bakemcompany",
  facebook: "https://www.facebook.com/profile.php?id=61577519316186",
  linktree: LINKTREE_URL,
  googleReview: "https://share.google/NXbe0aGJGdrUZ2wVf",
};

export const MENU: MenuCategory[] = [
  {
    title: "Cookies",
    tagline: "Thick, chunky, and baked fresh",
    items: [
      { name: "Kinder Cookie Dipping Set", price: "£4", desc: "Thick cookie with Kinder bar and dipping sauce." },
      { name: "Classic Chocolate Chip", price: "£3.50", desc: "Loaded with milk and white chocolate chunks." },
      { name: "Biscoff Cookie", price: "£3.50", desc: "Biscoff spread swirled through a soft-baked cookie." },
      { name: "Kinder Bueno Cookie", price: "£3.50", desc: "Hazelnut cream and chocolate chunks." },
      { name: "Double Chocolate", price: "£3.50", desc: "Rich cocoa cookie with dark chocolate chunks." },
      { name: "White Chocolate & Raspberry", price: "£3.50", desc: "Sweet white chocolate with tart raspberry." },
    ],
  },
  {
    title: "Cookie Pies",
    tagline: "Individual treats, big on flavour",
    items: [
      { name: "Kinder Bueno Cookie Pie", price: "£4", desc: "Iced cookie pie topped with a Kinder Bueno bar." },
      { name: "Biscoff Cookie Pie", price: "£4", desc: "Biscoff icing drizzled over a golden cookie pie." },
      { name: "Chocolate Cookie Pie", price: "£3.50", desc: "Classic chocolate chip in a pleated paper cup." },
      { name: "White Chocolate Cookie Pie", price: "£3.50", desc: "White chocolate chunks in a soft-baked pie." },
    ],
  },
  {
    title: "Brownies & Traybakes",
    tagline: "Fudgy, gooey, and irresistible",
    items: [
      { name: "Classic Brownie Bite", price: "£2", desc: "Rich, fudgy dark chocolate brownie square." },
      { name: "Brownie Bite Box (12)", price: "£20", desc: "A dozen bite-sized brownies in a bakery box." },
      { name: "Biscoff Blondie", price: "£3", desc: "Blondie swirled with Biscoff spread." },
      { name: "Kinder Blondie", price: "£3", desc: "White chocolate blondie with Kinder pieces." },
      { name: "Rocky Road Slice", price: "£3", desc: "Marshmallow, biscuit and chocolate chunk traybake." },
    ],
  },
  {
    title: "Custom Orders",
    tagline: "Made for your special occasion",
    items: [
      { name: "Personalised Cookie Cake", price: "From £25", desc: "Large rectangular cookie cake with custom icing message." },
      { name: "Cookie Cake (Small)", price: "From £15", desc: "Perfect for small celebrations and gatherings." },
      { name: "Brownie Platter", price: "From £20", desc: "Assorted brownie bites for events and parties." },
      { name: "Custom Cookie Box", price: "From £18", desc: "Selection of cookies tailored to your preferences." },
    ],
  },
];

export const REVIEWS = [
  { author: "Google reviewer", quote: "The cookies are absolutely incredible — thick, soft and packed with chocolate.", rating: 5 },
  { author: "Google reviewer", quote: "Such a lovely little bake shed. The Kinder cookie dipping set is a must-try!", rating: 5 },
  { author: "Google reviewer", quote: "Best brownies I've ever had. You can tell everything is made with love.", rating: 5 },
  { author: "Google reviewer", quote: "Ordered a personalised cookie cake for a birthday — it was perfect and tasted amazing.", rating: 5 },
  { author: "Google reviewer", quote: "Hidden gem! Fresh bakes every day and the self-serve shed is so convenient.", rating: 5 },
];

export const BUSINESS = {
  name: "BakEM",
  fullName: "BakEM Bakery",
  tagline: "Handmade bakes for every occasion",
  location: "Hayloft Way, CV11 7AQ",
  address: "The BakEM Bake Shed, Hayloft Way, CV11 7AQ",
  mapsUrl: "https://www.google.com/maps/search/BakEM+Bake+Shed+Hayloft+Way+CV11+7AQ",
  rating: "5.0",
  reviewCount: 0,
  hygieneRating: 5,
};

export const PAYMENT_INFO = {
  intro: "This is a self-serve bake shed — simply choose your treats and pay below.",
  steps: [
    "Choose your bakes",
    "Add up your total (a calculator is provided if needed)",
  ],
  card: "Scan the QR code on the shelf and follow the steps on your phone.",
  cash: "Please put the correct amount into the cash deposit box. Change cannot be given.",
  closing: "Thank you for your support",
};

export const ALLERGEN_INFO = {
  intro:
    "BakEM is a registered food business with the local council. We hold a 5★ food hygiene rating, a Level 2 food hygiene certification, and are trained in food allergy and intolerance awareness.",
  allergens:
    "We handle all 14 allergens in our home kitchen: cereals containing gluten, crustaceans, eggs, fish, peanuts, soya, milk, nuts, sesame, celery, mustard, sulphur dioxide (sulphites), lupin and molluscs.",
  disclaimer: "Please consume products at your own discretion.",
};
