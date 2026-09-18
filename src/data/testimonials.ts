// PLACEHOLDER DATA — replace with real client testimonials and Google review
// figures as soon as they're available (see Phase 5 content docs for the
// intake template). Nothing here ships to production as real client speech.

export type Testimonial = {
  name: string;
  project?: string;
  quote: string;
  isPlaceholder: true;
};

export const testimonials: Testimonial[] = [
  {
    name: "Client name pending",
    project: "The Allure",
    quote: "Placeholder — real testimonial to be added once shared by Archicraft Interiors.",
    isPlaceholder: true,
  },
  {
    name: "Client name pending",
    project: "Shivaji Villas",
    quote: "Placeholder — real testimonial to be added once shared by Archicraft Interiors.",
    isPlaceholder: true,
  },
];

export const stats = {
  yearsInBusiness: "10+",
  projectsCompleted: "200+",
  citiesServed: "4",
  googleRating: "4.2 ★",
};
