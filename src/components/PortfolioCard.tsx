import { Link } from "react-router-dom";
import type { Project } from "@/data/portfolio";
import { portfolioImages, heroFallbackImage } from "@/data/images";

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className="group block w-full min-w-0">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-softgrey sm:rounded-2xl">
        <img
          src={portfolioImages[project.slug] || heroFallbackImage}
          alt={`${project.name} interior design project`}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 46vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-0 bg-teal-900/0 transition-colors group-hover:bg-teal-900/20" />
      </div>
      <p className="relative mt-2 inline-block font-display text-[15px] font-semibold leading-snug text-teal-900 transition-colors group-hover:text-teal sm:mt-3 sm:text-lg">
        {project.name}
        <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
      </p>
      <p className="mt-0.5 text-xs leading-snug text-teal-900/60 sm:text-sm">{project.location}</p>
    </Link>
  );
}
