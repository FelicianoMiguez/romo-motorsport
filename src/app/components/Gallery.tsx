"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const photos = [
  { src: "/images/galeria-1.jpg", alt: "Service Porsche Cayenne" },
  { src: "/images/galeria-2.jpg", alt: "Romo Motorsport — Audi S3" },
  { src: "/images/galeria-3.jpg", alt: "Kit de embrague completo" },
  { src: "/images/galeria-8.jpg", alt: "Service BMW 120" },
  { src: "/images/galeria-6.jpg", alt: "Mecánica Honda Fit" },
  { src: "/images/galeria-5.jpg", alt: "Herramientas profesionales" },
  { src: "/images/galeria-4.jpg", alt: "Diagnóstico instrumental" },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const touchStart = useRef<number | null>(null);

  const close = useCallback(() => setLightbox(null), []);
  const prev = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? (i - 1 + photos.length) % photos.length : null
      ),
    []
  );
  const next = useCallback(
    () =>
      setLightbox((i) => (i !== null ? (i + 1) % photos.length : null)),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, close, prev, next]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) prev();
      else next();
    }
    touchStart.current = null;
  };

  return (
    <section id="galeria" className="py-16 sm:py-20 md:py-28 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
              Trabajos
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Nuestra <span className="text-primary">Galería</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setLightbox(i)}
              className={`group relative rounded-lg sm:rounded-xl overflow-hidden border border-border hover:border-primary/30 transition-all cursor-pointer ${
                i === 0 ? "col-span-2 row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  i === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 50vw"
                      : "(max-width: 768px) 50vw, 25vw"
                  }
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <p className="w-full p-2 sm:p-3 text-white text-[10px] sm:text-xs md:text-sm font-body font-medium translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {photo.alt}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={close}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Close */}
          <button
            onClick={close}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-10"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Image */}
          <div
            className="relative w-[94vw] h-[70vh] sm:w-[90vw] sm:h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightbox].src}
              alt={photos[lightbox].alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
            <p className="absolute bottom-4 left-0 right-0 text-center text-white text-xs sm:text-sm font-body">
              {photos[lightbox].alt}
            </p>
          </div>

          {/* Counter */}
          <p className="absolute bottom-4 left-0 right-0 text-center text-white/50 text-xs">
            {lightbox + 1} / {photos.length}
          </p>
        </div>
      )}
    </section>
  );
}
