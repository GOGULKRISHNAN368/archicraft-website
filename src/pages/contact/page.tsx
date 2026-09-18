import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ConsultationForm from "@/components/ConsultationForm";
import { site } from "@/data/site";



export default function ContactPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
      <div className="lg:col-span-2">
        <SectionHeading eyebrow="Let's Create Something Extraordinary Together" title="Book a Consultation" align="left" />
        <p className="mt-6 text-teal-900/70 max-w-md">Designing spaces you&rsquo;ll love for years to come. Tell us a little about your project and we&rsquo;ll be in touch within 24 hours.</p>

        <div className="mt-8 space-y-4 text-sm">
          <p><span className="text-teal-900/50">Phone:</span> <a href={site.phoneHref} className="text-teal">{site.phone}</a></p>
          <p><span className="text-teal-900/50">Email:</span> <a href={`mailto:${site.email}`} className="text-teal">{site.email}</a></p>
          <p><span className="text-teal-900/50">Studio:</span> {site.city}, Tamil Nadu</p>
        </div>
      </div>

      <div className="lg:col-span-3 bg-beige rounded-2xl p-6 sm:p-10">
        <ConsultationForm />
      </div>
    </section>
  );
}
