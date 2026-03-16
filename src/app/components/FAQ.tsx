"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "¿Trabajan con mi marca de auto?",
    a: "Sí, somos multimarca. Trabajamos con Mercedes-Benz, Audi, BMW, VW, Peugeot, Renault, Honda, Toyota, Ford, Chevrolet y más.",
  },
  {
    q: "¿Necesito turno previo?",
    a: "No es obligatorio, pero te recomendamos escribirnos por WhatsApp para coordinar y no esperar.",
  },
  {
    q: "¿Cuánto tarda un service completo?",
    a: "Entre 2 y 4 horas dependiendo del vehículo. Si necesita piezas especiales, te avisamos antes.",
  },
  {
    q: "¿Tienen garantía?",
    a: "Sí, todos nuestros trabajos tienen garantía en mano de obra y repuestos.",
  },
  {
    q: "¿Hacen trabajos de performance/competición?",
    a: "Sí, nos especializamos en chip tunning, instalación de componentes de competición y preparación de autos.",
  },
  {
    q: "¿Dónde están ubicados?",
    a: "Tenemos 2 sucursales: Ulrico Schmidl 6784 en Mataderos y Bufano 2073 en Liniers.",
  },
  {
    q: "¿Aceptan tarjeta?",
    a: "Sí, aceptamos todas las tarjetas de crédito y débito. También efectivo y transferencia.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-bg">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
              Dudas
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Preguntas <span className="text-primary">frecuentes</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`bg-surface border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? "border-primary/30" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-body font-medium text-sm sm:text-base text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[#9E9E9E] text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
