export type MenuItem = { name: string; price: string; desc?: string };
export type MenuCategory = { title: string; tagline: string; items: MenuItem[] };

export const SOCIAL = {
  facebook: "https://www.facebook.com/IvoryRoseCakeCompany/",
  instagram: "https://www.instagram.com/ivoryrosecakecompany",
  googleReview: "https://www.google.com/maps/search/Ivory+Rose+Cake+Company+Nuneaton",
};

export const MENU: MenuCategory[] = [
  {
    title: "Celebration Cakes",
    tagline: "Elegant designs for birthdays, anniversaries and milestones",
    items: [
      { name: "Single-Tier Celebration Cake", price: "From £45", desc: "Buttercream or fondant finish with your choice of colours and message." },
      { name: "Two-Tier Celebration Cake", price: "From £85", desc: "Statement centrepiece with florals, drip, or hand-piped details." },
      { name: "Number Topper Cake", price: "From £55", desc: "Personalised age topper with bespoke colour palette and finish." },
      { name: "Milestone Cake", price: "Enquire", desc: "40th, 50th, 60th and beyond — tailored to your celebration." },
    ],
  },
  {
    title: "Wedding Cakes",
    tagline: "Beautiful tiers for your special day",
    items: [
      { name: "Classic Wedding Cake", price: "From £120", desc: "Elegant fondant or buttercream tiers with sugar flowers." },
      { name: "Floral Cascade", price: "From £150", desc: "Handcrafted sugar roses and botanicals flowing down the tiers." },
      { name: "Hidden Detail Reveal", price: "Enquire", desc: "A surprise design inside — hobbies, teams, or personal touches." },
      { name: "Wedding Cupcake Tower", price: "From £90", desc: "Coordinated cupcakes displayed on a tiered stand." },
    ],
  },
  {
    title: "Cupcakes",
    tagline: "Individually decorated boxes for every occasion",
    items: [
      { name: "Box of 6 Cupcakes", price: "From £18", desc: "Floral buttercream, fondant toppers, or themed designs." },
      { name: "Box of 12 Cupcakes", price: "From £32", desc: "Perfect for parties, offices, and gifting." },
      { name: "Luxury Cupcake Box", price: "From £40", desc: "Gold accents, sugar flowers, and personalised fondant discs." },
      { name: "Gift Box with Extras", price: "Enquire", desc: "Cupcakes paired with treats for a bespoke gift set." },
    ],
  },
  {
    title: "Children's Cakes",
    tagline: "Fun, colourful designs they'll love",
    items: [
      { name: "Themed Character Cake", price: "From £50", desc: "Licensed favourites and cartoon themes with custom toppers." },
      { name: "First Birthday Cake", price: "From £55", desc: "Soft colours, smash-cake options, and personalised details." },
      { name: "Number & Name Cake", price: "From £48", desc: "Bold lettering with their name, age, and favourite colours." },
      { name: "Cupcake Party Box", price: "From £25", desc: "Themed cupcakes for school parties and family gatherings." },
    ],
  },
];

export const REVIEWS = [
  { author: "Facebook reviewer", quote: "Absolutely stunning cake — everyone at the party was asking who made it!", rating: 5 },
  { author: "Facebook reviewer", quote: "The attention to detail is incredible. Our wedding cake was beyond what we imagined.", rating: 5 },
  { author: "Facebook reviewer", quote: "Best cupcakes I've ever had, and the decoration was so beautiful.", rating: 5 },
  { author: "Facebook reviewer", quote: "Ordered a personalised birthday cake for my daughter — she was over the moon!", rating: 5 },
  { author: "Facebook reviewer", quote: "Professional, friendly, and the cake tasted as good as it looked. Highly recommend.", rating: 5 },
];

export const BUSINESS = {
  name: "Ivory Rose",
  fullName: "Ivory Rose Cake Company",
  tagline: "Bespoke cakes for every celebration in Nuneaton",
  location: "Nuneaton, Warwickshire",
  address: "2 West View, Nuneaton CV10 0PZ",
  phone: "07411 134766",
  phoneHref: "tel:+447411134766",
  mapsUrl: "https://www.google.com/maps/search/Ivory+Rose+Cake+Company+2+West+View+Nuneaton+CV10+0PZ",
  rating: "5.0",
  reviewCount: 13,
  hygieneRating: 5,
};

export const ORDER_INFO = {
  intro: "Every cake is made to order — tell us your date, servings, theme, and any inspiration photos.",
  steps: [
    "Send an enquiry with your event date and ideas",
    "We'll confirm design, flavours, and a quote",
    "Your cake is handcrafted fresh for collection or delivery",
  ],
  note: "We recommend enquiring at least two weeks ahead for celebration cakes, and six to eight weeks for wedding cakes.",
  closing: "We can't wait to bake something beautiful for you",
};

export const ALLERGEN_INFO = {
  intro:
    "Ivory Rose Cake Company is a registered food business. We hold a 5★ food hygiene rating and are trained in food allergy and intolerance awareness.",
  allergens:
    "We handle all 14 allergens in our kitchen: cereals containing gluten, crustaceans, eggs, fish, peanuts, soya, milk, nuts, sesame, celery, mustard, sulphur dioxide (sulphites), lupin and molluscs.",
  disclaimer: "Please let us know about any allergies when ordering. Consume products at your own discretion.",
};
