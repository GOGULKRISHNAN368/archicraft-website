import SectionHeading from "@/components/SectionHeading";
import PortfolioCard from "@/components/PortfolioCard";
import { projects } from "@/data/portfolio";



export default function PortfolioPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Projects"
        title="Projects shaped around the way you live"
        subtitle="Explore considered homes and interiors, designed with care and crafted for everyday life."
        align="left"
      />
      <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-7 sm:mt-12 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3">
        {projects.map((p) => (
          <PortfolioCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
