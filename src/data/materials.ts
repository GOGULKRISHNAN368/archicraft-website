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

export const materials: Material[] = [
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

export function getMaterialBySlug(slug: string) {
  return materials.find((m) => m.slug === slug);
}
