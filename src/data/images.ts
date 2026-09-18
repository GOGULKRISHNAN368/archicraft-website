// Real Archicraft project photography, extracted and cropped from the
// client-supplied brochure PDF, is used wherever a matching page exists
// (/public/images/brochure/). Categories with no brochure equivalent
// (residential/villa/apartment interiors, dining areas, turnkey solutions,
// premium surfaces) still use free, non-Unsplash+ stock photography via
// Unsplash's CDN as a placeholder — swap for real photography as it becomes
// available. next.config.mjs already allowlists images.unsplash.com.

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

export const portfolioImages: Record<string, string> = {
  "the-allure": "/images/brochure/the-allure-1.jpg",
  souvenir: "/images/brochure/souvenir-2.jpg",
  asush: "/images/brochure/asush-1.jpg",
  "shivaji-villas": "/images/brochure/shivaji-villas-2.jpg",
  "the-legacy": "/images/brochure/the-legacy-1.jpg",
  "the-envelope": "/images/brochure/the-envelope-1.jpg",
  "anugraha-adobe": "/images/brochure/anugraha-adobe-1.jpg",
};

export const portfolioGallery: Record<string, string[]> = {
  "the-allure": ["/images/brochure/the-allure-1.jpg", "/images/brochure/the-allure-2.jpg", "/images/brochure/the-allure-3.jpg", "/images/brochure/the-allure-4.jpg"],
  souvenir: ["/images/brochure/souvenir-1.jpg", "/images/brochure/souvenir-2.jpg", "/images/brochure/souvenir-3.jpg", "/images/brochure/souvenir-4.jpg"],
  asush: ["/images/brochure/asush-1.jpg", "/images/brochure/asush-2.jpg", "/images/brochure/asush-3.jpg", "/images/brochure/asush-4.jpg"],
  "shivaji-villas": ["/images/brochure/shivaji-villas-1.jpg", "/images/brochure/shivaji-villas-2.jpg", "/images/brochure/shivaji-villas-3.jpg", "/images/brochure/shivaji-villas-4.jpg"],
  "the-legacy": ["/images/brochure/the-legacy-1.jpg", "/images/brochure/the-legacy-2.jpg", "/images/brochure/the-legacy-3.jpg", "/images/brochure/the-legacy-4.jpg"],
  "the-envelope": ["/images/brochure/the-envelope-1.jpg", "/images/brochure/the-envelope-2.jpg", "/images/brochure/the-envelope-3.jpg", "/images/brochure/the-envelope-4.jpg"],
  "anugraha-adobe": ["/images/brochure/anugraha-adobe-1.jpg", "/images/brochure/anugraha-adobe-2.jpg", "/images/brochure/anugraha-adobe-3.jpg", "/images/brochure/anugraha-adobe-4.jpg"],
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
