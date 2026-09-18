import { Link } from "react-router-dom";
import { site, footerCompanyLinks, footerServiceLinks } from "@/data/site";

function SocialIcon({ name }: { name: "facebook" | "instagram" }) {
  if (name === "facebook") {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3.6l.4-4h-4V7a1 1 0 0 1 1-1h3z"></path>
      </svg>
    );
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function Footer() {
  return (
    <>
      {/* 1. CTA / CONSULTATION HERO */}
      <section className="relative w-full min-h-[520px] lg:h-[580px] bg-[#073F3A] overflow-hidden flex flex-col justify-center items-center">
        {/* Background Image - Assumed path */}
        <div 
          className="absolute inset-0 z-0 bg-[url('/images/cta-bg.png')] bg-cover bg-center bg-no-repeat"
          aria-hidden="true"
        >
          {/* Subtle overlay if needed */}
          <div className="absolute inset-0 bg-[#073F3A]/20"></div>
        </div>

        {/* Decorative Side Text */}
        <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 text-[#D8DED8]/60 text-[11px] tracking-[4px] uppercase whitespace-nowrap rotate-[-90deg] origin-left z-10">
          Spaces that inspire better living
        </div>
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 text-[#D8DED8]/60 text-[11px] tracking-[4px] uppercase whitespace-nowrap rotate-[90deg] origin-right z-10">
          Good design brighter tomorrows
        </div>

        {/* CTA Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-[950px] mx-auto py-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 sm:w-12 h-px bg-[#C9A45C]"></div>
            <span className="text-[#C9A45C] text-[12px] sm:text-[13px] font-medium tracking-[4px] uppercase">
              Let's work together
            </span>
            <div className="w-8 sm:w-12 h-px bg-[#C9A45C]"></div>
          </div>
          
          <h2 className="font-display text-[#F7F3EA] text-[30px] sm:text-[44px] lg:text-[56px] leading-[1.05] font-semibold mb-6">
            Let’s create something<br className="hidden sm:block"/> extraordinary, together
          </h2>
          
          <p className="text-[#D8DED8] text-[16px] sm:text-[18px] lg:text-[20px] max-w-[600px] mb-10">
            Designing spaces you’ll love for years to come.
          </p>

          <Link
            to="/contact"
            className="group inline-flex items-center justify-center w-[90%] max-w-[280px] h-[58px] sm:h-[62px] bg-[#C9A45C] hover:bg-[#D4AF6A] text-[#073F3A] font-sans font-semibold text-[15px] sm:text-[16px] tracking-[0.5px] uppercase rounded-[5px] shadow-sm hover:shadow-md hover:-translate-y-[3px] transition-all duration-300"
          >
            Book a Consultation
            <span className="ml-3 transform group-hover:translate-x-[5px] transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* 2. FOOTER */}
      <footer className="bg-[#073F3A] text-[#F7F3EA] pb-10">
        <div className="max-w-[1450px] mx-auto px-6 lg:px-[50px] pt-[60px] lg:pt-[70px] pb-[30px]">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] gap-[40px] md:gap-[60px] lg:gap-[70px]">
            {/* Column 1 - Brand */}
            <div className="flex flex-col">
              <img
                src="/images/archicraft-logo.png"
                alt="Archicraft Interiors"
                width={180}
                height={50}
                className="h-10 w-auto mb-6 brightness-0 invert opacity-95 object-contain"
              />
              <p className="text-[#D8DED8] text-[15px] leading-relaxed mb-8 max-w-[280px]">
                Thoughtfully designed spaces<br/>for modern living.
              </p>
              <div className="flex gap-4">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-white/20 hover:border-[#C9A45C] text-[#F7F3EA] hover:text-[#C9A45C] transition-all duration-300 hover:-translate-y-1"
                >
                  <SocialIcon name="instagram" />
                </a>
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="flex items-center justify-center w-[42px] h-[42px] rounded-full border border-white/20 hover:border-[#C9A45C] text-[#F7F3EA] hover:text-[#C9A45C] transition-all duration-300 hover:-translate-y-1"
                >
                  <SocialIcon name="facebook" />
                </a>
              </div>
            </div>

            {/* Column 2 - Services */}
            <div>
              <p className="text-[#C9A45C] text-[13px] font-semibold tracking-[2.5px] uppercase mb-6">Services</p>
              <ul className="flex flex-col space-y-4">
                {footerServiceLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="inline-block py-1 sm:py-0 text-[#F7F3EA] text-[16px] transition-all duration-250 hover:text-[#C9A45C] hover:translate-x-[3px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Company */}
            <div>
              <p className="text-[#C9A45C] text-[13px] font-semibold tracking-[2.5px] uppercase mb-6">Company</p>
              <ul className="flex flex-col space-y-4">
                {footerCompanyLinks.map((l) => (
                  <li key={l.href}>
                    <Link to={l.href} className="inline-block py-1 sm:py-0 text-[#F7F3EA] text-[16px] transition-all duration-250 hover:text-[#C9A45C] hover:translate-x-[3px]">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Contact */}
            <div>
              <p className="text-[#C9A45C] text-[13px] font-semibold tracking-[2.5px] uppercase mb-6">Contact</p>
              <ul className="flex flex-col space-y-4 mb-8">
                <li>
                  <a href={site.phoneHref} className="inline-block py-1 sm:py-0 text-[#F7F3EA] text-[16px] transition-all duration-250 hover:text-[#C9A45C] hover:translate-x-[3px]">
                    {site.phone}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="inline-block py-1 sm:py-0 text-[#F7F3EA] text-[16px] transition-all duration-250 hover:text-[#C9A45C] hover:translate-x-[3px]">
                    {site.email}
                  </a>
                </li>
                <li className="text-[#F7F3EA] text-[16px]">
                  {site.city}, Tamil Nadu
                </li>
              </ul>
              <Link 
                to="/contact" 
                className="inline-block border border-[#C9A45C] text-[#C9A45C] hover:bg-[#C9A45C] hover:text-[#073F3A] font-semibold text-[13px] tracking-[1.5px] uppercase px-6 py-3 rounded transition-colors duration-300"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          {/* 3. FOOTER DIVIDER */}
          <div className="w-full h-px bg-[rgba(255,255,255,0.12)] mt-[60px] mb-[30px]"></div>

          {/* 4. COPYRIGHT AREA */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 text-[#AEBDB7] text-[13px] sm:text-[14px]">
            <p>© {new Date().getFullYear()} Archicraft Interiors. All rights reserved.</p>
            <div className="flex gap-4">
              <Link to="/privacy-policy" className="hover:text-[#F7F3EA] transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" className="hover:text-[#F7F3EA] transition-colors">Terms & Conditions</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}
