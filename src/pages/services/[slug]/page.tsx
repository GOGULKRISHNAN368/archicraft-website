import { Link, Navigate, useParams } from "react-router-dom";
import Button from "@/components/Button";
import { getServiceBySlug } from "@/data/services";
import { serviceImages, heroFallbackImage } from "@/data/images";

export default function ServiceDetailsPage() {
  const { slug } = useParams();
  const service = slug ? getServiceBySlug(slug) : undefined;
  if (!service) return <Navigate to="/not-found" replace />;

  return (
    <>
      <section className="relative flex min-h-[390px] items-end overflow-hidden bg-teal-900 sm:min-h-[500px]">
        <img src={serviceImages[service.slug] || heroFallbackImage} alt={`${service.name} design`} className="absolute inset-0 h-full w-full object-cover opacity-70" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/35 to-teal-900/10" />
        <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-8 sm:px-6 sm:pb-12 lg:px-10">
          <Link to="/services" className="mb-5 inline-flex min-h-10 items-center rounded-full border border-white/50 bg-teal-950/20 px-4 text-sm text-white backdrop-blur-sm transition hover:bg-white/15">← All Services</Link>
          <h1 className="font-display text-3xl font-semibold text-warmwhite sm:text-5xl">{service.name}</h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-warmwhite/80 sm:text-base">{service.hero}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-content grid-cols-1 gap-8 px-5 py-10 sm:px-6 sm:py-16 lg:grid-cols-3 lg:gap-12 lg:px-10">
        <div className="lg:col-span-2">
          <p className="max-w-3xl text-base leading-relaxed text-teal-900/75 sm:text-lg">{service.overview}</p>
          <h2 className="mb-4 mt-8 font-display text-2xl font-semibold text-teal-900 sm:mt-10 sm:text-3xl">What we can help with</h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="rounded-xl border border-teal-900/10 bg-[#FFFDF9] p-4 text-sm leading-relaxed text-teal-900/80">{benefit}</li>
            ))}
          </ul>
          <div className="mt-8 rounded-2xl bg-beige p-5 sm:mt-10 sm:p-6">
            <h2 className="mb-2 font-display text-xl font-semibold text-teal-900">A considered process</h2>
            <p className="text-sm leading-relaxed text-teal-900/75">{service.processNote}</p>
          </div>
        </div>
        <aside className="h-fit rounded-2xl bg-teal p-5 text-warmwhite sm:p-6">
          <p className="font-display text-xl font-semibold">Let’s plan your space</p>
          <p className="mt-2 text-sm leading-relaxed text-warmwhite/75">Tell us what you have in mind and our team will help you take the next step.</p>
          <Button to="/contact" className="mt-6 inline-flex min-h-11 w-full justify-center">Book a Consultation</Button>
        </aside>
      </section>

      {service.faqs.length > 0 && (
        <section className="bg-beige py-10 sm:py-16">
          <div className="mx-auto max-w-content px-5 sm:px-6 lg:px-10">
            <h2 className="mb-6 font-display text-2xl font-semibold text-teal-900 sm:text-3xl">Frequently asked questions</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.faqs.map((faq) => (
                <article key={faq.q} className="rounded-xl bg-[#FFFDF9] p-4 sm:p-5">
                  <h3 className="font-medium text-teal-900">{faq.q}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-teal-900/70">{faq.a}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
