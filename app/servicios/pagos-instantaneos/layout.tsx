import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Automatiza Cobros con Wompi y Supabase | AurexCode" },
  description:
    "Conecta la API de Wompi con Supabase en tiempo real: aprobación de pagos por webhook, validación SHA-256 y conciliación automática de inventario.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Automatiza Cobros con Wompi y Supabase | AurexCode",
    description:
      "Elimina las conciliaciones manuales: pagos aprobados por webhook, firma SHA-256 e inventario sincronizado sin intervención humana.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integración de pagos con Wompi y Supabase",
  serviceType: "Automatización de cobros y conciliación de pagos",
  description:
    "Integración de la API de Wompi con bases de datos en tiempo real, con validación criptográfica SHA-256 de cada transacción y sincronización automática de inventario.",
  areaServed: "CO",
  inLanguage: "es-CO",
  provider: { "@type": "Organization", name: "AurexCode" },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      {children}
    </>
  );
}
