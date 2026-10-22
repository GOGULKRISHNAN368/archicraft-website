export type Material = {
  slug: string;
  name: string;
  seoTitle: string;
  description: string;
  metaDescription: string;
  advantages: string;
  maintenance: string;
  applications: string;
};

export const homeMaterials: Material[] = [
  {
    slug: "pu-finish",
    name: "PU Finish",
    seoTitle: "PU Finish for Kitchens & Wardrobes in Coimbatore | Archicraft Interiors",
    description: "Smooth, rich, and sophisticated in appearance with a premium feel.",
    metaDescription:
      "PU finish for modular kitchens and wardrobes in Coimbatore — a smooth, seamless matte or gloss interior design finish with excellent colour depth, by Archicraft Interiors.",
    advantages: "Seamless, high-end look in matte or gloss; excellent colour depth.",
    maintenance: "Wipe clean; gloss variants show fingerprints more readily.",
    applications: "Modular kitchens, wardrobes, feature cabinetry.",
  },
  {
    slug: "laminate",
    name: "Laminate",
    seoTitle: "Laminate Finishes for Interiors in Coimbatore | Archicraft Interiors",
    description: "Elegant textures with practical durability for daily living.",
    metaDescription:
      "Laminate finishes for kitchens, wardrobes, and office interiors in Coimbatore — durable, wood-grain and textured options used by Archicraft Interiors on every project.",
    advantages: "Wide range of finishes including realistic wood-grain; strong resistance to daily wear.",
    maintenance: "Easy wipe-clean, forgiving of daily use.",
    applications: "Kitchens, wardrobes, TV units, office furniture.",
  },
  {
    slug: "membrane",
    name: "Membrane",
    seoTitle: "Membrane Finish for Kitchens & Wardrobes, Coimbatore | Archicraft Interiors",
    description: "A stylish finish with seamless detailing for a refined look.",
    metaDescription:
      "Membrane finish for kitchen shutters and wardrobe interiors in Coimbatore — a seamless, moisture-resistant surface specified by Archicraft Interiors' design team.",
    advantages: "Consistent, uniform surface with good moisture resistance.",
    maintenance: "Low maintenance, resistant to minor impacts.",
    applications: "Kitchen shutters, wardrobe interiors.",
  },
  {
    slug: "acrylic",
    name: "Acrylic",
    seoTitle: "Acrylic High-Gloss Finish, Coimbatore | Archicraft Interiors",
    description: "Premium high-gloss surfaces with a modern finish.",
    metaDescription:
      "Acrylic high-gloss finish for modular kitchens and wardrobe shutters in Coimbatore — vivid colour and a mirror-like surface, specified by Archicraft Interiors.",
    advantages: "Vivid colour, mirror-like reflective surface, strong visual impact.",
    maintenance: "Requires careful cleaning to avoid visible marks on gloss surfaces.",
    applications: "Modular kitchens, feature wardrobe shutters.",
  },
  {
    slug: "lacquer-finish",
    name: "Lacquer Finish",
    seoTitle: "Lacquer Finish for Feature Walls, Coimbatore | Archicraft Interiors",
    description: "A refined, premium painted finish delivering timeless elegance.",
    metaDescription:
      "Lacquer finish for feature walls and statement cabinetry in Coimbatore interiors — a refined, high-gloss painted finish used by Archicraft Interiors for premium projects.",
    advantages: "Deep, rich colour saturation; premium tactile finish.",
    maintenance: "Gentle cleaning recommended to preserve sheen.",
    applications: "Feature walls, premium cabinetry, statement furniture pieces.",
  },
  {
    slug: "premium-surfaces",
    name: "Premium Surfaces & Hardware",
    seoTitle: "Premium Surfaces & Hardware Brands, Coimbatore | Archicraft Interiors",
    description: "Named brand plywood, laminates, hardware, and more for complete solutions.",
    metaDescription:
      "Archicraft Interiors specifies trusted brands — CenturyPly, Greenply, Hafele, Hettich, Ebco, Faber, KAFF — for every interior design project in Coimbatore.",
    advantages: "Trusted brand performance and warranty support across every category.",
    maintenance: "Varies by product; guidance provided per brand at material selection.",
    applications: "Used across all services as the supporting hardware and surface layer.",
  },
];

export const materials: Material[] = [
  ...homeMaterials,
  {
    slug: "wood-veneer",
    name: "Wood Veneer",
    seoTitle: "Natural Wood Veneer Finishes for Interiors | Archicraft Interiors",
    description: "A natural timber surface with distinctive grain and warmth.",
    metaDescription: "Explore natural wood veneer for cabinetry, wall panels, and furniture with Archicraft Interiors.",
    advantages: "Natural grain variation brings depth and warmth to cabinetry and wall details.",
    maintenance: "Dust regularly and clean with a soft, lightly damp cloth; avoid prolonged moisture.",
    applications: "Wardrobes, feature panels, cabinetry, and custom furniture.",
  },
  {
    slug: "quartz-surfaces",
    name: "Quartz Surfaces",
    seoTitle: "Quartz Surfaces for Kitchens & Interiors | Archicraft Interiors",
    description: "A refined engineered surface for hardworking counters and vanities.",
    metaDescription: "Discover quartz surfaces for kitchen counters and bathroom vanities with Archicraft Interiors.",
    advantages: "Consistent patterns and a durable surface make quartz a practical choice for counters.",
    maintenance: "Wipe with a soft cloth and mild cleaner; use trivets and follow the supplier's care guidance.",
    applications: "Kitchen counters, islands, utility areas, and bathroom vanities.",
  },
  {
    slug: "glass-and-mirrors",
    name: "Glass & Mirrors",
    seoTitle: "Glass & Mirror Interior Finishes | Archicraft Interiors",
    description: "Light-reflecting details that add openness and a clean, modern finish.",
    metaDescription: "Explore glass and mirror applications for partitions, display units, and interior details.",
    advantages: "Glass and mirrors can brighten a room and add visual openness when placed thoughtfully.",
    maintenance: "Clean with a non-abrasive glass cleaner and a lint-free cloth.",
    applications: "Partitions, wardrobe shutters, display cabinets, and backsplashes.",
  },
  {
    slug: "solid-surface",
    name: "Solid Surface",
    seoTitle: "Solid Surface Countertops & Interiors | Archicraft Interiors",
    description: "A smooth, seamless-looking surface for contemporary counters and vanities.",
    metaDescription: "Consider solid surface materials for counters, vanities, and integrated interior details.",
    advantages: "Can be shaped for integrated details and visually continuous joins, depending on the product.",
    maintenance: "Clean with mild soap and water; follow the manufacturer's care and repair instructions.",
    applications: "Kitchen counters, reception desks, bathroom vanities, and integrated wash areas.",
  },
];

export function getMaterialBySlug(slug: string) {
  return materials.find((m) => m.slug === slug);
}
