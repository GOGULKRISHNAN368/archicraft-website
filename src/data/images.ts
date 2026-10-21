// Keep image paths local where project and service photography is available.
// Unsplash URLs are temporary fallbacks for categories without a local image.

export const serviceImages: Record<string, string> = {
  "residential-interior": "/images/services/residential.jpg",
  "commercial-interior": "/images/services/commercial.jpg",
  "corporate-office-interior": "/images/services/corporate.jpg",
  "industrial-interior": "/images/services/industrial.jpg",
  "false-ceiling": "/images/services/ceiling.jpg",
  "aluminium-glass-works": "/images/services/glass.jpg",
  "residential-interiors": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?fm=jpg&q=75&w=1200&auto=format&fit=crop",
  "villa-interiors": "https://images.unsplash.com/photo-1638885930125-85350348d266?fm=jpg&q=75&w=1200&auto=format&fit=crop",
  "apartment-interiors": "https://images.unsplash.com/photo-1699239116624-85268dce7377?fm=jpg&q=75&w=1200&auto=format&fit=crop",
  "modular-kitchens": "/images/brochure/modular-kitchens-hero.jpg",
  wardrobes: "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?fm=jpg&q=80&w=1600&auto=format&fit=crop",
  "bedroom-design": "/images/brochure/bedroom-design-hero.jpg",
  "living-room-design": "/images/brochure/living-room-design-hero.jpg",
  "dining-area-design": "https://images.unsplash.com/photo-1635321350281-e2a91ecffd00?fm=jpg&q=75&w=1200&auto=format&fit=crop",
  "tv-units-feature-walls": "/images/brochure/tv-units-feature-walls-hero.jpg",
  "false-ceiling-lighting": "/images/brochure/false-ceiling-lighting-hero.jpg",
  "pooja-units": "/images/brochure/pooja-units-hero.jpg",
  "office-interiors": "/images/brochure/office-interiors-hero.jpg",
  "windows-doors": "/images/brochure/windows-doors-hero.jpg",
  "turnkey-solutions": "https://images.unsplash.com/photo-1671197244266-73129c97c096?fm=jpg&q=75&w=1200&auto=format&fit=crop",
};

const albumPhoto = (filename: string) => `/images/Archicraft-photos/${filename}`;

export const portfolioImages: Record<string, string> = {
  "the-allure": albumPhoto("IMG-20240902-WA0019.jpg"),
  souvenir: albumPhoto("IMG20231202172449.jpg"),
  asush: albumPhoto("IMG20220422172552.jpg"),
  "shivaji-villas": albumPhoto("IMG20240625184815.jpg"),
  "the-legacy": albumPhoto("FB_IMG_1658939791503.jpg"),
  "the-envelope": albumPhoto("FB_IMG_1708399371240.jpg"),
  "anugraha-adobe": albumPhoto("IMG20231002123102.jpg"),
  "light-filled-residence": albumPhoto("IMG-20240902-WA0009.jpg"),
  "warm-wood-kitchen": albumPhoto("FB_IMG_1708399358898.jpg"),
  "contemporary-living": albumPhoto("IMG20221126182422.jpg"),
};

export const portfolioGallery: Record<string, string[]> = {
  "the-allure": ["IMG-20240902-WA0017.jpg", "IMG-20240902-WA0018.jpg", "IMG-20240902-WA0019.jpg", "IMG-20240902-WA0021.jpg"].map(albumPhoto),
  souvenir: ["IMG20231202172449.jpg", "IMG20231202172514.jpg", "IMG20231202172552.jpg", "IMG-20240227-WA0008.jpg"].map(albumPhoto),
  asush: ["IMG20220422172216.jpg", "IMG20220422172253.jpg", "IMG20220422172552.jpg", "IMG20220422172703.jpg"].map(albumPhoto),
  "shivaji-villas": ["IMG20240625184631.jpg", "IMG20240625184704.jpg", "IMG20240625184737.jpg", "IMG20240625184815.jpg"].map(albumPhoto),
  "the-legacy": ["FB_IMG_1658939791503.jpg", "FB_IMG_1658939794201.jpg", "IMG20221022173052.jpg", "IMG20221022173101.jpg"].map(albumPhoto),
  "the-envelope": ["FB_IMG_1708399371240.jpg", "FB_IMG_1708399379248.jpg", "FB_IMG_1708399381769.jpg", "FB_IMG_1708399384476.jpg"].map(albumPhoto),
  "anugraha-adobe": ["IMG20231002122805.jpg", "IMG20231002123000.jpg", "IMG20231002123102.jpg", "IMG20231002124424.jpg"].map(albumPhoto),
  "light-filled-residence": ["IMG-20240902-WA0009.jpg", "IMG-20240902-WA0012.jpg", "IMG-20240902-WA0013.jpg", "IMG-20240902-WA0016.jpg"].map(albumPhoto),
  "warm-wood-kitchen": ["FB_IMG_1708399358898.jpg", "FB_IMG_1708399361536.jpg", "FB_IMG_1708399363709.jpg", "FB_IMG_1708399368949.jpg"].map(albumPhoto),
  "contemporary-living": ["IMG20221126182422.jpg", "IMG20221126182433.jpg", "IMG20221126183145.jpg", "IMG20221126183708.jpg"].map(albumPhoto),
};

export const materialImages: Record<string, string> = {
  "pu-finish": "/images/brochure/pu-finish-swatch.jpg",
  laminate: "/images/brochure/laminate-swatch.jpg",
  membrane: "/images/brochure/membrane-swatch.jpg",
  acrylic: "/images/brochure/acrylic-swatch.jpg",
  "lacquer-finish": "/images/brochure/lacquer-finish-swatch.jpg",
  "premium-surfaces": "https://images.unsplash.com/photo-1625434998283-460380a78288?fm=jpg&q=75&w=800&auto=format&fit=crop",
};

export const blogImages: Record<string, string> = {
  "pu-finish-vs-laminate-modular-kitchen": "/images/brochure/pu-finish-swatch.jpg",
  "kids-bedroom-design-that-grows-with-them": "/images/brochure/bedroom-design-hero.jpg",
  "what-happens-in-the-discover-phase": "/images/brochure/team-hero.jpg",
};

export const aboutImage = "/images/brochure/about-hero.jpg";
export const heroFallbackImage = "/images/brochure/home-hero-fallback.jpg";
