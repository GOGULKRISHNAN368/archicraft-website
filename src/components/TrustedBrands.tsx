export default function TrustedBrands() {
  return (
    <picture className="w-full block leading-none">
      <source
        media="(max-width: 767px)"
        srcSet="/images/trusted-brands-mobile.png"
      />
      <img
        src="/images/trusted-brands-desktop.png"
        alt="Materials and hardware brands we work with"
        className="w-full h-auto object-cover block m-0 p-0"
      />
    </picture>
  );
}
