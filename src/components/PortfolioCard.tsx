import { Link } from "react-router-dom";
;
import type { Project } from "@/data/portfolio";
import { portfolioImages, heroFallbackImage } from "@/data/images";

export default function PortfolioCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/portfolio/${project.slug}`}
      className="group flex-shrink-0 w-[80vw] sm:w-full snap-start block"
    >
      <div className="aspect-[4/3] bg-softgrey rounded-xl overflow-hidden relative">
        <img
          src={portfolioImages[project.slug] || heroFallbackImage}
          alt={`${project.name} â€” residential interior design project, ${project.location}`}
          sizes="(min-width: 640px) 33vw, 80vw"
          className="w-full h-full absolute inset-0 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/20 transition-colors pointer-events-none" />
      </div>
      <p className="font-display font-semibold text-lg text-teal-900 mt-3 group-hover:text-teal transition-colors relative inline-block">
        {project.name}
        <span className="absolute left-0 -bottom-1 w-0 group-hover:w-full h-[1.5px] bg-gold transition-all duration-300" />
      </p>
      <p className="text-sm text-teal-900/60">{project.location}</p>
    </Link>
  );
}
