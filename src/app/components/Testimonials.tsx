import { Star } from "lucide-react";

const reviews = [
  {
    text: "Llevé mi Audi A3 para un service completo y quedé impresionado. Rápidos, prolijos y a buen precio. 100% recomendable.",
    name: "Martín R.",
    vehicle: "Audi A3",
  },
  {
    text: "Me prepararon el auto para la VTV y pasé a la primera. Excelente atención y te explican todo lo que hacen.",
    name: "Carolina S.",
    vehicle: "VW Golf",
  },
  {
    text: "Los llevo a mi BMW hace 3 años. Conocen bien la marca y siempre me dan presupuesto antes de arrancar.",
    name: "Diego L.",
    vehicle: "BMW 120",
  },
  {
    text: "Necesitaba cambiar embrague y distribución. Precio justo y lo tuvieron listo en 2 días. Muy profesionales.",
    name: "Lucía M.",
    vehicle: "Peugeot 208",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-accent" />
            <span className="text-accent font-body text-sm uppercase tracking-[0.15em] font-medium">
              100% Recomendado
            </span>
            <div className="w-8 h-[2px] bg-accent" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Lo que dicen <span className="text-primary">nuestros clientes</span>
          </h2>
        </div>

        {/* Reviews — horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-2 lg:grid-cols-4 sm:gap-5 sm:overflow-visible sm:pb-0">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-bg border border-border rounded-xl p-5 sm:p-6 flex flex-col hover:border-accent/20 transition-colors min-w-[280px] sm:min-w-0 snap-center"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#B0B0B0] text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-body font-semibold text-sm text-white">
                  {review.name}
                </p>
                <p className="text-[#9E9E9E] text-xs">{review.vehicle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
