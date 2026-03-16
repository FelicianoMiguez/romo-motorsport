# Romo Motorsport — Landing Page Project

## Proyecto
Landing page profesional para Romo Motorsport, taller mecánico con 2 sucursales en Buenos Aires.
Stack: Next.js 14 (App Router) + Tailwind CSS + Vercel.

## Datos del negocio
- **Nombre:** Romo Motorsport
- **Rubro:** Centro de servicio automotor — Mecánica general y performance
- **Sucursal 1:** Ulrico Schmidl 6784, Mataderos, CABA
- **Sucursal 2:** Bufano 2073, Liniers, CABA
- **Teléfonos:** 11 3575-5147 / 11 5228-7357
- **WhatsApp:** 5491135755147
- **Instagram:** @romo_motorsport_ar
- **Facebook:** /romomotorsport
- **Horarios:** Lunes a Viernes 8:30-18:00, Sábados 8:30-13:00

## Servicios y precios
1. **Pre-VTV** — Revisión completa antes de la VTV — $50.000
2. **Service completo** — Cambio de aceite + filtros + revisión — $180.000
3. **Frenos y suspensión** — Pastillas, discos, amortiguadores
4. **Escaneo electrónico** — Diagnóstico computarizado OBD2
5. **Neumáticos** — Alineación, balanceo, cambio
6. **Mecánica general** — Motor, embrague, distribución, performance

## Marcas que trabajan
Mercedes-Benz, Audi, Peugeot, Renault, Volkswagen, BMW, Porsche, Honda — multimarca

## Diseño
- **Tema:** Dark mode (fondo #0A0A0A, cards #161616, bordes #2A2A2A)
- **Color primario:** Rojo #E53935
- **Color secundario:** Naranja #FF6D00
- **Color acento:** Dorado #FFB300
- **WhatsApp verde:** #25D366
- **Tipografía headings:** Oswald (Google Fonts) — uppercase, letter-spacing 0.05em
- **Tipografía body:** Inter (Google Fonts) — weight 300/400/600
- **Estilo visual:** Automotriz premium, industrial oscuro, inspirado en talleres de alto nivel

## Imágenes — Carpeta `public/images/`
Copiar desde `romo-fotos/` a `public/images/`:

### Fotos reales del taller (8 archivos):
- `frente-taller.jpg` (138KB) — Fachada del taller: pared gris oscura, logos de marcas (Mercedes, Audi, VW, BMW, Peugeot, Renault), arte de velocímetro en portón → Sección ABOUT + LOCATIONS
- `galeria-1.jpg` (103KB) — Porsche Cayenne blanca en service, carrito azul de herramientas, elevador → GALLERY
- `galeria-2.jpg` (122KB) — Audi S3 blanco de noche frente al taller con branding Romo y lista de servicios → HERO principal
- `galeria-3.jpg` (202KB) — Kit de embrague: volante, disco, plato de presión sobre piso de concreto → GALLERY (expertise técnico)
- `galeria-4.jpg` (73KB) — Tablero VW Amarok, velocímetro/tacómetro iluminado → GALLERY (diagnóstico)
- `galeria-5.jpg` (90KB) — Herramientas: cargador Laser, set de tubos, gato rojo, piso de baldosas azules → GALLERY (equipamiento)
- `galeria-6.jpg` (109KB) — Honda Fit con capot abierto, motor visible, patente KWG-207 → GALLERY (mecánica general)
- `galeria-8.jpg` (171KB) — BMW 120 blanco con capot abierto, gabinete rojo de herramientas, piso damero gris → GALLERY (servicio premium)

### Imágenes generadas con NanoBanana IA (8 archivos, ~6MB cada una):
- `Nanobanana/hero-taller.jpg.png` — Hero: Audi blanco con luces encendidas en garage oscuro, logos Mercedes/VW en pared, carrito azul, elevador con auto azul. Estética cinematográfica.
- `Nanobanana/svc-prevtv.png` — Pre-VTV: Aceite siendo vertido con embudo naranja, filtros y botellas de sintético premium. Tono cálido.
- `Nanobanana/svc-service.png` — Service: Similar a prevtv pero con tono dorado/bronce, aceite vertiéndose en motor.
- `Nanobanana/svc-frenos.png` — Frenos: Disco de freno ventilado con caliper rojo, auto gris en elevador, herramientas.
- `Nanobanana/svc-scanner.png` — Escaneo: Tablet con gráficos de diagnóstico verde sobre volante, guantes negros, interior oscuro.
- `Nanobanana/svc-neumaticos.png` — Neumáticos: Rueda de aleación en alineador láser rojo, cubiertas apiladas atrás, piso gris.
- `Nanobanana/svc-mecanica.png` — Mecánica: Motor expuesto con poleas y correas de distribución, carrito azul de herramientas, auto en elevador atrás.
- `Nanobanana/promo-auto.png` — Promo: Porsche Cayenne blanca en garage industrial, capot abierto, carrito azul, iluminación profesional.

### Logo:
- `logo.png` (3.3MB) — Logo "Romo Motorsport" PNG transparente, letras cursivas rojas y blancas con borde negro

## Estructura de secciones
1. **NAV** — Logo + links internos + botón WhatsApp
2. **HERO** — `galeria-2.jpg` como bg (Audi S3 con branding), overlay oscuro, H1 + CTA WhatsApp
3. **SERVICIOS** — 6 cards con imágenes NanoBanana, nombre, descripción, precio si aplica, CTA individual
4. **PROMO** — Banner Pre-VTV $50.000 o Service $180.000, imagen `promo-auto.png`, CTA urgente
5. **ABOUT** — Historia del taller, `frente-taller.jpg`, años de experiencia, marcas que trabajan
6. **CÓMO FUNCIONA** — 3 pasos: Contactanos → Traé tu auto → Retiralo listo
7. **TESTIMONIOS** — 3-4 reviews reales con nombre y vehículo
8. **GALLERY** — Grid con 7 fotos reales (galeria-1 a galeria-6 + galeria-8), lightbox
9. **POR QUÉ ELEGIRNOS** — 4 diferenciadores con íconos
10. **FAQ** — Accordion con 6-8 preguntas frecuentes
11. **UBICACIONES** — 2 sucursales con Google Maps embebido, dirección, horarios
12. **CTA FINAL** — Último empujón + botón WhatsApp grande
13. **FOOTER** — Info, redes, crédito "Desarrollado por AutoAtención BA"
14. **WHATSAPP FLOTANTE** — Botón sticky bottom-right siempre visible

## SEO
- Title: "Romo Motorsport | Mecánica General y Performance en Buenos Aires"
- Meta description: "Taller mecánico especializado en Mataderos y Liniers. Service completo, frenos, suspensión, escaneo electrónico y pre-VTV. Más de X años de experiencia. Consultá por WhatsApp."
- Schema.org: AutoRepair + LocalBusiness
- Open Graph tags para compartir en redes
- Canonical URL

## Reglas de código
- Mobile first, responsive
- Optimizar imágenes con next/image (WebP automático)
- Lazy loading en gallery
- Scroll suave entre secciones
- Sin dependencias pesadas — solo lucide-react para íconos
- Animaciones sutiles con CSS (no Framer Motion)
- WhatsApp links con mensaje pre-armado por sección: `https://wa.me/5491135755147?text=Hola!%20Vi%20su%20página%20y%20quiero%20consultar%20por%20[SERVICIO]`
- Español rioplatense en todo el copy (voseo, directo, sin formalidades)
- Performance: Lighthouse 90+ en todas las métricas
