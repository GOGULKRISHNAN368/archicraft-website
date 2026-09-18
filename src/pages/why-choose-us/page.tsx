import SectionHeading from "@/components/SectionHeading";
import WhyChooseUs from "@/components/WhyChooseUs";
import Button from "@/components/Button";



export default function WhyChooseUsPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <SectionHeading
        title="Designing spaces that reflect your style, delivered with excellence you can trust"
        align="left"
      />
      <div className="mt-10 sm:mt-12">
        <WhyChooseUs />
      </div>
      <div className="mt-12">
        <Button to="/contact">Book a Consultation</Button>
      </div>
    </section>
  );
}
