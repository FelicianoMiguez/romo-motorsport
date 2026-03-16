import Image from "next/image";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.png"
              alt="Romo Motorsport"
              width={180}
              height={50}
              className="mb-4"
            />
            <p className="text-[#9E9E9E] text-sm leading-relaxed">
              Centro de servicio automotor multimarca con más de 15 años de
              experiencia en Buenos Aires. Mecánica general y performance.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-heading uppercase text-sm tracking-[0.1em] text-white mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Servicios", href: "#servicios" },
                { label: "Nosotros", href: "#nosotros" },
                { label: "Galería", href: "#galeria" },
                { label: "Ubicaciones", href: "#ubicaciones" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#9E9E9E] hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-heading uppercase text-sm tracking-[0.1em] text-white mb-4">
              Contacto
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+5491135755147"
                  className="text-[#9E9E9E] hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  11 3575-5147
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491152287357"
                  className="text-[#9E9E9E] hover:text-primary transition-colors text-sm flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  11 5228-7357
                </a>
              </li>
              <li className="flex items-start gap-2 text-[#9E9E9E] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Ulrico Schmidl 6784, Mataderos</span>
              </li>
              <li className="flex items-start gap-2 text-[#9E9E9E] text-sm">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                <span>Bufano 2073, Liniers</span>
              </li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <h4 className="font-heading uppercase text-sm tracking-[0.1em] text-white mb-4">
              Seguinos
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/romo_motorsport_ar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-[#9E9E9E] hover:text-primary hover:border-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/romomotorsport"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-surface border border-border rounded-lg flex items-center justify-center text-[#9E9E9E] hover:text-primary hover:border-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9E9E9E] text-xs">
            © 2025 Romo Motorsport. Todos los derechos reservados.
          </p>
          <p className="text-[#9E9E9E] text-xs">
            Desarrollado por{" "}
            <a
              href="#"
              className="text-primary hover:text-primary/80 transition-colors"
            >
              AutoAtención BA
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
