import type { Metadata } from "next";
import { Navigate } from "react-router-dom";
;
import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import { projects, getProjectBySlug } from "@/data/portfolio";
import { portfolioImages, portfolioGallery, heroFallbackImage } from "@/data/images";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: project.seoTitle, description: project.metaDescription };
}

import { useParams } from "react-router-dom";
export default function ProjectPage() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);
  if (!project) return <Navigate to="/not-found" replace />;

  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);
  const gallery = portfolioGallery[project.slug] ?? [];

  return (
    <>
      <section className="relative h-[max(340px,45vh)] sm:h-[max(420px,55vh)] bg-teal-900 flex items-end overflow-hidden">
        <img
          src={portfolioImages[project.slug] || heroFallbackImage}
          alt={`${project.name} residential interior design project, ${project.location}`}
          fill
         
          sizes="100vw"
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-900/90 via-teal-900/30 to-teal-900/10" />
        <div className="relative max-w-content mx-auto px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10 w-full">
          <h1 className="font-display font-semibold text-3xl sm:text-5xl text-warmwhite">{project.name}</h1>
          <p className="text-warmwhite/70 mt-2">{project.location}</p>
        </div>
      </section>

      <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div>
            <p className="font-button text-xs uppercase tracking-wide text-gold-800 mb-2">Client Requirement</p>
            <p className="text-teal-900/80 leading-relaxed">{project.clientRequirement}</p>
          </div>
          <div>
            <p className="font-button text-xs uppercase tracking-wide text-gold-800 mb-2">Design Challenge</p>
            <p className="text-teal-900/80 leading-relaxed">{project.designChallenge}</p>
          </div>
          <div>
            <p className="font-button text-xs uppercase tracking-wide text-gold-800 mb-2">Our Solution</p>
            <p className="text-teal-900/80 leading-relaxed">{project.solution}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((src, i) => (
              <div key={src} className="aspect-square bg-softgrey rounded-xl relative overflow-hidden">
                <img
                  src={src}
                  alt={`${project.name} interior design detail ${i + 1}, ${project.location} — Archicraft Interiors`}
                  fill
                  sizes="(min-width: 1024px) 33vw, 45vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <aside className="bg-beige rounded-xl p-6 h-fit">
          <p className="font-button text-xs uppercase tracking-wide text-teal-900/60 mb-2">Materials Used</p>
          <p className="text-sm text-teal-900/80">{project.materialsUsed}</p>
          <Button href="/contact" className="w-full mt-6 !inline-flex justify-center">Book a Consultation</Button>
        </aside>
      </section>

      <section className="bg-beige py-16 sm:py-20">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10">
          <p className="font-display font-semibold text-2xl text-teal-900 mb-8">Related Projects</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((p) => (
              <PortfolioCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
