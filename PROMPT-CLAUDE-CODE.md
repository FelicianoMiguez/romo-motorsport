# PROMPT PARA PEGAR EN CLAUDE CODE

> Copiá todo lo que está abajo de la línea y pegalo en Claude Code como un solo mensaje.

---

Creame una landing page profesional para **Romo Motorsport**, un taller mecánico en Buenos Aires con 2 sucursales. Leé el archivo CLAUDE.md que tiene todos los datos del negocio, diseño, imágenes y estructura.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS
- Google Fonts: Oswald (headings) + Inter (body)
- Lucide React para íconos
- Deploy en Vercel

## Estructura del proyecto

```
romo-motorsport/
├── public/
│   └── images/          ← Copiar todas las fotos de romo-fotos/ acá
│       ├── frente-taller.jpg
│       ├── galeria-1.jpg
│       ├── galeria-2.jpg
│       ├── galeria-3.jpg
│       ├── galeria-4.jpg
│       ├── galeria-5.jpg
│       ├── galeria-6.jpg
│       ├── galeria-8.jpg
│       ├── logo.png
│       └── nanobanana/
│           ├── hero-taller.jpg.png
│           ├── svc-prevtv.png
│           ├── svc-service.png
│           ├── svc-frenos.png
│           ├── svc-scanner.png
│           ├── svc-neumaticos.png
│           ├── svc-mecanica.png
│           └── promo-auto.png
├── src/
│   └── app/
│       ├── layout.tsx
│       ├── page.tsx
│       ├── globals.css
│       └── components/
│           ├── Navbar.tsx
│           ├── Hero.tsx
│           ├── Services.tsx
│           ├── Promo.tsx
│           ├── About.tsx
│           ├── HowItWorks.tsx
│           ├── Testimonials.tsx
│           ├── Gallery.tsx
│           ├── WhyUs.tsx
│           ├── FAQ.tsx
│           ├── Locations.tsx
│           ├── CTAFinal.tsx
│           ├── Footer.tsx
│           └── WhatsAppFloat.tsx
├── CLAUDE.md
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Diseño visual

**Dark mode automotriz premium:**
- Background: #0A0A0A
- Cards/superficies: #161616 con border #2A2A2A
- Color primario: Rojo #E53935 (CTAs principales, acentos)
- Color secundario: Naranja #FF6D00 (highlights, precios)
- Color acento: Dorado #FFB300 (estrellas, badges)
- WhatsApp: #25D366
- Texto principal: #F5F5F5
- Texto secundario: #9E9E9E

**Tipografía:**
- Headings: Oswald, uppercase, font-weight 700, letter-spacing 0.05em
- Body: Inter, font-weight 300/400, line-height 1.7
- CTAs: Inter, font-weight 600, uppercase, letter-spacing 0.1em

## Secciones detalladas

### 1. NAVBAR
- Logo Romo Motorsport (usar `logo.png`, fallback texto)
- Links: Servicios | Nosotros | Galería | Ubicaciones | Contacto
- Botón "CONSULTÁ AHORA" → WhatsApp
- Sticky on scroll con backdrop-blur, bg transparente que se oscurece al scrollear
- Hamburger menu en mobile

### 2. HERO
- Imagen de fondo: `galeria-2.jpg` (Audi S3 de noche con branding Romo) con overlay gradient oscuro (de negro 80% arriba a negro 60% abajo)
- Si existe `nanobanana/hero-taller.jpg.png`, usarla como alternativa (NOTA: el archivo tiene doble extensión .jpg.png, es intencional)
- H1: "MECÁNICA GENERAL Y PERFORMANCE"
- Subtítulo: "Centro de servicio automotor multimarca en Mataderos y Liniers. Más de 15 años cuidando tu auto."
- CTA principal: "AGENDÁ TU TURNO" → WhatsApp con mensaje "Hola! Vi su página y quiero agendar un turno"
- CTA secundario: "VER SERVICIOS" → scroll a sección servicios
- Badges abajo del hero: logos de marcas que trabajan (Mercedes, Audi, VW, BMW, Peugeot, Renault) en fila, opacity 0.6
- Altura: 100vh en desktop, 85vh en mobile

### 3. SERVICIOS (6 cards en grid 3x2 desktop, 1 col mobile)
Cada card tiene:
- Imagen de fondo (NanoBanana): usar `nanobanana/svc-[nombre].png`
- Si la imagen NanoBanana no existe, usar un gradient oscuro con ícono de Lucide
- Nombre del servicio (Oswald uppercase)
- Descripción corta (2 líneas)
- Precio si aplica
- Botón "CONSULTAR" → WhatsApp con mensaje específico por servicio

Cards:
1. **PRE-VTV** | Revisión integral para pasar la VTV a la primera. Frenos, luces, dirección, suspensión y emisiones. | $50.000 | Ícono: ClipboardCheck
2. **SERVICE COMPLETO** | Cambio de aceite y filtros, revisión de 25 puntos, diagnóstico electrónico incluido. | $180.000 | Ícono: Wrench
3. **FRENOS Y SUSPENSIÓN** | Cambio de pastillas, discos, amortiguadores. Garantía en repuestos y mano de obra. | Consultar | Ícono: ShieldCheck
4. **ESCANEO ELECTRÓNICO** | Diagnóstico computarizado OBD2. Lectura y borrado de códigos de error. | Consultar | Ícono: Monitor
5. **NEUMÁTICOS** | Alineación 3D, balanceo computarizado, cambio y rotación de cubiertas. | Consultar | Ícono: CircleDot
6. **MECÁNICA GENERAL** | Distribución, embrague, motor, caja. Especialistas en performance y competición. | Consultar | Ícono: Settings

### 4. PROMO BANNER
- Banner ancho completo con gradiente rojo oscuro
- Imagen `nanobanana/promo-auto.png` a un lado
- Texto: "SERVICE COMPLETO CON REVISIÓN DE 25 PUNTOS"
- Precio grande: "$180.000"
- Subtexto: "Incluye aceite + filtros + diagnóstico electrónico"
- CTA: "RESERVÁ TU TURNO" → WhatsApp
- Borde izquierdo dorado #FFB300 como acento

### 5. ABOUT (NOSOTROS)
- Layout: texto izquierda + imagen `frente-taller.jpg` derecha
- Título: "ROMO MOTORSPORT"
- Texto: "Somos un centro de servicio automotor con más de 15 años de experiencia en Mataderos y Liniers. Nos especializamos en mecánica general y performance para todas las marcas. Nuestro equipo trabaja con herramientas de última generación y repuestos de calidad para que tu auto rinda al máximo."
- Stats debajo: "15+ años" | "2 sucursales" | "Miles de autos atendidos" | "Multimarca"
- Logos de marcas como badges: Mercedes, Audi, Peugeot, Renault, VW, BMW

### 6. CÓMO FUNCIONA (3 pasos)
- Layout: 3 columnas con íconos grandes y números
- Paso 1: "CONTACTANOS" — "Escribinos por WhatsApp o llamanos. Contanos qué necesita tu auto." (Ícono: MessageCircle)
- Paso 2: "TRAÉ TU AUTO" — "Acercate a cualquiera de nuestras 2 sucursales. Te damos diagnóstico sin cargo." (Ícono: Car)
- Paso 3: "RETIRALO LISTO" — "Trabajo garantizado con repuestos de calidad. Tu auto como nuevo." (Ícono: CheckCircle2)
- Línea conectora entre los pasos (en desktop)

### 7. TESTIMONIOS
- Carousel o grid de 4 testimonios
- Cada uno: "texto review" + nombre + vehículo + estrellas (5 doradas #FFB300)
- Reviews:
  1. "Llevé mi Audi A3 para un service completo y quedé impresionado. Rápidos, prolijos y a buen precio. 100% recomendable." — Martín R. | Audi A3
  2. "Me prepararon el auto para la VTV y pasé a la primera. Excelente atención y te explican todo lo que hacen." — Carolina S. | VW Golf
  3. "Los llevo a mi BMW hace 3 años. Conocen bien la marca y siempre me dan presupuesto antes de arrancar." — Diego L. | BMW 120
  4. "Necesitaba cambiar embrague y distribución. Precio justo y lo tuvieron listo en 2 días. Muy profesionales." — Lucía M. | Peugeot 208
- Nota: rating Facebook "100% recomendado" como badge

### 8. GALLERY
- Grid responsive: 4 columnas desktop, 2 mobile
- Todas las fotos reales con next/image optimizado
- Hover: leve zoom + overlay con descripción
- Lightbox al clickear (modal con imagen grande)
- Fotos en orden (7 fotos):
  1. galeria-1.jpg — "Service Porsche Cayenne"
  2. galeria-2.jpg — "Romo Motorsport — Audi S3"
  3. galeria-3.jpg — "Kit de embrague completo"
  4. galeria-8.jpg — "Service BMW 120"
  5. galeria-6.jpg — "Mecánica Honda Fit"
  6. galeria-5.jpg — "Herramientas profesionales"
  7. galeria-4.jpg — "Diagnóstico instrumental"

### 9. POR QUÉ ELEGIRNOS
- 4 cards con ícono + título + descripción
  1. **Experiencia** — Más de 15 años en el rubro automotor. (Ícono: Award)
  2. **Multimarca** — Trabajamos con todas las marcas: europeas, japonesas y nacionales. (Ícono: Car)
  3. **Diagnóstico sin cargo** — Te decimos qué tiene tu auto antes de presupuestar. (Ícono: Search)
  4. **Garantía** — Garantía en mano de obra y repuestos en todos los trabajos. (Ícono: Shield)

### 10. FAQ
- Accordion expandible, 7 preguntas:
  1. "¿Trabajan con mi marca de auto?" → "Sí, somos multimarca. Trabajamos con Mercedes-Benz, Audi, BMW, VW, Peugeot, Renault, Honda, Toyota, Ford, Chevrolet y más."
  2. "¿Necesito turno previo?" → "No es obligatorio, pero te recomendamos escribirnos por WhatsApp para coordinar y no esperar."
  3. "¿Cuánto tarda un service completo?" → "Entre 2 y 4 horas dependiendo del vehículo. Si necesita piezas especiales, te avisamos antes."
  4. "¿Tienen garantía?" → "Sí, todos nuestros trabajos tienen garantía en mano de obra y repuestos."
  5. "¿Hacen trabajos de performance/competición?" → "Sí, nos especializamos en chip tunning, instalación de componentes de competición y preparación de autos."
  6. "¿Dónde están ubicados?" → "Tenemos 2 sucursales: Ulrico Schmidl 6784 en Mataderos y Bufano 2073 en Liniers."
  7. "¿Aceptan tarjeta?" → "Sí, aceptamos todas las tarjetas de crédito y débito. También efectivo y transferencia."

### 11. UBICACIONES
- 2 columnas, una por sucursal
- Cada una: nombre sucursal, dirección, teléfono clickeable, horarios, Google Maps iframe embebido
- Sucursal 1: Ulrico Schmidl 6784, Mataderos — Tel: 11 3575-5147
- Sucursal 2: Bufano 2073, Liniers — Tel: 11 5228-7357
- Horarios: Lun-Vie 8:30-18:00 | Sáb 8:30-13:00
- Botón "CÓMO LLEGAR" → Google Maps directions

### 12. CTA FINAL
- Sección full-width con gradiente rojo oscuro
- Título: "¿TU AUTO NECESITA ATENCIÓN?"
- Subtítulo: "Escribinos ahora y coordinamos tu turno. Diagnóstico sin cargo."
- Botón grande: "HABLAR POR WHATSAPP" → wa.me link
- Teléfono visible y clickeable

### 13. FOOTER
- Logo + descripción corta
- Links rápidos: Servicios | Nosotros | Galería | Ubicaciones
- Contacto: teléfonos, email, direcciones
- Redes: Instagram @romo_motorsport_ar | Facebook /romomotorsport
- Crédito: "Desarrollado por AutoAtención BA" con link
- Copyright 2025 Romo Motorsport

### 14. WHATSAPP FLOTANTE
- Botón circular verde #25D366, 60px, bottom-right, z-50
- Ícono WhatsApp blanco
- Pulse animation sutil
- onClick → `https://wa.me/5491135755147?text=Hola!%20Vi%20su%20p%C3%A1gina%20web%20y%20quiero%20hacer%20una%20consulta`
- Tooltip "¡Escribinos!" que aparece brevemente al cargar

