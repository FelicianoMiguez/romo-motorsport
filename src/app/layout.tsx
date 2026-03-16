import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://romomotorsport.com.ar"),
  title: "Romo Motorsport | Mecánica General y Performance en Buenos Aires",
  description:
    "Taller mecánico especializado en Mataderos y Liniers. Service completo desde $180.000, pre-VTV $50.000, frenos, suspensión, escaneo electrónico. Consultá por WhatsApp.",
  keywords:
    "taller mecánico buenos aires, mecánica general mataderos, service automotor liniers, pre vtv, frenos, suspensión, escaneo electrónico, performance, chip tunning",
  openGraph: {
    title: "Romo Motorsport | Mecánica General y Performance",
    description:
      "Centro de servicio automotor multimarca. 2 sucursales en Buenos Aires.",
    images: ["/images/galeria-2.jpg"],
    locale: "es_AR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Romo Motorsport",
  description:
    "Centro de servicio automotor multimarca. Mecánica general y performance.",
  url: "https://romomotorsport.com.ar",
  telephone: ["+5491135755147", "+5491152287357"],
  openingHours: "Mo-Fr 08:30-18:00, Sa 08:30-13:00",
  image: "/images/galeria-2.jpg",
  priceRange: "$$",
  location: [
    {
      "@type": "LocalBusiness",
      name: "Romo Motorsport — Mataderos",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ulrico Schmidl 6784",
        addressLocality: "Mataderos",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
      telephone: "+5491135755147",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.6583,
        longitude: -58.5089,
      },
    },
    {
      "@type": "LocalBusiness",
      name: "Romo Motorsport — Liniers",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bufano 2073",
        addressLocality: "Liniers",
        addressRegion: "CABA",
        addressCountry: "AR",
      },
      telephone: "+5491152287357",
      geo: {
        "@type": "GeoCoordinates",
        latitude: -34.6444,
        longitude: -58.5258,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
