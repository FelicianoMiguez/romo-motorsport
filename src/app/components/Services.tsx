import Image from "next/image";
import {
  ClipboardCheck,
  Wrench,
  ShieldCheck,
  Monitor,
  CircleDot,
  Settings,
} from "lucide-react";

const services = [
  {
    name: "Pre-VTV",
    description:
      "Revisión integral para pasar la VTV a la primera. Frenos, luces, dirección, suspensión y emisiones.",
    price: "$50.000",
    icon: ClipboardCheck,
    image: "/images/nanobanana/svc-prevtv.png",
    waMsg: "Hola! Quiero consultar por el servicio de Pre-VTV",
  },
  {
    name: "Service Completo",
    description:
      "Cambio de aceite y filtros, revisión de 25 puntos, diagnóstico electrónico incluido.",
    price: "$180.000",
    icon: Wrench,
    image: "/images/nanobanana/svc-service.png",
    waMsg: "Hola! Quiero consultar por el Service Completo",
  },
  {
    name: "Frenos y Suspensión",
    description:
      "Cambio de pastillas, discos, amortiguadores. Garantía en repuestos y mano de obra.",
    price: "Consultar",
    icon: ShieldCheck,
    image: "/images/nanobanana/svc-frenos.png",
    waMsg: "Hola! Quiero consultar por Frenos y Suspensión",
  },
  {
    name: "Escaneo Electrónico",
    description:
      "Diagnóstico computarizado OBD2. Lectura y borrado de códigos de error.",
    price: "Consultar",
    icon: Monitor,
    image: "/images/nanobanana/svc-scanner.png",
    waMsg: "Hola! Quiero consultar por el Escaneo Electrónico",
  },
  {
    name: "Neumáticos",
    description:
      "Alineación 3D, balanceo computarizado, cambio y rotación de cubiertas.",
    price: "Consultar",
    icon: CircleDot,
    image: "/images/nanobanana/svc-neumaticos.png",
    waMsg: "Hola! Quiero consultar por el servicio de Neumáticos",
  },
  {
    name: "Mecánica General",
    description:
      "Distribución, embrague, motor, caja. Especialistas en performance y competición.",
    price: "Consultar",
    icon: Settings,
    image: "/images/nanobanana/svc-mecanica.png",
    waMsg: "Hola! Quiero consultar por Mecánica General",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 sm:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
              Qué hacemos
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.name}
                className="group relative rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 bg-surface"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />

                  {/* Price badge */}
                  <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm border border-border px-3 py-1 rounded-full">
                    <span
                      className={`font-heading text-sm font-bold ${
                        service.price !== "Consultar"
                          ? "text-secondary"
                          : "text-[#9E9E9E]"
                      }`}
                    >
                      {service.price}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-heading text-lg uppercase tracking-[0.05em] font-bold">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-[#9E9E9E] text-sm leading-relaxed mb-5 line-clamp-2">
                    {service.description}
                  </p>
                  <a
                    href={`https://wa.me/5491135755147?text=${encodeURIComponent(
                      service.waMsg
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-red-400 font-body font-semibold uppercase tracking-[0.1em] text-xs transition-colors"
                  >
                    Consultar
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
