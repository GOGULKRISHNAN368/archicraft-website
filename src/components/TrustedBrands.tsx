export default function TrustedBrands() {
  return (
    <div className="relative flex h-[100px] w-full items-center justify-center overflow-hidden bg-[#F8F5EF] sm:h-[130px] md:h-[150px] lg:h-[160px]">
      {/* Mobile Image */}
      <img
        src="/images/trusted-brands-desktop.png"
        alt=""
        aria-hidden="true"
        className="absolute w-[160%] max-w-none mix-blend-multiply sm:hidden"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />
      
      {/* Desktop Image */}
      <img
        src="/images/trusted-brands-desktop.png"
        alt="Brands we trust"
        aria-hidden="true"
        className="absolute hidden w-full max-w-[1024px] mix-blend-multiply sm:block"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      {/* Screen reader text for accessibility */}
      <span className="sr-only">Materials and hardware brands we work with, including CenturyPly, Greenply, Greenlam, Advance Laminates, HÄFELE, Hettich, ebco, FABER, KAFF, and Greenlam MiCasa.</span>
    </div>
  );
}
