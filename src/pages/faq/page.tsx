import SectionHeading from "@/components/SectionHeading";
import FaqAccordion from "@/components/FaqAccordion";
import Button from "@/components/Button";
import { allFaqs } from "@/data/faqs";



export default function FaqPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <SectionHeading title="Questions, answered" align="left" />
      <div className="mt-10 space-y-10 max-w-3xl">
        {allFaqs.map((group) => (
          <div key={group.category}>
            <p className="font-display font-semibold text-xl text-teal mb-3">{group.category}</p>
            <FaqAccordion items={group.items} />
          </div>
        ))}
      </div>
      <div className="mt-12">
        <Button to="/contact">Still have a question? Book a Consultation</Button>
      </div>
    </section>
  );
}
