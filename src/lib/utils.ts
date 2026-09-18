import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const designProcess = [
  { step: "01", title: "Discover", body: "We listen, and understand your needs, lifestyle, and vision." },
  { step: "02", title: "Design", body: "Thoughtful concepts, layouts, and mood boards, tailored to you." },
  { step: "03", title: "Plan", body: "Every detail refined; the best materials selected with precision." },
  { step: "04", title: "Create", body: "Our skilled craftsmen bring the design to life with care and quality." },
  { step: "05", title: "Deliver", body: "Every element perfected, and a space you'll love handed over." },
];

export const whyChooseUs = [
  { title: "Customized Designs", body: "Every layout is tailored to your lifestyle, not pulled from a template." },
  { title: "Premium Materials", body: "Sourced from trusted names like CenturyPly, Greenlam, Hafele, and Hettich." },
  { title: "Expert Craftsmanship", body: "Skilled hands and a precise eye, on every single detail." },
  { title: "Smart Space Planning", body: "Layouts that make a room feel larger than it is." },
  { title: "Timely Delivery", body: "Clear timelines, kept — without cutting corners to meet them." },
  { title: "End-to-End Solutions", body: "From the first sketch to the final handover, one team, one accountability." },
];

export const brandPartners = [
  "CenturyPly", "Greenply", "Greenlam", "Advance Laminates", "Hafele", "Hettich", "Ebco", "Faber", "KAFF", "Greenlam MiCasa",
];
