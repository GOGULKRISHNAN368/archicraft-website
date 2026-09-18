export type BlogPost = {
  slug: string;
  title: string;
  seoTitle: string;
  category: string;
  metaDescription: string;
  excerpt: string;
  body: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "pu-finish-vs-laminate-modular-kitchen",
    title: "PU Finish vs Laminate: Which Modular Kitchen Finish Is Right for You?",
    seoTitle: "PU Finish vs Laminate for Modular Kitchens | Archicraft Interiors",
    category: "Materials Guide",
    metaDescription: "Comparing PU finish and laminate for your modular kitchen — appearance, durability, maintenance, and cost, explained simply.",
    excerpt: "One of the first real decisions in a modular kitchen isn't colour or layout — it's finish. Here's how PU and laminate actually compare.",
    body: [
      "If you're planning a modular kitchen, one of the first real decisions you'll make isn't about colour or layout — it's about finish. PU finish and laminate are two of the most commonly recommended options, and while both can look stunning in the right kitchen, they behave very differently over time.",
      "Appearance: PU (polyurethane) finish gives a smooth, rich, almost lacquered look — it reads as more premium and is available in both matte and gloss. Laminate offers a wider range of textures and patterns, including wood-grain finishes that are hard to distinguish from real wood at a glance.",
      "Durability: PU finish is sprayed and cured, giving a seamless surface with fewer visible joints — but it can be more susceptible to scratches over years of heavy use. Laminate is bonded under high pressure and tends to resist scratches and daily wear slightly better.",
      "Maintenance: Both are easy to wipe clean, but PU finish shows fingerprints more readily in high-gloss variants, while laminate is more forgiving day to day.",
      "Our recommendation: if you want an ultra-smooth, high-end look and are comfortable with slightly more careful daily use, PU finish is worth the investment. If you want a wide range of textures with slightly easier upkeep, laminate is the more practical everyday choice. We talk through both options with physical samples during the material selection stage of every kitchen project.",
    ],
  },
  {
    slug: "kids-bedroom-design-that-grows-with-them",
    title: "Designing a Kids' Bedroom That Grows With Them",
    seoTitle: "Kids' Bedroom Design Ideas, Coimbatore | Archicraft Interiors",
    category: "Design Tips",
    metaDescription: "Practical design ideas for a kids' bedroom that adapts as your child grows — storage, study zones, and flexible themes.",
    excerpt: "A better approach to kids' bedroom design: build the bones to last, and let the 'theme' live in the parts that are easy to change later.",
    body: [
      "The trouble with most kids' bedroom designs is that they're built around a five-year-old's taste and stop working the moment that child turns ten. A better approach is designing the bones of the room to last, and letting the theme live in the parts that are easy to change later.",
      "Start with storage that scales: modular shelving and wardrobe systems that can be reconfigured are worth the slightly higher upfront cost.",
      "Separate the theme from the structure: bold, playful colour is best kept to soft furnishings, wall art, and accent panels rather than built-in cabinetry.",
      "Plan the study zone early, even for younger kids: a well-lit desk nook means you're not retrofitting a study space later.",
      "Get the lighting layered, not single-source: ambient, task, and soft night lighting supports both the toddler years and the homework years.",
    ],
  },
  {
    slug: "what-happens-in-the-discover-phase",
    title: 'What Actually Happens During the "Discover" Phase of an Interior Project?',
    seoTitle: "The Discover Phase of Interior Design | Archicraft Interiors",
    category: "Process & Planning",
    metaDescription: "A look inside the Discover phase — the first step of the Archicraft Interiors design process, and why it matters more than most homeowners expect.",
    excerpt: "Most homeowners assume design starts with sketches. The most important work actually happens before that — during Discover.",
    body: [
      "Most homeowners assume an interior design project starts with sketches. In practice, the most important work happens before a single layout is drawn — during what we call the Discover phase.",
      "It starts with listening, not proposing: our first conversation is about how you actually use your home — who cooks, who works from home, how often guests stay over.",
      "Site measurement happens early, not as an afterthought: accurate measurements at this stage prevent the two most common causes of project delays later.",
      "Lifestyle and vision get documented, not just discussed: we capture specifics so the Design phase that follows is built on your actual priorities.",
      "Why it matters: every stage after Discover is only as good as the understanding built in this first step.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