## SEO y metadata

```tsx
// layout.tsx metadata
export const metadata = {
  title: "Romo Motorsport | Mecánica General y Performance en Buenos Aires",
  description: "Taller mecánico especializado en Mataderos y Liniers. Service completo desde $180.000, pre-VTV $50.000, frenos, suspensión, escaneo electrónico. Consultá por WhatsApp.",
  keywords: "taller mecánico buenos aires, mecánica general mataderos, service automotor liniers, pre vtv, frenos, suspensión, escaneo electrónico, performance, chip tunning",
  openGraph: {
    title: "Romo Motorsport | Mecánica General y Performance",
    description: "Centro de servicio automotor multimarca. 2 sucursales en Buenos Aires.",
    images: ["/images/galeria-2.jpg"],
    locale: "es_AR",
    type: "website"
  }
}
```

Agregar JSON-LD Schema.org con type AutoRepair + LocalBusiness para ambas sucursales.

## Rendimiento
- Usá next/image para TODAS las imágenes (optimización automática WebP + lazy load)
- Fonts con next/font/google
- CSS animations solo con Tailwind (animate-pulse para WhatsApp, hover:scale para cards)
- No Framer Motion ni librerías de animación
- Target: Lighthouse 90+ en Performance, Accessibility, SEO

## Notas importantes
- TODO el texto en español rioplatense (voseo: "consultá", "escribinos", "traé")
- WhatsApp links con mensaje pre-armado diferente por sección
- Los precios son en pesos argentinos, formatear con punto de miles
- Si alguna imagen NanoBanana no existe, usar gradient oscuro + ícono de Lucide como fallback
- Priorizar mobile: el 80% del tráfico va a ser mobile
- Smooth scroll entre secciones con scroll-behavior: smooth
- Cada sección con id para navegación interna (#servicios, #nosotros, #galeria, etc.)
