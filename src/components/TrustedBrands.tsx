export default function TrustedBrands() {
  return (
    <div className="w-full h-[160px] sm:h-[190px] md:h-[210px] lg:h-[220px] bg-[#F7F4EF] relative overflow-hidden">
      {/* Mobile Background */}
      <div 
        className="absolute inset-0 sm:hidden bg-[url('/images/trusted-brands-mobile.png')] bg-cover bg-center"
        aria-hidden="true"
      ></div>
      
      {/* Desktop Background */}
      <div 
        className="hidden sm:block absolute inset-0 bg-[url('/images/trusted-brands-desktop.png')] bg-cover bg-center"
        aria-hidden="true"
      ></div>

      {/* Screen reader text for accessibility */}
      <span className="sr-only">Materials and hardware brands we work with, including CenturyPly, Greenply, Greenlam, Advance Laminates, HÄFELE, Hettich, ebco, FABER, KAFF, and Greenlam MiCasa.</span>
    </div>
  );
}
