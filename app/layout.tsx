import type { Metadata } from "next";
import { Inter } from "next/font/google"; // O la fuente que prefieras
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AurexCode | Desarrollo Web y Automatización Digital",
    template: "%s | AurexCode",
  },
  description:
    "Creamos landing pages, sitios web modernos y soluciones digitales optimizadas para captar clientes y escalar negocios.",
  keywords: [
    "desarrollo web",
    "landing pages",
    "agencia digital",
    "automatización digital",
    "experiencia de usuario",
    "n8n",
    "diseño web profesional",
    "soluciones tecnológicas",
  ],
  authors: [{ name: "AurexCode" }],
  creator: "AurexCode",
  metadataBase: new URL("https://aurexcode.com"),
  openGraph: {
    title: "AurexCode | Desarrollo Web y Soluciones Digitales",
    description:
      "Diseñamos y desarrollamos experiencias web modernas enfocadas en conversión y crecimiento digital.",
    url: "https://aurexcode.com",
    siteName: "AurexCode",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-slate-950 bg-[url('/Fondo1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed",
          inter.className
        )}
      >
        <Navbar />
        
        <main>{children}</main>

      </body>
      
    </html>
  );
}