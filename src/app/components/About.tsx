import Image from "next/image";

const stats = [
  { value: "15+", label: "Años" },
  { value: "2", label: "Sucursales" },
  { value: "Miles", label: "Autos atendidos" },
  { value: "Multi", label: "Marca" },
];

const brands = [
  "Mercedes-Benz",
  "Audi",
  "Peugeot",
  "Renault",
  "Volkswagen",
  "BMW",
  "Porsche",
  "Honda",
];

export default function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
                Nosotros
              </span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold mb-6">
              Romo <span className="text-primary">Motorsport</span>
            </h2>

            <p className="text-[#B0B0B0] text-base sm:text-lg leading-relaxed mb-8">
              Somos un centro de servicio automotor con más de 15 años de
              experiencia en Mataderos y Liniers. Nos especializamos en mecánica
              general y performance para todas las marcas. Nuestro equipo
              trabaja con herramientas de última generación y repuestos de
              calidad para que tu auto rinda al máximo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-surface border border-border rounded-lg p-4 text-center"
                >
                  <span className="block font-heading text-2xl sm:text-3xl font-bold text-primary">
                    {stat.value}
                  </span>
                  <span className="text-[#9E9E9E] text-xs uppercase tracking-[0.1em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Brand badges */}
            <div className="flex flex-wrap gap-2">
              {brands.map((brand) => (
                <span
                  key={brand}
                  className="bg-surface border border-border text-[#9E9E9E] text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded-full"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border">
              <Image
                src="/images/frente-taller.jpg"
                alt="Frente del taller Romo Motorsport — Logos de marcas en fachada"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-3 -right-3 w-24 h-24 border-2 border-primary/20 rounded-xl -z-10" />
            <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-primary/10 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
