

import { useState } from "react";
import { Link } from "react-router-dom";
;
import { primaryNav, site } from "@/data/site";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <>
    <header className="sticky top-0 z-50 bg-warmwhite/95 backdrop-blur border-b border-softgrey">
      {/* Utility bar â€” hidden on small screens to save vertical space on mobile */}
      <div className="hidden md:flex items-center justify-end gap-6 px-6 lg:px-10 py-1.5 text-xs text-teal-900/70 bg-beige">
        <a href={site.phoneHref} className="hover:text-teal">{site.phone}</a>
        <a href={site.whatsappHref} target="_blank" className="hover:text-teal">WhatsApp</a>
        <span>{site.city}</span>
      </div>

      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-10 h-16 md:h-[72px]">
        <Link href="/" className="flex items-center" aria-label="Archicraft Interiors â€” Home">
          <img
            src="/images/archicraft-logo.png"
            alt="Archicraft Interiors"
            width={180}
            height={51}
           
            className="h-8 sm:h-10 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {primaryNav.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setServicesOpen(true)}
              onMouseLeave={() => item.children && setServicesOpen(false)}
            >
              <Link href={item.href} className="font-sans text-sm text-teal-900 hover:text-teal transition-colors">
                {item.label}
              </Link>
              {item.children && servicesOpen && (
                <div className="absolute top-full left-0 pt-4 w-64">
                  <div className="bg-warmwhite border border-softgrey rounded-lg shadow-lg p-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-2 text-sm text-teal-900 hover:text-teal hover:bg-beige rounded"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden md:inline-flex font-button font-semibold text-xs tracking-wide uppercase bg-gold text-teal-900 px-5 py-3 rounded hover:bg-gold-800 hover:text-warmwhite transition-colors"
          >
            Book Consultation
          </Link>
          <button
            aria-label="Toggle menu"
            className="lg:hidden text-teal-900"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>

    {/* Mobile full-screen drawer â€” rendered outside <header> so its `fixed`
        positioning is relative to the viewport, not the header's backdrop-blur
        containing block (backdrop-filter/transform/etc. on an ancestor breaks
        `position: fixed` children). */}
    {menuOpen && (
      <div className="lg:hidden fixed inset-0 top-16 bg-warmwhite z-40 overflow-y-auto">
        <nav className="flex flex-col px-6 py-6 gap-1">
          {primaryNav.map((item) => (
            <div key={item.label} className="border-b border-softgrey py-3">
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="font-display text-lg text-teal-900"
              >
                {item.label}
              </Link>
              {item.children && (
                <div className="mt-2 pl-3 flex flex-col gap-2">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setMenuOpen(false)}
                      className="text-sm text-teal-900/70"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 text-center font-button font-semibold text-sm uppercase bg-gold text-teal-900 px-5 py-4 rounded"
          >
            Book Consultation
          </Link>
        </nav>
      </div>
    )}
    </>
  );
}
