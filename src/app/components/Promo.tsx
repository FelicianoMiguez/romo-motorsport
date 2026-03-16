import Image from "next/image";

export default function Promo() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a0a] via-[#1a0808] to-[#120606]" />

      {/* Left accent border */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 py-12 sm:py-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block bg-accent/10 text-accent font-body font-semibold uppercase tracking-[0.15em] text-xs px-4 py-1.5 rounded-full mb-4">
              Oferta destacada
            </span>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-[0.05em] font-bold mb-3">
              Service Completo con
              <br />
              <span className="text-primary">revisión de 25 puntos</span>
            </h2>

            <div className="flex items-baseline gap-3 justify-center lg:justify-start mb-4">
              <span className="font-heading text-4xl sm:text-5xl font-bold text-secondary">
                $180.000
              </span>
            </div>

            <p className="text-[#9E9E9E] text-sm sm:text-base mb-8 max-w-md mx-auto lg:mx-0">
              Incluye aceite + filtros + diagnóstico electrónico. Precio final,
              sin sorpresas.
            </p>

            <a
              href="https://wa.me/5491135755147?text=Hola!%20Quiero%20consultar%20por%20el%20service%20completo%20de%20%24180.000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-red-700 text-white font-body font-semibold uppercase tracking-[0.1em] text-sm px-8 py-3.5 rounded transition-all duration-200 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/25"
            >
              Reservá tu turno
            </a>
          </div>

          {/* Image */}
          <div className="flex-1 relative w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/nanobanana/promo-auto.png"
                alt="Service completo — Porsche Cayenne en taller"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#1a0a0a]/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
