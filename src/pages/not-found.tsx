import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="max-w-content mx-auto px-4 py-32 text-center">
      <h1 className="font-display font-semibold text-3xl sm:text-4xl text-teal-900">Page not found</h1>
      <p className="text-teal-900/60 mt-3">The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.</p>
      <Link to="/" className="inline-block mt-8 font-button text-xs uppercase tracking-wide bg-gold text-teal-900 px-6 py-3.5 rounded">
        Back to Home
      </Link>
    </section>
  );
}
