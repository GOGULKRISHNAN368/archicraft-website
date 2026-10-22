import Button from "./Button";

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  primaryHref,
  secondaryCta,
  secondaryHref,
  videoSrc,
  imageSrc,
  imageAlt,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  primaryCta: string;
  primaryHref: string;
  secondaryCta?: string;
  secondaryHref?: string;
  videoSrc?: string;
  imageSrc?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative min-h-[max(480px,70vh)] sm:min-h-[max(560px,80vh)] flex items-end sm:items-center overflow-hidden bg-teal-900">
      {videoSrc ? (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-70"
          src={videoSrc}
          poster={imageSrc || "https://images.unsplash.com/photo-1699239116624-85268dce7377?fm=jpg&q=75&w=1920&auto=format&fit=crop"}
          autoPlay
          muted
          loop
          playsInline
        />
      ) : imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageSrc} alt={imageAlt || ""} className="absolute inset-0 w-full h-full object-cover opacity-70" />
      ) : (
        <div className="absolute inset-0 bg-teal/40" />
      )}
      <div className="absolute inset-0 bg-emerald-950/20 mix-blend-multiply" />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-teal-900/45 to-emerald-950/15" />

      <div className="relative z-10 max-w-content mx-auto px-4 sm:px-6 lg:px-10 py-12 sm:py-24 w-full">
        <div className="max-w-2xl">
          {eyebrow && <p className="font-accent italic text-base sm:text-lg mb-3">{eyebrow}</p>}
          <h1 className="font-display font-semibold text-[clamp(2.25rem,8vw,3rem)] leading-[1.06] tracking-[-0.025em] sm:text-[44px] lg:text-[52px] text-warmwhite sm:leading-tight sm:tracking-normal">
            {title}
          </h1>
          <p className="mt-4 max-w-xl text-[16px] leading-[1.6] text-warmwhite/90 sm:mt-6 sm:text-base sm:leading-relaxed">{subtitle}</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button to={primaryHref} className="w-full sm:w-auto min-h-[48px]">{primaryCta}</Button>
            {secondaryCta && secondaryHref && (
              <Button
                to={secondaryHref}
                variant="secondary"
                className="w-full sm:w-auto min-h-[48px] !border-warmwhite !text-warmwhite hover:!bg-warmwhite hover:!text-teal-900"
              >
                {secondaryCta}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
