import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: { absolute: "Software para Asambleas de Propiedad Horizontal | Aurex" },
  description:
    "Asambleas de copropietarios virtuales e híbridas en Colombia: check-in con PIN, quórum por coeficiente en tiempo real, votaciones en vivo y acta en Excel.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "es_CO",
    title: "Software para Asambleas de Propiedad Horizontal | Aurex Assembly",
    description:
      "Registra, vota, modera el debate y descarga el acta de tu asamblea de copropietarios, sin filas ni planillas.",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
