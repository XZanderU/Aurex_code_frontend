import Link from "next/link";
import { BookOpen, ArrowLeft } from "lucide-react";

export default function Wiki() {
  return (
    <main className="min-h-screen bg-slate-950 bg-[url('/tu-imagen-de-fondo.jpg')] bg-cover bg-fixed bg-center text-slate-200">
      <div className="min-h-screen bg-blue-950/80 backdrop-blur-sm px-6 py-12 md:px-20">
        
        {/* Navegación superior */}
        <nav className="mb-12 flex items-center justify-between">
          <Link 
            href="/#hero" 
            className="flex items-center gap-2 text-sm font-medium text-blue-400 transition hover:text-blue-300"
          >
            <ArrowLeft size={16} />
            Volver al inicio
          </Link>
          <div className="flex items-center gap-2">
            <BookOpen className="text-blue-500" />
            <span className="text-lg font-bold text-white">AurexCode Docs</span>
          </div>
        </nav>

        {/* Contenido de la Wiki */}
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/10 bg-slate-900/50 p-8 shadow-2xl">
          <h1 className="mb-6 text-3xl font-extrabold text-white">
            Documentación Técnica y QA
          </h1>
          <p className="mb-8 text-slate-300 leading-relaxed">
            Bienvenido al espacio de documentación. Aquí detallo la arquitectura, 
            procesos de pruebas y despliegue continuo de los servicios de AurexCode.
          </p>

          {/* Lista de Artículos / Secciones */}
          <div className="grid gap-4 md:grid-cols-2">
            <Link href="/wiki/chatbot-ai" className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/50 hover:bg-white/10">
              <h2 className="mb-2 text-lg font-semibold text-blue-100 group-hover:text-blue-400">
                Integración de IA con Vercel SDK
              </h2>
              <p className="text-sm text-slate-400">
                Arquitectura del chatbot, manejo de streams y prevención de errores 500 en producción.
              </p>
            </Link>

            <Link href="/wiki/qa-contact-form" className="group rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-blue-500/50 hover:bg-white/10">
              <h2 className="mb-2 text-lg font-semibold text-blue-100 group-hover:text-blue-400">
                Auditoría QA: Formulario de Contacto
              </h2>
              <p className="text-sm text-slate-400">
                Análisis de peticiones HTTP, desincronización de ramas en Git y despliegue seguro.
              </p>
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}