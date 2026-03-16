import { Award, Car, Search, Shield } from "lucide-react";

const reasons = [
  {
    title: "Experiencia",
    description: "Más de 15 años en el rubro automotor.",
    icon: Award,
  },
  {
    title: "Multimarca",
    description:
      "Trabajamos con todas las marcas: europeas, japonesas y nacionales.",
    icon: Car,
  },
  {
    title: "Diagnóstico sin cargo",
    description: "Te decimos qué tiene tu auto antes de presupuestar.",
    icon: Search,
  },
  {
    title: "Garantía",
    description:
      "Garantía en mano de obra y repuestos en todos los trabajos.",
    icon: Shield,
  },
];

export default function WhyUs() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
              Diferenciadores
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Por qué <span className="text-primary">elegirnos</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="group bg-surface border border-border rounded-xl p-6 sm:p-8 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-lg uppercase tracking-[0.05em] font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-[#9E9E9E] text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
