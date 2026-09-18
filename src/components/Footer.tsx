import { Link } from "react-router-dom";
;
import { site, footerCompanyLinks, footerServiceLinks } from "@/data/site";

function SocialIcon({ name }: { name: "facebook" | "instagram" }) {
  if (name === "facebook") {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.6l.4-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    );
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}
export default function Footer() {
  return (
    <footer className="bg-teal-900 text-warmwhite pb-20 lg:pb-0">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-12 md:py-16 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-6">
        <div className="col-span-2 md:col-span-1">
          <img
            src="/images/archicraft-logo.png"
            alt="Archicraft Interiors"
            width={160}
            height={45}
            className="h-9 w-auto mb-3 brightness-0 invert opacity-90"
          />
          <p className="text-sm text-warmwhite/70 mb-4">{site.tagline}</p>
          <div className="flex gap-2.5">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Archicraft Interiors on Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-warmwhite/25 hover:bg-gold hover:border-gold hover:text-teal-900 transition-colors"
            >
              <SocialIcon name="facebook" />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Archicraft Interiors on Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-full border border-warmwhite/25 hover:bg-gold hover:border-gold hover:text-teal-900 transition-colors"
            >
              <SocialIcon name="instagram" />
            </a>
          </div>
        </div>

        <div>
          <p className="font-button text-xs uppercase tracking-wide text-gold mb-4">Services</p>
          <ul className="flex flex-col gap-2 text-sm text-warmwhite/80">
            {footerServiceLinks.map((l) => (
              <li key={l.href}><Link to={l.href} className="hover:text-warmwhite">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-button text-xs uppercase tracking-wide text-gold mb-4">Company</p>
          <ul className="flex flex-col gap-2 text-sm text-warmwhite/80">
            {footerCompanyLinks.map((l) => (
              <li key={l.href}><Link to={l.href} className="hover:text-warmwhite">{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-button text-xs uppercase tracking-wide text-gold mb-4">Contact</p>
          <ul className="flex flex-col gap-2 text-sm text-warmwhite/80">
            <li><a href={site.phoneHref} className="hover:text-warmwhite">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-warmwhite">{site.email}</a></li>
            <li>{site.city}, Tamil Nadu</li>
            <li>
              <Link to="/contact" className="inline-block mt-2 font-button text-xs uppercase bg-gold text-teal-900 px-4 py-2.5 rounded">
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-warmwhite/10 px-4 sm:px-6 lg:px-10 py-5 flex flex-col sm:flex-row gap-2 justify-between text-xs text-warmwhite/50 max-w-content mx-auto">
        <p>Â© {new Date().getFullYear()} Archicraft Interiors. All rights reserved.</p>
        <div className="flex gap-4">
          <Link to="/privacy-policy" className="hover:text-warmwhite">Privacy Policy</Link>
          <Link to="/terms-conditions" className="hover:text-warmwhite">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
