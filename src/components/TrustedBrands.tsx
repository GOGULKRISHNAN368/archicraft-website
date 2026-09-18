export default function TrustedBrands() {
  return (
    <div className="w-full h-[100px] sm:h-[130px] md:h-[150px] lg:h-[160px] bg-[#F8F5EF] relative overflow-hidden flex items-center justify-center">
      {/* Mobile Image */}
      <img
        src="/images/trusted-brands-mobile.png"
        alt="Brands we trust"
        aria-hidden="true"
        className="absolute w-[160%] max-w-none sm:hidden"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      
      {/* Desktop Image */}
      <img
        src="/images/trusted-brands-desktop.png"
        alt="Brands we trust"
        aria-hidden="true"
        className="hidden sm:block absolute w-full max-w-[1920px]"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Screen reader text for accessibility */}
      <span className="sr-only">Materials and hardware brands we work with, including CenturyPly, Greenply, Greenlam, Advance Laminates, HÄFELE, Hettich, ebco, FABER, KAFF, and Greenlam MiCasa.</span>
    </div>
  );
}
