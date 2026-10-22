import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/portfolio";
import { designProcess } from "@/lib/utils";
import { heroFallbackImage, portfolioGallery, portfolioImages } from "@/data/images";

function ProjectTile({ project, className = "", aspectClass = "aspect-[4/3]" }: { project: Project; className?: string; aspectClass?: string }) {
  return (
    <Link to={`/portfolio/${project.slug}`} className={`group block ${className}`}>
      <div className={`relative ${aspectClass} w-full overflow-hidden rounded-[2px] bg-[#e7e0d5]`}>
        <img
          src={portfolioImages[project.slug] || heroFallbackImage}
          alt={`${project.name} interior design project`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
      </div>
      <div className="flex items-start justify-between gap-2 pt-2 sm:gap-3 sm:pt-3">
        <div>
          <h2 className="font-display text-[15px] font-semibold leading-tight text-[#173e36] transition-colors group-hover:text-[#a07a3f] sm:text-base lg:text-lg">{project.name}</h2>
          <p className="mt-1 text-[11px] uppercase tracking-[.08em] text-[#7d817a] sm:text-xs">{project.location}</p>
        </div>
        <span aria-hidden="true" className="mt-0.5 text-sm text-[#a07a3f] transition-transform group-hover:translate-x-1 sm:text-base">&rarr;</span>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  const [first, second, third, fourth, ...remaining] = projects;
  const featuredProject = projects[4];
  const additionalProjects = remaining.filter((project) => project.slug !== featuredProject?.slug);
  const featuredProjectImage = featuredProject
    ? portfolioGallery[featuredProject.slug]?.[0] || portfolioImages[featuredProject.slug] || heroFallbackImage
    : heroFallbackImage;
  const processHighlights = [
    { number: "01", title: "Understand", body: designProcess[0].body },
    { number: "02", title: "Design & plan", body: `${designProcess[1].body} ${designProcess[2].body}` },
    { number: "03", title: "Create & deliver", body: `${designProcess[3].body} ${designProcess[4].body}` },
  ];

  return (
    <div className="bg-[#f0e3d0]">
      <div className="mx-auto max-w-[1260px] bg-[#fbf9f5]">
      <section className="px-4 pb-10 pt-8 sm:px-8 sm:pb-14 sm:pt-12 lg:px-12 lg:pb-16 lg:pt-14">
        <div className="grid grid-cols-[1.12fr_.86fr] items-start gap-x-4 sm:gap-x-7 lg:gap-x-12">
          <div className="min-w-0">
            <div className="mb-5 sm:mb-8 lg:mb-10">
              <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[.16em] text-[#a78349] sm:text-xs"><span className="h-px w-5 bg-[#b9965a] sm:w-7" />Selected interiors</p>
              <h1 className="max-w-lg font-display text-[clamp(1.5rem,6vw,2rem)] font-medium leading-[1.12] text-[#173e36] sm:text-3xl lg:text-4xl">Our creations speak for themselves</h1>
              <p className="mt-3 max-w-md text-[14px] leading-[1.6] text-[#66736c] sm:text-sm sm:leading-6">Thoughtful spaces shaped around the people who live in them, and the moments that make a house feel like home.</p>
              <Link to="/contact" className="mt-4 inline-flex min-h-10 items-center gap-2 bg-[#b9965a] px-4 py-2 text-[11px] font-semibold uppercase tracking-[.1em] text-white transition-colors hover:bg-[#92713e] sm:text-xs">Start a project <span aria-hidden="true">&rarr;</span></Link>
            </div>
            {first && <ProjectTile project={first} aspectClass="aspect-[1.55/1]" />}
            {third && <ProjectTile project={third} className="mt-5 sm:mt-7 lg:mt-9" aspectClass="aspect-[1.55/1]" />}
          </div>
          <div className="min-w-0 pt-5 sm:pt-8 lg:pt-10">
            {second && <ProjectTile project={second} aspectClass="aspect-square" />}
            {fourth && <ProjectTile project={fourth} className="mt-5 sm:mt-7 lg:mt-9" aspectClass="aspect-square" />}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e5ded3] bg-[#f1ece3]">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
          <div className="mx-auto mb-8 max-w-xl text-center sm:mb-10">
            <p className="font-accent text-lg italic text-[#a78349]">A considered journey</p>
            <h2 className="mt-1 font-display text-2xl font-medium text-[#173e36] sm:text-3xl">How we bring your vision to life</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 sm:gap-5">
            {processHighlights.map((item) => (
              <article key={item.number} className="border-t border-[#b9965a]/60 px-1 py-4 sm:px-4 sm:py-5">
                <p className="text-[10px] font-semibold tracking-[.2em] text-[#a78349]">{item.number}</p>
                <h3 className="mt-2 font-display text-lg font-semibold text-[#173e36] sm:text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#66736c]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {featuredProject && (
        <section className="bg-[#f8f5ef] px-4 py-10 sm:px-6 sm:py-14 lg:px-10 lg:py-16">
          <Link to={`/portfolio/${featuredProject.slug}`} className="group relative mx-auto block h-[300px] max-w-[1400px] overflow-hidden sm:h-[420px] lg:h-[560px]">
            <img src={featuredProjectImage} alt={`${featuredProject.name} interior`} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent" />
            <div className="absolute inset-y-0 left-0 flex max-w-xl flex-col justify-end p-6 text-white sm:p-10 lg:p-14">
              <p className="text-[10px] font-semibold uppercase tracking-[.22em] text-[#e4ca99]">A closer look · {featuredProject.location}</p>
              <h2 className="mt-3 font-display text-3xl font-medium sm:text-4xl lg:text-5xl">{featuredProject.name}</h2>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/80 sm:text-base">{featuredProject.solution}</p>
              <span className="mt-6 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[.16em] text-white sm:text-xs">Explore this project <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">&rarr;</span></span>
            </div>
          </Link>
        </section>
      )}

      {additionalProjects.length > 0 && (
        <section className="border-t border-[#dfd8cc] bg-[#fbf9f5]">
          <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
            <div className="mb-7 flex items-end justify-between gap-4 sm:mb-10">
              <div>
                <p className="font-accent text-lg italic text-[#a78349]">More from our portfolio</p>
                <h2 className="mt-1 font-display text-2xl font-medium text-[#173e36] sm:text-3xl">Spaces with their own story</h2>
              </div>
              <span className="hidden text-xs uppercase tracking-[.15em] text-[#7d817a] sm:block">{String(projects.length).padStart(2, "0")} projects</span>
            </div>
            <div className="grid grid-cols-2 gap-x-3 gap-y-5 sm:gap-x-6 sm:gap-y-8 lg:grid-cols-3">
              {additionalProjects.map((project) => <ProjectTile key={project.slug} project={project} />)}
            </div>
          </div>
        </section>
      )}

      <section className="bg-[#173e36] px-4 py-12 text-center text-[#f8f5ef] sm:py-16">
        <p className="font-accent text-lg italic text-[#d8bd8c]">A space of your own</p>
        <h2 className="mx-auto mt-2 max-w-2xl font-display text-2xl font-medium sm:text-3xl">Ready to bring your vision to life?</h2>
        <Link to="/contact" className="mt-6 inline-flex h-11 items-center border border-[#d8bd8c] px-6 text-[10px] font-semibold uppercase tracking-[.16em] text-[#f8f5ef] transition hover:bg-[#d8bd8c] hover:text-[#173e36] sm:text-xs">Let’s talk <span aria-hidden="true" className="ml-3">&rarr;</span></Link>
      </section>
      </div>
    </div>
  );
}
