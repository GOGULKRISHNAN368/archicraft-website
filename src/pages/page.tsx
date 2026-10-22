import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PortfolioCard from "@/components/PortfolioCard";
import HomeMaterials from "@/components/HomeMaterials";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import TrustedBrands from "@/components/TrustedBrands";
import Testimonials from "@/components/Testimonials";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { services } from "@/data/services";
import { projects } from "@/data/portfolio";
import { homeFaqs } from "@/data/faqs";
import { serviceImages } from "@/data/images";

export default function HomePage() {
  const featuredServices = services.slice(0, 6);
  const featuredProjects = projects.slice(0, 4);

  return (
    <>
      <Hero
        title="Interiors crafted around the way you live"
        subtitle="A boutique design studio in Coimbatore. We turn ideas into refined spaces that balance beauty, comfort, and everyday function."
        primaryCta="Book a Consultation"
        primaryHref="/contact"
        secondaryCta="View Our Portfolio"
        secondaryHref="/portfolio"
        imageSrc={serviceImages["residential-interior"]}
        imageAlt="A refined contemporary home interior opening onto a green garden"
      />

      <StatsBar />

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-24">
        <SectionHeading
          eyebrow="What We Design"
          title="One studio, every space that matters"
          subtitle="From the kitchen where the day begins to the pooja room that offers a moment of calm, we bring thoughtful design to every corner of your home and workplace."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {featuredServices.map((s) => (
            <div key={s.slug} className="flex">
              <ServiceCard service={s} />
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button to="/services" variant="secondary">View All Services</Button>
        </div>
      </section>

      <section className="bg-beige py-10 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeading title="Designed with intention. Built to last." />
          <div className="mt-10 sm:mt-12">
            <WhyChooseUs />
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-24">
        <SectionHeading eyebrow="A few spaces we're proud of" title="Featured projects" />
        <div className="mt-8 grid grid-cols-2 gap-x-3 gap-y-6 sm:mt-12 sm:gap-6 lg:grid-cols-3">
          {featuredProjects.map((p) => (
            <PortfolioCard key={p.slug} project={p} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Button to="/portfolio" variant="secondary">Explore Full Portfolio</Button>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-10 sm:py-24">
        <div
          className="absolute inset-0 bg-[url('/images/services/residential.jpg')] bg-cover bg-center"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#073F3A]/85" aria-hidden="true" />
        <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-10">
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

      <section className="w-full flex">
        <TrustedBrands />
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 pt-8 pb-10 sm:pt-12 sm:pb-24">
        <SectionHeading title="What clients say about working with us" />
        <div className="mt-10 sm:mt-12">
          <Testimonials />
        </div>
      </section>

      <section className="relative w-full min-h-[500px] lg:min-h-[650px] bg-transparent sm:bg-[#F3EEE5] overflow-hidden flex flex-col justify-center">
        {/* Photo background without embedded copy; FAQ text stays editable HTML. */}
        <div 
          className="absolute inset-0 z-0 hidden sm:block bg-[url('/images/services/residential.jpg')] bg-cover bg-center opacity-[0.12]"
          aria-hidden="true"
        />

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1450px] mx-auto px-5 sm:px-8 lg:px-[60px] py-[45px] sm:py-[55px] lg:py-[70px]">
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] items-start gap-10 md:gap-8 lg:gap-12">
            
            {/* Left Column */}
            <div className="min-w-0 flex flex-col md:pl-[6%] lg:pl-[10%] xl:pl-[14%]">
              
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-8 sm:w-10 lg:w-12 h-px bg-[#C9A45C]"></div>
                <span className="text-[#C9A45C] text-[11px] sm:text-[12px] lg:text-[13px] font-medium tracking-[3px] uppercase">
                  Frequently Asked Questions
                </span>
              </div>
              
              <h2 className="font-display text-[#073F3A] text-[42px] sm:text-[48px] lg:text-[66px] leading-[1.0] font-semibold mb-6 max-w-[320px] md:max-w-none">
                Questions,<br />answered
              </h2>
              
              <p className="text-[#6F7C78] text-[16px] lg:text-[19px] leading-[1.6] max-w-[320px] mb-8 md:mb-0">
                Everything you need to know before we begin designing your space.
              </p>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="min-w-0 lg:pr-[4%] xl:pr-[6%]">
              <FaqAccordion items={homeFaqs} />
            </div>
            
          </div>
        </div>

      </section>

    </>
  );
}
