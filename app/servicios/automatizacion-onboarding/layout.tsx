import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Automatización de Procesos y Onboarding B2B | AurexCode" },
  description:
    "Unifica tu CRM, nómina y accesos con microservicios en Node.js, REST y webhooks. Solicita una auditoría de procesos gratuita.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Automatización de Procesos y Onboarding B2B | AurexCode",
    description:
      "Elimina los silos de información: conectamos tus herramientas para automatizar accesos, datos y notificaciones sin intervención manual.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatización de procesos y onboarding empresarial",
  serviceType: "Integración de CRM, nómina y accesos mediante microservicios",
  description:
    "Microservicios REST y orientados a eventos en Node.js que conectan CRM, sistemas de nómina y bases de datos para automatizar el aprovisionamiento de accesos y la sincronización de datos.",
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
