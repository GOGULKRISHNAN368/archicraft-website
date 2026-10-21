export type Project = {
  slug: string;
  name: string;
  location: string;
  briefLabel?: string;
  seoTitle: string;
  metaDescription: string;
  clientRequirement: string;
  designChallenge: string;
  solution: string;
  materialsUsed: string;
  image: string;
};

export const projects: Project[] = [
  {
    slug: "the-allure",
    name: "The Allure",
    location: "Kalapatti, Coimbatore",
    seoTitle: "The Allure | Residential Interior Project, Kalapatti, Coimbatore",
    metaDescription:
      "See how Archicraft Interiors designed The Allure, a bold white, black, and gold residential interior in Kalapatti, Coimbatore — kitchen, bedroom, and study.",
    clientRequirement:
      "A full-home interior that could carry a bold, modern identity — white gloss cabinetry with black-and-gold detailing — through the kitchen, bedroom, study, and living zones without feeling disjointed room to room.",
    designChallenge:
      "Keeping a striking colour and material language (crisp white, deep black accents, brass detailing) consistent and elegant across very different room functions, from a working kitchen to a personal study nook.",
    solution:
      "A unified white-and-black material palette anchored by brushed gold hardware and lighting, carried from the kitchen's glossy cabinetry through to a striped feature wall in the bedroom and a considered built-in study unit.",
    materialsUsed: "High-gloss lamination, black-and-gold hardware, wood flooring in the study zone, layered ceiling lighting throughout.",
    image: "/images/portfolio/the-allure.jpg",
  },
  {
    slug: "souvenir",
    name: "Souvenir",
    location: "Coimbatore",
    seoTitle: "Souvenir | Residential Interior Project, Coimbatore",
    metaDescription:
      "Souvenir is a Coimbatore home interior by Archicraft Interiors built around premium wardrobe and kitchen storage, mirrored panelling, and warm task lighting.",
    clientRequirement: "Wardrobe and kitchen storage that felt premium and durable, in a home where daily functionality mattered as much as finish quality.",
    designChallenge: "Balancing a rich, dark wood-tone material palette with enough reflected light and mirror detailing that bedrooms and kitchen still felt bright and open.",
    solution: "Deep wood-finish wardrobes and cabinetry paired with mirrored panel detailing and warm task lighting, plus a navy-and-white modular kitchen.",
    materialsUsed: "Wood-finish lamination, mirror panelling, navy and white cabinetry finishes, integrated task lighting.",
    image: "/images/portfolio/souvenir.jpg",
  },
  {
    slug: "asush",
    name: "Asush",
    location: "Coimbatore",
    seoTitle: "Asush | Residential Interior Project, Coimbatore",
    metaDescription:
      "Asush is a contemporary Coimbatore residential interior by Archicraft Interiors, pairing a white-and-teal-900 modular kitchen with matching wardrobe units.",
    clientRequirement: "A clean, contemporary kitchen and wardrobe package that felt fresh and easy to maintain for daily family use.",
    designChallenge: "Delivering a crisp, bright material palette (white and teal-900 grey) that still reads as premium rather than purely utilitarian.",
    solution: "A white-and-dark-grey modular kitchen with sleek handleless detailing, paired with matching wardrobe units.",
    materialsUsed: "Matte and gloss lamination, dark-grey countertop finishes, glass-panel wardrobe detailing.",
    image: "/images/portfolio/asush.jpg",
  },
  {
    slug: "shivaji-villas",
    name: "Shivaji Villas",
    location: "Erode",
    seoTitle: "Shivaji Villas | Villa Interior Project, Erode",
    metaDescription:
      "Shivaji Villas showcases Archicraft Interiors' villa interior design in Erode — a warm wood-and-white palette carried through bedroom, wardrobes, and storage.",
    clientRequirement: "A villa-scale interior where bedroom, wardrobe, and storage design needed to feel cohesive across a larger footprint, without losing warmth.",
    designChallenge: "Coordinating multiple rooms and storage zones across a bigger property while keeping one consistent design language throughout.",
    solution:
      "A warm wood-and-white palette carried through the bedroom's tufted headboard and mirrored dresser, into rich wood-finish wardrobes and display shelving elsewhere in the home.",
    materialsUsed: "Wood-finish lamination, tufted upholstery detailing, mirror-panel dressers, glass-front display cabinetry.",
    image: "/images/portfolio/shivaji-villas.jpg",
  },
  {
    slug: "the-legacy",
    name: "The Legacy",
    location: "Erode",
    seoTitle: "The Legacy | Residential Interior Project, Erode",
    metaDescription:
      "The Legacy is an Erode home interior by Archicraft Interiors that uses deep-blue accents, warm wood tones, and geometric panelling with a calm, livable feel.",
    clientRequirement: "A home that could carry bold colour and texture — deep blues, warm wood tones, geometric detailing — while still feeling calm and livable day to day.",
    designChallenge: "Using strong colour and pattern choices without the home feeling busy or overdesigned.",
    solution:
      "Confident colour used deliberately — a single deep-blue accent wall in the bedroom, balanced by warm wood tones in the kitchen and geometric-patterned panelling used sparingly as a feature.",
    materialsUsed: "Wood-grain lamination, geometric-pattern panelling, blue accent-wall finishes, warm-tone kitchen cabinetry.",
    image: "/images/portfolio/the-legacy.jpg",
  },
  {
    slug: "the-envelope",
    name: "The Envelope",
    location: "Salem",
    seoTitle: "The Envelope | Residential Interior Project, Salem",
    metaDescription:
      "The Envelope is a wood-forward Salem home interior by Archicraft Interiors, with layered lighting built into ceiling detailing and open shelving.",
    clientRequirement: "A wood-forward interior with strong architectural detailing in the ceiling and storage zones, giving the home real visual depth.",
    designChallenge: "Making rich, dark wood tones feel warm and inviting rather than heavy, especially in ceiling and shelving details.",
    solution:
      "Layered lighting integrated directly into wood-panelled ceiling details and open shelving, so the depth of the wood tone is lifted by light rather than left to feel dense.",
    materialsUsed: "Dark wood-finish panelling, integrated LED ceiling detailing, open shelving units, glass-front cabinetry.",
    image: "/images/portfolio/the-envelope.jpg",
  },
  {
    slug: "anugraha-adobe",
    name: "Anugraha Adobe",
    location: "KR Puram, Bengaluru",
    seoTitle: "Anugraha Adobe | Residential Interior Project, KR Puram, Bengaluru",
    metaDescription:
      "Anugraha Adobe is a Bengaluru residential interior by Archicraft Interiors, pairing a textured bedroom feature wall with calm, functional kitchen storage.",
    clientRequirement: "A home that could carry a distinctive decorative wall treatment in the bedroom alongside clean, practical wardrobe and kitchen storage elsewhere.",
    designChallenge: "Pairing an expressive, patterned bedroom feature wall with the rest of the home's more understated, functional spaces.",
    solution:
      "A statement textured feature wall anchors the bedroom as the home's design centrepiece, while wardrobe and kitchen zones elsewhere use a calmer, functional material palette.",
    materialsUsed: "Textured wall panelling, wood-finish wardrobes, practical laminate kitchen cabinetry.",
    image: "/images/portfolio/anugraha-adobe.jpg",
  },
  {
    slug: "light-filled-residence",
    name: "Light-Filled Residence",
    location: "Concept study",
    briefLabel: "Design Intent",
    seoTitle: "Light-Filled Residence | Archicraft Interiors",
    metaDescription: "A residential design concept with warm finishes and thoughtfully composed living spaces.",
    clientRequirement: "Explore a welcoming home with bright, comfortable spaces and practical details for everyday living.",
    designChallenge: "Balance natural light, warm finishes, and useful storage while keeping the rooms visually calm.",
    solution: "A light palette and considered furniture and finish choices give the home an open, comfortable character.",
    materialsUsed: "Warm wood finishes, light-toned surfaces, and layered interior details.",
    image: "/images/portfolio/light-filled-residence.jpg",
  },
  {
    slug: "warm-wood-kitchen",
    name: "Warm Wood Kitchen",
    location: "Concept study",
    briefLabel: "Design Intent",
    seoTitle: "Warm Wood Kitchen | Archicraft Interiors",
    metaDescription: "A contemporary kitchen design concept featuring warm wood tones and carefully planned cabinetry.",
    clientRequirement: "A functional kitchen with generous storage and a warm, contemporary finish.",
    designChallenge: "Bring together practical work surfaces, organized storage, and a cohesive wood-forward look.",
    solution: "Warm cabinetry and clean-lined work areas create a kitchen that feels both inviting and easy to use.",
    materialsUsed: "Wood-finish cabinetry, durable countertop surfaces, and integrated kitchen storage.",
    image: "/images/portfolio/warm-wood-kitchen.jpg",
  },
  {
    slug: "contemporary-living",
    name: "Contemporary Living",
    location: "Concept study",
    briefLabel: "Design Intent",
    seoTitle: "Contemporary Living | Archicraft Interiors",
    metaDescription: "A contemporary living room design concept with a considered feature wall, practical storage, and warm finishes.",
    clientRequirement: "Make the living area comfortable and welcoming, with a clear focal point and useful storage.",
    designChallenge: "Give the room character while keeping the layout open and suitable for daily use.",
    solution: "A composed feature wall and coordinated finishes bring definition to the living area without crowding it.",
    materialsUsed: "Wood-tone finishes, built-in storage, and coordinated wall treatments.",
    image: "/images/portfolio/contemporary-living.jpg",
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
