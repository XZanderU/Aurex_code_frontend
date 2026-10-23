import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Facturación Electrónica DIAN con Software Propio | AurexCode" },
  description:
    "Conecta tus ventas directo a la DIAN sin intermediarios: XML UBL 2.1 firmado, integración en C# .NET y sin mensualidades por factura emitida.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Facturación Electrónica DIAN con Software Propio | AurexCode",
    description:
      "Elimina la doble digitación y los sobrecostos por transacción con una integración fiscal propia desarrollada en C# .NET.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Integración de facturación electrónica con la DIAN",
  serviceType: "Desarrollo de software de facturación electrónica bajo el modelo Software Propio",
  description:
    "Desarrollo de la conexión directa de tu sistema de ventas con la DIAN: generación de XML UBL 2.1, firma digital con certificado y envío a la API, con arquitectura en C# .NET.",
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
