import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const locations = [
  {
    name: "Mataderos",
    address: "Ulrico Schmidl 6784",
    locality: "Mataderos, CABA",
    phone: "11 3575-5147",
    phoneLink: "+5491135755147",
    mapQuery: "Ulrico+Schmidl+6784+Mataderos+Buenos+Aires",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Ulrico+Schmidl+6784+Mataderos+Buenos+Aires",
  },
  {
    name: "Liniers",
    address: "Bufano 2073",
    locality: "Liniers, CABA",
    phone: "11 5228-7357",
    phoneLink: "+5491152287357",
    mapQuery: "Bufano+2073+Liniers+Buenos+Aires",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Bufano+2073+Liniers+Buenos+Aires",
  },
];

export default function Locations() {
  return (
    <section id="ubicaciones" className="py-16 sm:py-20 md:py-28 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary font-body text-sm uppercase tracking-[0.15em] font-medium">
              Dónde estamos
            </span>
            <div className="w-8 h-[2px] bg-primary" />
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.05em] font-bold">
            Nuestras <span className="text-primary">Sucursales</span>
          </h2>
        </div>

        {/* Location cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {locations.map((loc) => (
            <div
              key={loc.name}
              className="bg-bg border border-border rounded-xl overflow-hidden"
            >
              {/* Map */}
              <div className="relative h-48 sm:h-64">
                <iframe
                  src={`https://maps.google.com/maps?q=${loc.mapQuery}&output=embed&z=16`}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa Romo Motorsport ${loc.name}`}
                  allowFullScreen
                />
              </div>

              {/* Info */}
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-xl uppercase tracking-[0.05em] font-bold mb-4">
                  Romo Motorsport —{" "}
                  <span className="text-primary">{loc.name}</span>
                </h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-[#B0B0B0] text-sm">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span>
                      {loc.address}, {loc.locality}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-[#B0B0B0] text-sm">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a
                      href={`tel:${loc.phoneLink}`}
                      className="hover:text-white transition-colors"
                    >
                      {loc.phone}
                    </a>
                  </div>
                  <div className="flex items-start gap-3 text-[#B0B0B0] text-sm">
                    <Clock className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <div>
                      <p>Lun - Vie: 8:30 - 18:00</p>
                      <p>Sáb: 8:30 - 13:00</p>
                    </div>
                  </div>
                </div>

                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-surface border border-border hover:border-primary/30 text-white font-body font-semibold uppercase tracking-[0.1em] text-xs px-6 py-3 rounded-lg transition-all duration-200 hover:bg-primary/5"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
