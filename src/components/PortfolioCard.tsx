import { Link } from "react-router-dom";
import type { Project } from "@/data/portfolio";
import { portfolioImages, heroFallbackImage } from "@/data/images";

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="group block w-full min-w-0">
      <div className="relative aspect-[1.12/1] overflow-hidden rounded-2xl bg-softgrey shadow-[0_10px_28px_rgba(23,62,54,0.1)] transition-shadow duration-500 group-hover:shadow-[0_18px_38px_rgba(23,62,54,0.2)] sm:aspect-[1.35/1] sm:rounded-[1.35rem]">
        <img
          src={portfolioImages[project.slug] || heroFallbackImage}
          alt={`${project.name} interior design project`}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 48vw, (min-width: 640px) 50vw, 92vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#08241f]/85 via-[#08241f]/5 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3.5 text-white sm:p-5 lg:p-6">
          <div className="min-w-0">
            <h3 className="truncate font-display text-[17px] font-medium leading-tight sm:text-xl lg:text-2xl">{project.name}</h3>
            <p className="mt-1 text-[12px] leading-snug text-white/80 sm:text-sm">{project.location}</p>
          </div>
          <span aria-hidden="true" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/65 transition-all duration-300 group-hover:border-[#e4ca99] group-hover:bg-[#e4ca99] group-hover:text-[#173e36] sm:h-10 sm:w-10">
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5"><path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
        </div>
      </div>
    </Link>
  );
}
