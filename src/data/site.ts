// Central site config. When Sanity CMS is wired up (Phase 6 note in docs),
// this file's shape should map 1:1 to a "siteSettings" singleton document.

export const site = {
  name: "Archicraft Interiors",
  tagline: "Thoughtfully designed spaces for modern living.",
  phone: "8870706181",
  phoneHref: "tel:+918870706181",
  whatsappHref: "https://wa.me/918870706181",
  email: "archicraft.crm@gmail.com",
  city: "Coimbatore",
  domain: "archicraftinteriors.com",
  social: {
    facebook: "https://www.facebook.com/archicraftinteriors",
    instagram: "https://www.instagram.com/archicraftinteriors/",
  },
};

export const primaryNav = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Residential Interior", href: "/services/residential-interior" },
      { label: "Commercial Interior", href: "/services/commercial-interior" },
      { label: "Corporate / Office", href: "/services/corporate-office-interior" },
      { label: "Industrial Interior", href: "/services/industrial-interior" },
      { label: "False Ceiling", href: "/services/false-ceiling" },
      { label: "Aluminium & Glass", href: "/services/aluminium-glass-works" },
    ],
  },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Materials", href: "/materials" },
  { label: "Design Process", href: "/design-process" },
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/blog" },
];

export const footerServiceLinks = [
  { label: "Residential Interior", href: "/services/residential-interior" },
  { label: "Commercial Interior", href: "/services/commercial-interior" },
  { label: "Corporate / Office", href: "/services/corporate-office-interior" },
  { label: "Industrial Interior", href: "/services/industrial-interior" },
  { label: "False Ceiling", href: "/services/false-ceiling" },
  { label: "Aluminium & Glass", href: "/services/aluminium-glass-works" },
];

export const footerCompanyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Design Process", href: "/design-process" },
  { label: "Why Choose Us", href: "/why-choose-us" },
  { label: "Blog & Ideas", href: "/blog" },
  { label: "FAQs", href: "/faq" },
];
