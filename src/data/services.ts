export type Service = {
  slug: string;
  name: string;
  seoTitle: string;
  metaDescription: string;
  hero: string;
  shortDescription: string;
  overview: string;
  benefits: string[];
  processNote: string;
  relatedMaterials: string[];
  faqs: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: "residential-interior",
    name: "Residential Interior",
    seoTitle: "Residential Interior Design | Archicraft Interiors",
    metaDescription: "Bespoke residential interior design including modular kitchens, wardrobes, pooja rooms, bedroom designs, and living room designs.",
    hero: "Homes designed around the way your family actually lives",
    shortDescription: "Warm, functional spaces designed around everyday living.",
    overview: "Every residential project starts with a conversation about how you use your home day to day. We shape a full-home interior that balances elegance, functionality, and timeless appeal.",
    benefits: [
      "Modular Kitchen - Smart, functional, and premium layouts",
      "Wardrobe - Customized storage solutions for every room",
      "Pooja Room - Traditional spaces designed with peace and elegance",
      "Bedroom Design - Personalised comfort and style",
      "Kids Bedroom Design - Creative and adaptable spaces",
      "Living Room Design - Elegant feature walls and TV units"
    ],
    processNote: "Our process ensures every room connects with a consistent design language.",
    relatedMaterials: ["pu-finish", "laminate", "premium-surface"],
    faqs: [
      { q: "Do you design the entire home or individual rooms?", a: "Both — many clients start with one room and expand." },
      { q: "Can you work with an existing structure?", a: "Yes, we regularly work within existing layouts." }
    ],
  },
  {
    slug: "commercial-interior",
    name: "Commercial Interior",
    seoTitle: "Commercial Interior Design | Archicraft Interiors",
    metaDescription: "Premium commercial interior design for jewellery showrooms, textile showrooms, salons, and cafés.",
    hero: "Spaces designed for business success",
    shortDescription: "Distinctive spaces designed for memorable customer experiences.",
    overview: "We design commercial spaces that not only look stunning but also improve customer experience and operational efficiency.",
    benefits: [
      "Jewellery Showroom - Elegant and secure displays",
      "Textile Showroom - Optimal layouts for high footfall and visual merchandising",
      "Salon - Relaxing and functional setups for beauty professionals",
      "Café Interior - Inviting and Instagram-worthy aesthetics"
    ],
    processNote: "Execution is planned to minimize disruption to your business.",
    relatedMaterials: ["lacquer-finish", "premium-surface"],
    faqs: [
      { q: "Do you handle complete retail fit-outs?", a: "Yes, we handle end-to-end design and execution for commercial spaces." }
    ],
  },
  {
    slug: "corporate-office-interior",
    name: "Corporate / Office Interior",
    seoTitle: "Corporate & Office Interior Design | Archicraft Interiors",
    metaDescription: "Office interior design including executive cabins, workstations, conference rooms, and smart storage.",
    hero: "Workspaces designed around productivity",
    shortDescription: "Modern workplaces shaped around people and productivity.",
    overview: "Workspaces that create efficiency while maintaining modern design aesthetics, tailored for your team's workflow.",
    benefits: [
      "Executive Cabin - Premium and private executive spaces",
      "Work Station - Ergonomic and efficient layouts",
      "Conference Room - Professional and tech-integrated meeting areas",
      "Storage Cabinets - Smart, space-saving storage solutions",
      "File Racks - Organized and accessible document management"
    ],
    processNote: "We focus on ergonomic planning and brand integration throughout the office.",
    relatedMaterials: ["laminate", "acrylic"],
    faqs: [
      { q: "Can office interiors be completed without disrupting ongoing work?", a: "We plan execution phasing specifically to minimise disruption." }
    ],
  },
  {
    slug: "industrial-interior",
    name: "Industrial Interior",
    seoTitle: "Industrial Interior Design | Archicraft Interiors",
    metaDescription: "Functional and robust industrial interior design solutions tailored for operational efficiency.",
    hero: "Robust and functional design for industries",
    shortDescription: "Durable, efficient spaces built for demanding environments.",
    overview: "Industrial spaces require a balance of durability, safety, and functional workflow. We design interiors that support heavy-duty operations while maintaining a professional aesthetic.",
    benefits: [
      "Optimized operational workflows",
      "Durable and low-maintenance material selection",
      "Safety-first spatial planning",
      "Professional aesthetic integration for administrative zones"
    ],
    processNote: "Industrial projects require careful coordination with structural and safety requirements.",
    relatedMaterials: ["membrane", "premium-surface"],
    faqs: [
      { q: "Do you design administrative areas within industrial facilities?", a: "Yes, we integrate both factory-floor requirements and modern office spaces." }
    ],
  },
  {
    slug: "false-ceiling",
    name: "False Ceiling",
    seoTitle: "False Ceiling Solutions | Archicraft Interiors",
    metaDescription: "Professional false ceiling installations including grid, gypsum, and custom lighting integration.",
    hero: "Enhancing spaces through design, from above",
    shortDescription: "Architectural ceilings that transform light, proportion, and mood.",
    overview: "Thoughtfully crafted ceiling and lighting solutions that add depth, improve aesthetics, and elevate the overall ambience.",
    benefits: [
      "Grid False Ceiling - Functional suspended ceilings ideal for commercial spaces",
      "Gypsum False Ceiling - Versatile systems offering clean lines and seamless finishes",
      "Integrated Lighting - Layered lighting designs built directly into the ceiling",
      "Custom Designs - Unique drops and patterns tailored to the room"
    ],
    processNote: "Ceiling drop heights are confirmed during site measurement to minimise height loss.",
    relatedMaterials: ["premium-surface"],
    faqs: [
      { q: "Does a false ceiling reduce room height noticeably?", a: "We plan ceiling drops carefully to minimise height loss." }
    ],
  },
  {
    slug: "aluminium-glass-works",
    name: "Aluminium & Glass Works",
    seoTitle: "Aluminium & Glass Partitions | Archicraft Interiors",
    metaDescription: "Premium aluminium partitions, glass partitions, shower cubicles, and toilet partitions.",
    hero: "Modern, transparent, and durable partitions",
    shortDescription: "Clean, precise partitions and architectural glass solutions.",
    overview: "High-quality aluminium and glass systems that divide spaces without compromising on light or openness.",
    benefits: [
      "Aluminium Partition - Sleek and durable spatial dividers",
      "Glass Partition - Frameless and framed options for modern offices",
      "Shower Cubicles - Elegant and water-tight bathroom enclosures",
      "Toilet Partition - Hygienic and robust commercial restroom solutions"
    ],
    processNote: "Measurements are taken with millimeter precision to ensure perfect glass fitting.",
    relatedMaterials: ["premium-surface"],
    faqs: [
      { q: "Are the glass partitions toughened?", a: "Yes, we exclusively use toughened safety glass for all partition and cubicle works." }
    ],
  }
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}
