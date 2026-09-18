import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/portfolio";



export default function PortfolioPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Showcasing spaces that reflect our commitment to design excellence"
        align="left"
      />
      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {projects.map((p) => (
          <PortfolioCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
