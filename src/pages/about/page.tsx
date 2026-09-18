;
import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import Button from "@/components/Button";
import RevealOnScroll from "@/components/RevealOnScroll";
import { aboutImage } from "@/data/images";



const coreIdeas = [
  "Thoughtful Ideas â€” ideas that spark beautiful possibilities",
  "Intelligent Spaces â€” layouts that work as hard as they look good",
  "Meaningful Experiences â€” designed around how you'll actually use a space",
  "Designed With Purpose â€” nothing added without a reason",
  "Planned With Precision â€” every measurement, every material, considered",
  "Created For Living â€” because a beautiful room still has to be lived in",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="A home is more than a space â€” it's where life unfolds"
        subtitle="At Archicraft Interiors, we transform ideas into refined spaces that balance aesthetics, comfort, and functionality to create experiences that last."
        primaryCta="Book a Consultation"
        primaryHref="/contact"
        imageSrc={aboutImage}
        imageAlt="Archicraft Interiors interior design studio team at work, Coimbatore"
      />

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <SectionHeading eyebrow="Our Story" title="Design that starts by listening" align="left" />
          <RevealOnScroll>
            <p className="mt-6 max-w-md text-teal-900/80 leading-relaxed">
              Archicraft Interiors began with a simple belief: that good design is a language, not a style. Every home
              has its own rhythm â€” the way a family gathers, the way morning light falls across a kitchen, the quiet
              corner where a pooja space needs to feel still. Our work starts by listening for that rhythm, before a
              single layout is drawn.
            </p>
            <p className="mt-4 max-w-md text-teal-900/80 leading-relaxed">
              Based in Coimbatore, we&rsquo;ve since carried that approach into homes and offices across Erode, Salem,
              and Bengaluru â€” each project shaped by the same principle: design with purpose, planned with precision,
              created for living.
            </p>
          </RevealOnScroll>
        </div>
        <RevealOnScroll>
          <div className="relative w-full max-w-sm mx-auto lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden">
            <img
              src="/images/team/udhayakumar-founder.jpg"
              alt="Udhayakumar K, Founder and Business Owner"
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
          </div>
          <p className="mt-4 text-center font-accent text-teal-900/90">
            Udhayakumar K, Founder and Business Owner
          </p>
        </RevealOnScroll>
      </section>

      <section className="bg-beige py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <SectionHeading
            eyebrow="Good design is a language, not a style"
            title="Our Design Philosophy"
            subtitle="We believe exceptional design is achieved when beauty and functionality work together seamlessly. Every detail is carefully considered to create spaces that feel sophisticated, comfortable, and meaningful."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreIdeas.map((idea) => (
              <div key={idea} className="bg-white border border-softgrey rounded-xl p-5 text-sm text-teal-900/80">
                {idea}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading title="Designing spaces that reflect your style, delivered with excellence you can trust" />
        <div className="mt-10 sm:mt-12">
          <WhyChooseUs />
        </div>
      </section>

      <section className="bg-teal py-16 sm:py-24">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <p className="font-accent italic text-2xl sm:text-3xl text-warmwhite max-w-2xl mx-auto">
            &ldquo;Creating interiors that stand the test of time â€” designed with passion, built with precision.&rdquo;
          </p>
          <div className="mt-8">
            <Button to="/contact">Book a Consultation</Button>
          </div>
        </div>
      </section>
    </>
  );
}
