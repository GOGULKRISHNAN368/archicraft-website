import { Link, Navigate, useParams } from "react-router-dom";
import { getMaterialBySlug, materials } from "@/data/materials";
import { catalogMaterialImages } from "@/data/images";

export default function MaterialPage() {
  const { slug } = useParams();
  const material = slug ? getMaterialBySlug(slug) : undefined;
  if (!material) return <Navigate to="/not-found" replace />;

  const index = materials.findIndex((item) => item.slug === material.slug);
  const rows = [
    { label: "Why it works", value: material.advantages, number: "01" },
    { label: "Care & maintenance", value: material.maintenance, number: "02" },
    { label: "Where it works best", value: material.applications, number: "03" },
  ];

  return (
    <>
      <section className="bg-[#F6F2EA]">
        <div className="mx-auto grid max-w-[1400px] items-center gap-8 px-6 py-10 sm:px-10 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-[70px]">
          <div className="order-2 lg:order-1">
            <Link to="/materials" className="text-xs font-medium uppercase tracking-[0.16em] text-[#6F8580] transition hover:text-[#B9965A]">← All materials</Link>
            <span className="mt-10 block text-xs font-semibold uppercase tracking-[0.25em] text-[#B9965A]">Finish {String(index + 1).padStart(2, "0")}</span>
            <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-[#073F3A] sm:text-[48px]">{material.name}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-[#55716C]">{material.description}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#6F8580]">Every material is considered in the context of your room, your routine, and the look you want to create. We’ll help you compare samples and choose with confidence.</p>
            <Link to="/contact" className="mt-8 inline-flex h-12 items-center rounded bg-[#073F3A] px-6 text-xs font-medium uppercase tracking-[0.15em] text-white transition hover:bg-[#0B554E]">Discuss this finish <span aria-hidden="true" className="ml-3">→</span></Link>
          </div>
          <div className="order-1 aspect-[4/3] overflow-hidden rounded-xl bg-[#E9E1D3] lg:order-2">
            <img src={catalogMaterialImages[material.slug] || "/images/brochure/laminate-swatch.jpg"} alt={`${material.name} finish`} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
      <section className="bg-[#FBF9F5] py-14 sm:py-20">
        <div className="mx-auto max-w-[1100px] px-6 sm:px-10">
          <div className="mb-9 max-w-xl">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#B9965A]">A closer look</span>
            <h2 className="mt-3 font-display text-[26px] font-medium text-[#073F3A] sm:text-[32px]">Made to suit your space</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {rows.map((row) => (
              <article key={row.label} className="rounded-xl border border-[#E4DED3] bg-white p-6 sm:p-7">
                <span className="text-xs font-semibold tracking-[0.15em] text-[#B9965A]">{row.number}</span>
                <h3 className="mt-4 font-display text-xl font-semibold text-[#073F3A]">{row.label}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#6F8580]">{row.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
