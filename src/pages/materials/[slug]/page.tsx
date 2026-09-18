import type { Metadata } from "next";
import { Navigate } from "react-router-dom";
import Button from "@/components/Button";
import { materials, getMaterialBySlug } from "@/data/materials";

export function generateStaticParams() {
  return materials.map((m) => ({ slug: m.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const material = getMaterialBySlug(slug);
  if (!material) return {};
  return { title: material.seoTitle, description: material.metaDescription };
}

import { useParams } from "react-router-dom";
export default function MaterialPage() {
  const { slug } = useParams();
  const material = getMaterialBySlug(slug);
  if (!material) return <Navigate to="/not-found" replace />;

  const rows = [
    ["Description", material.description],
    ["Advantages", material.advantages],
    ["Maintenance", material.maintenance],
    ["Applications", material.applications],
  ];

  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <h1 className="font-display font-semibold text-3xl sm:text-5xl text-teal-900">{material.name}</h1>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl">
        {rows.map(([label, value]) => (
          <div key={label} className="bg-beige rounded-xl p-5">
            <p className="font-button text-xs uppercase tracking-wide text-gold-800 mb-2">{label}</p>
            <p className="text-sm text-teal-900/80">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <Button href="/contact">Book a Consultation</Button>
      </div>
    </section>
  );
}
