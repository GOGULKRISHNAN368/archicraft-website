import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ProcessTimeline from "@/components/ProcessTimeline";
import Button from "@/components/Button";



export default function DesignProcessPage() {
  return (
    <>
      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
        <SectionHeading
          eyebrow="A seamless journey from inspiration to exceptional interiors"
          title="Our Design Journey"
          subtitle="We believe exceptional design is achieved when beauty and functionality work together seamlessly — here's exactly how we get there, together."
        />
      </section>

      <section className="bg-teal py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <ProcessTimeline />
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 text-center">
        <p className="font-accent italic text-xl sm:text-2xl text-teal max-w-2xl mx-auto">
          Our Promise: Quality, Transparency, Timely Delivery. Your satisfaction is our commitment.
        </p>
        <div className="mt-8">
          <Button href="/contact">Book a Consultation</Button>
        </div>
      </section>
    </>
  );
}
