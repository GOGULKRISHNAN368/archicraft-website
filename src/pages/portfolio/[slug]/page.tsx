import { Link, Navigate, useParams } from "react-router-dom";
import Button from "@/components/Button";
import PortfolioCard from "@/components/PortfolioCard";
import { projects, getProjectBySlug } from "@/data/portfolio";
import { portfolioImages, portfolioGallery, heroFallbackImage } from "@/data/images";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = slug ? getProjectBySlug(slug) : undefined;
  if (!project) return <Navigate to="/not-found" replace />;

  const related = projects.filter((item) => item.slug !== project.slug).slice(0, 3);
  const gallery = portfolioGallery[project.slug] ?? [];

  return (
    <>
      <section className="relative flex min-h-[420px] items-end overflow-hidden bg-teal-900 sm:min-h-[560px]">
        <img src={portfolioImages[project.slug] || heroFallbackImage} alt={`${project.name} interior`} className="absolute inset-0 h-full w-full object-cover opacity-75" fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/30 to-teal-900/5" />
        <div className="relative z-10 mx-auto w-full max-w-content px-5 pb-8 sm:px-6 sm:pb-12 lg:px-10">
          <Link to="/portfolio" className="mb-5 inline-flex min-h-10 items-center rounded-full border border-white/50 bg-teal-950/20 px-4 text-sm text-white backdrop-blur-sm transition hover:bg-white/15">← Back to Projects</Link>
          <h1 className="font-display text-3xl font-semibold text-warmwhite sm:text-5xl">{project.name}</h1>
          <p className="mt-2 text-sm text-warmwhite/80 sm:text-base">{project.location}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-content grid-cols-1 gap-8 px-5 py-10 sm:px-6 sm:py-16 lg:grid-cols-3 lg:gap-12 lg:px-10">
        <div className="space-y-7 lg:col-span-2 sm:space-y-8">
          {[
            [project.briefLabel || "Client Requirement", project.clientRequirement],
            ["Design Challenge", project.designChallenge],
            ["Our Solution", project.solution],
          ].map(([heading, body]) => (
            <div key={heading}>
              <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#9A7A3E]">{heading}</h2>
              <p className="leading-relaxed text-teal-900/80">{body}</p>
            </div>
          ))}
          {gallery.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {gallery.map((src, index) => (
                <div key={src} className="relative aspect-square overflow-hidden rounded-xl bg-softgrey sm:rounded-2xl">
                  <img src={src} alt={`${project.name} interior detail ${index + 1}`} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
                </div>
              ))}
            </div>
          )}
        </div>
        <aside className="h-fit rounded-2xl bg-beige p-5 sm:p-6">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-teal-900/60">Materials Used</h2>
          <p className="text-sm leading-relaxed text-teal-900/80">{project.materialsUsed}</p>
          <Button to="/contact" className="mt-6 inline-flex min-h-11 w-full justify-center">Book a Consultation</Button>
        </aside>
      </section>

      <section className="bg-beige py-10 sm:py-16">
        <div className="mx-auto max-w-content px-5 sm:px-6 lg:px-10">
          <h2 className="mb-6 font-display text-2xl font-semibold text-teal-900 sm:mb-8 sm:text-3xl">Related Projects</h2>
          <div className="grid grid-cols-2 gap-x-3 gap-y-7 sm:grid-cols-3 sm:gap-6">
            {related.map((item) => <PortfolioCard key={item.slug} project={item} />)}
          </div>
        </div>
      </section>
    </>
  );
}
