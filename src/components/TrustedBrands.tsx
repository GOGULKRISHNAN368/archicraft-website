export default function TrustedBrands() {
  const brands = [
    "CenturyPly", "Greenply", "Greenlam", "Advance Laminates", 
    "HÄFELE", "Hettich", "ebco", "FABER", "KAFF", "Greenlam MiCasa"
  ];

  return (
    <div className="relative w-full min-h-[300px] sm:min-h-[220px] bg-[#F7F4EF] flex flex-col justify-center overflow-hidden border-y border-[rgba(7,63,58,0.1)]">
      {/* Generated Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-[url('/images/trusted-brands-bg.jpg')] bg-cover bg-center opacity-80"
        aria-hidden="true"
      ></div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1450px] mx-auto px-4 sm:px-8 lg:px-[60px] py-8 sm:py-12 flex flex-col justify-center">
        
        {/* Top Text Row */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mb-8 gap-4 sm:gap-0">
          <div className="text-center sm:text-left text-[#6F7C78] text-[10px] sm:text-[11px] font-medium tracking-[2px] uppercase leading-relaxed">
            Thoughtful<br/>materials.<br/>Beautiful spaces.
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-12 h-px bg-[#C9A45C]"></div>
            <h3 className="font-display text-[#073F3A] text-lg sm:text-xl lg:text-2xl font-medium uppercase tracking-[2px] sm:tracking-[4px] text-center">
              Backed by names you already trust
            </h3>
            <div className="hidden sm:block w-12 h-px bg-[#C9A45C]"></div>
          </div>
          
          <div className="text-center sm:text-right text-[#6F7C78] text-[10px] sm:text-[11px] font-medium tracking-[2px] uppercase leading-relaxed">
            Built<br/>for a brighter<br/>tomorrow
          </div>
        </div>

        {/* Brands Row */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          {brands.map((brand, i) => (
            <div key={i} className="flex items-center gap-6 sm:gap-8 lg:gap-12">
              <span className="font-display font-semibold text-[#073F3A] text-sm sm:text-base lg:text-lg opacity-80">
                {brand}
              </span>
              {i < brands.length - 1 && (
                <div className="hidden sm:block w-px h-6 bg-[rgba(7,63,58,0.2)]"></div>
              )}
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
