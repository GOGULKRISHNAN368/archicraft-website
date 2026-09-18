import type { Metadata } from "next";
import { Link } from "react-router-dom";
;
import SectionHeading from "@/components/SectionHeading";
import { blogPosts } from "@/data/blog";
import { blogImages, heroFallbackImage } from "@/data/images";



export default function BlogPage() {
  return (
    <section className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <SectionHeading eyebrow="Ideas" title="Design ideas, material guides, and project stories" align="left" />
      <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="aspect-[4/3] bg-softgrey rounded-xl relative overflow-hidden">
              <img
                src={blogImages[post.slug] || heroFallbackImage}
                alt={post.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <p className="text-xs uppercase tracking-wide text-gold-800 mt-3">{post.category}</p>
            <p className="font-display font-semibold text-lg text-teal-900 mt-1 group-hover:text-teal transition-colors">
              {post.title}
            </p>
            <p className="text-sm text-teal-900/60 mt-1 line-clamp-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
