import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blog";
import { blogImages, heroFallbackImage } from "@/data/images";

function ReadArrow() {
  return (
    <span aria-hidden="true" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-teal-900/20 text-teal-900 transition-all group-hover:border-teal-900 group-hover:bg-teal-900 group-hover:text-warmwhite">
      <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 10h12M10 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All ideas");
  const categories = useMemo(() => ["All ideas", ...new Set(blogPosts.map((post) => post.category))], []);
  const featuredPost = blogPosts[0];
  const visiblePosts = blogPosts.filter((post) => activeCategory === "All ideas" ? post.slug !== featuredPost?.slug : post.category === activeCategory);

  return (
    <div className="bg-warmwhite">
      <section className="relative overflow-hidden border-b border-teal-900/10 bg-[#f1ece3]">
        <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-36 h-[28rem] w-[28rem] rounded-full border border-gold/20 sm:-right-16 sm:-top-48 sm:h-[38rem] sm:w-[38rem]" />
        <div className="relative mx-auto max-w-content px-4 pb-12 pt-12 sm:px-6 sm:pb-16 sm:pt-16 lg:px-10 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <p className="mb-4 flex items-center gap-3 font-accent text-lg italic text-gold-800 sm:text-xl"><span className="h-px w-8 bg-gold" />The Archicraft journal</p>
            <h1 className="font-display text-4xl font-medium leading-[1.08] text-teal-900 sm:text-6xl lg:text-7xl">Ideas for a home<br className="hidden sm:block" /> that feels like <span className="italic text-gold-800">yours.</span></h1>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.65] text-teal-900/70 sm:mt-6 sm:text-base sm:leading-7">Thoughtful advice on materials, planning, and the small details that make a room feel like home.</p>
          </div>

          {featuredPost && activeCategory === "All ideas" && (
            <Link to={`/blog/${featuredPost.slug}`} className="group mt-10 grid overflow-hidden rounded-2xl bg-teal-900 text-warmwhite shadow-sm transition-shadow hover:shadow-xl sm:mt-14 lg:mt-16 lg:grid-cols-[1.08fr_.92fr]">
              <div className="relative aspect-[16/10] overflow-hidden sm:aspect-[16/9] lg:aspect-auto lg:min-h-[390px]">
                <img src={blogImages[featuredPost.slug] || heroFallbackImage} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-teal-900/15" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-12 xl:p-16">
                <div className="flex items-center gap-3 text-[11px] uppercase tracking-[.14em] text-gold sm:text-xs sm:tracking-[.2em]"><span>Featured story</span><span className="h-px w-8 bg-gold/60" /><span className="text-warmwhite/55">{featuredPost.category}</span></div>
                <h2 className="mt-5 font-display text-2xl font-medium leading-snug sm:mt-6 sm:text-3xl lg:text-4xl">{featuredPost.title}</h2>
                <p className="mt-4 line-clamp-2 text-[15px] leading-[1.6] text-warmwhite/80 sm:mt-5 sm:text-base sm:leading-7">{featuredPost.excerpt}</p>
                <span className="mt-7 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[.16em] text-gold transition-colors group-hover:text-warmwhite sm:mt-9">Read the story <span aria-hidden="true">&rarr;</span></span>
              </div>
            </Link>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-content px-4 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-20">
        <div className="flex flex-col justify-between gap-6 border-b border-teal-900/15 pb-6 sm:flex-row sm:items-end sm:pb-7">
          <div>
            <p className="font-accent text-lg italic text-teal-700">Browse the journal</p>
            <h2 className="mt-1 font-display text-2xl font-medium text-teal-900 sm:text-3xl">More ideas to explore</h2>
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0" role="group" aria-label="Filter ideas by category">
            {categories.map((category) => (
              <button key={category} type="button" onClick={() => setActiveCategory(category)} aria-pressed={activeCategory === category} className={`shrink-0 rounded-full border px-4 py-2.5 text-[13px] transition-colors sm:text-sm ${activeCategory === category ? "border-teal-900 bg-teal-900 text-warmwhite" : "border-teal-900/20 text-teal-900/70 hover:border-teal-900 hover:text-teal-900"}`}>
                {category}
              </button>
            ))}
          </div>
        </div>

        {visiblePosts.length > 0 ? (
          <div className="mt-7 grid gap-x-6 gap-y-9 sm:mt-9 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
            {visiblePosts.map((post, index) => (
              <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-beige">
                  <img src={blogImages[post.slug] || heroFallbackImage} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                  <span className="absolute left-4 top-4 rounded-full bg-warmwhite/95 px-3 py-1.5 text-[10px] uppercase tracking-[.15em] text-teal-900 sm:left-5 sm:top-5">{post.category}</span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4 sm:pt-5">
                  <div>
                    <p className="mb-2 font-accent text-base italic text-gold-800">Journal / {String(index + 2).padStart(2, "0")}</p>
                    <h3 className="font-display text-xl font-medium leading-snug text-teal-900 transition-colors group-hover:text-teal-700 sm:text-2xl">{post.title}</h3>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-teal-900/60">{post.excerpt}</p>
                  </div>
                  <div className="mt-1"><ReadArrow /></div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="py-14 text-center font-accent text-xl italic text-teal-900/65">More stories are on the way.</p>
        )}
      </section>
    </div>
  );
}
