import { MessageCircle, Car, CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Contactanos",
    description:
      "Escribinos por WhatsApp o llamanos. Contanos qué necesita tu auto.",
    icon: MessageCircle,
  },
  {
    number: "02",
    title: "Traé tu auto",
    description:
      "Acercate a cualquiera de nuestras 2 sucursales. Te damos diagnóstico sin cargo.",
    icon: Car,
  },
  {
    number: "03",
    title: "Retiralo listo",
    description:
      "Trabajo garantizado con repuestos de calidad. Tu auto como nuevo.",
    icon: CheckCircle2,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
              Proceso simple
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Cómo <span className="text-primary">funciona</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="relative text-center group">
                {/* Number + Icon */}
                <div className="relative inline-flex flex-col items-center mb-6">
                  <span className="font-heading text-6xl font-bold text-primary/10 absolute -top-4 group-hover:text-primary/20 transition-colors">
                    {step.number}
                  </span>
                  <div className="relative z-10 w-16 h-16 bg-bg border-2 border-primary/30 rounded-full flex items-center justify-center mt-4 group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/10 transition-all duration-300">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                <h3 className="font-heading text-xl uppercase tracking-[0.05em] font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-[#9E9E9E] text-sm leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
