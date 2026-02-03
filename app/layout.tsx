import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

/* 👉 TU ID REAL DE GOOGLE TAG MANAGER */
const GTM_ID = "GTM-MLS7RSQJ";

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

  verification: {
    google: "QIbFo3yX6ULukp7NjI3IT_mlkHmOjO3zKABsgGCl1wU",
  },

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
      <head>
        {/* 🔥 Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');
          `}
        </Script>
      </head>

      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-slate-950 bg-[url('/Fondo1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed",
          inter.className
        )}
      >
        {/* 🔥 fallback noscript */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

