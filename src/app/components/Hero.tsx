import Image from "next/image";

const brands = [
  "Mercedes-Benz",
  "Audi",
  "VW",
  "BMW",
  "Peugeot",
  "Renault",
];

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] md:h-screen md:min-h-[700px] md:max-h-[1000px] flex items-center clip-diagonal">
      {/* Background Image */}
      <Image
        src="/images/nanobanana/hero-taller.jpg.png"
        alt="Romo Motorsport - Taller mecánico"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay — cinematic dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

      {/* Red accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/8 blur-[120px] rounded-full" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-24 sm:pt-32 md:pt-0">
        <div className="max-w-3xl">
          {/* Accent line */}
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-12 h-[2px] bg-primary" />
            <span className="text-primary font-body text-xs sm:text-sm uppercase tracking-[0.15em] font-medium">
              Romo Motorsport
            </span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl uppercase tracking-[0.05em] font-bold leading-[0.95] mb-4 sm:mb-6">
            Mecánica General
            <br />
            <span className="text-primary">y Performance</span>
          </h1>

          <p className="text-[#B0B0B0] text-sm sm:text-lg md:text-xl max-w-xl leading-relaxed mb-8 sm:mb-10 font-light">
            Centro de servicio automotor multimarca en Mataderos y Liniers. Más
            de 15 años cuidando tu auto.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a
              href="https://wa.me/5491135755147?text=Hola!%20Vi%20su%20p%C3%A1gina%20y%20quiero%20agendar%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-red-700 text-white font-body font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all duration-200 active:scale-95"
            >
              Agendá tu turno
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-body font-semibold uppercase tracking-[0.1em] text-xs sm:text-sm px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all duration-200 active:scale-95"
            >
              Ver servicios
            </a>
          </div>
        </div>

        {/* Brand logos */}
        <div className="mt-12 sm:mt-0 sm:absolute sm:bottom-12 md:bottom-16 sm:left-0 sm:right-0 sm:px-4 md:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 sm:gap-6 md:gap-10 opacity-40 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="font-heading text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/80 whitespace-nowrap"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
