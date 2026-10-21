import { Navigate, useParams } from "react-router-dom";
import Button from "@/components/Button";
import { blogPosts, getPostBySlug } from "@/data/blog";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;
  if (!post) return <Navigate to="/not-found" replace />;

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-24">
      <p className="text-xs uppercase tracking-wide text-gold-800">{post.category}</p>
      <h1 className="font-display font-semibold text-3xl sm:text-4xl text-teal-900 mt-2">{post.title}</h1>
      <div className="mt-8 space-y-5 text-teal-900/80 leading-relaxed">
        {post.body.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>
      <div className="mt-10">
        <Button to="/contact">Book a Consultation</Button>
      </div>
    </article>
  );
}
