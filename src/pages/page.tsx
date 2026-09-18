import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import MaterialCard from "@/components/MaterialCard";
import HomeMaterials from "@/components/HomeMaterials";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import BrandPartners from "@/components/BrandPartners";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import RevealOnScroll from "@/components/RevealOnScroll";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { homeFaqs } from "@/data/faqs";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Hero
        title="Interiors crafted around the way you live"
        subtitle="A boutique design studio in Coimbatore, turning ideas into refined spaces â€” balancing beauty, comfort, and function in every detail."
        primaryCta="Book a Consultation"
        primaryHref="/contact"
        secondaryCta="View Our Portfolio"
        secondaryHref="/portfolio"
        videoSrc="/videos/archicraft_hero_widescreen.mp4"
      />

      <StatsBar />

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading
          eyebrow="What We Design"
          title="One studio, every space that matters"
          subtitle="From the kitchen where the day begins to the pooja room where it's grounded â€” we design every corner of your home and workplace with the same care."
        />
        <div className="mt-10 sm:mt-12 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible">
          {featuredServices.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button to="/services" variant="secondary">View All Services</Button>
        </div>
      </section>

      <section className="bg-beige py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeading title="Designed with intention. Built to last." />
          <div className="mt-10 sm:mt-12">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading eyebrow="A few spaces we're proud of" title="Featured projects" />
        <div className="mt-10 sm:mt-12 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">
          {featuredProjects.map((p) => (
            <PortfolioCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button to="/portfolio" variant="secondary">Explore Full Portfolio</Button>
        </div>
      </section>

      <section className="bg-teal py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="A seamless journey from inspiration to exceptional interiors"
            title="How we get from idea to handover"
            dark
          />
          <div className="mt-10 sm:mt-12">
            <ProcessTimeline />
          </div>
          <div className="text-center mt-8">
            <Button to="/design-process" variant="secondary" className="!border-warmwhite !text-warmwhite hover:!bg-warmwhite hover:!text-teal">
              See the Full Process
            </Button>
          </div>
        </div>
      </section>

      <HomeMaterials />

      <section className="bg-beige py-14 sm:py-16">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <p className="text-center text-xs uppercase tracking-wide text-teal-900/50 mb-8">Backed by names you already trust</p>
          <BrandPartners />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading title="What clients say about working with us" />
        <div className="mt-10 sm:mt-12">
          <Testimonials />
        </div>
      </section>

      <section className="bg-beige py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 max-w-3xl">
          <SectionHeading title="Questions, answered" align="left" />
          <div className="mt-8">
            <FaqAccordion items={homeFaqs} />
          </div>
        </div>
      </section>

    </>
  );
}
