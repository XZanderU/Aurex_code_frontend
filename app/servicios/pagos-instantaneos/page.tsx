import Link from "next/link";
import { ArrowLeft, XCircle, CheckCircle2, Zap, ShieldCheck, Download, ChevronRight } from "lucide-react";

export default function PagosInstantaneosLanding() {
  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
      {/* Fondo decorativo opcional para la paleta azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-12 w-fit"
        >
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>

        {/* 1. HERO SECTION */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-6">
            <Zap size={16} /> Solución FinTech B2B
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Automatiza tus cobros y elimina las <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">conciliaciones manuales</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Recupera horas de trabajo operativo. Integramos flujos de pago directos con la API de Wompi para aprobar transacciones en tiempo real, sin intervención humana.
          </p>
          <a 
            href="#lead-magnet" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Descargar Arquitectura de Pagos <ChevronRight size={20} />
          </a>
        </section>

        {/* 2. PAIN POINT SECTION (Comparativa) */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center text-white mb-12">El costo de operar en el pasado vs. El ecosistema autónomo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Problema */}
            <div className="bg-slate-900/50 border border-red-900/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50" />
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <XCircle className="text-red-400" /> El Proceso Manual (Dolor)
              </h3>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Pérdida de tiempo verificando pantallazos de WhatsApp (Nequi/DaviPlata).</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Errores humanos en la digitación que descuadran la contabilidad.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 mt-1">✗</span> Clientes frustrados esperando la confirmación manual de su compra.</li>
              </ul>
            </div>

            {/* Solución */}
            <div className="bg-blue-900/20 border border-blue-500/30 p-8 rounded-2xl backdrop-blur-sm relative overflow-hidden shadow-[0_0_30px_rgba(37,99,235,0.1)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-blue-500" />
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="text-blue-400" /> Ecosistema Aurex (Solución)
              </h3>
              <ul className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Confirmación instantánea vía Webhooks conectados a Supabase.</li>
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Base de datos y actualización de inventario en tiempo real.</li>
                <li className="flex items-start gap-3"><span className="text-blue-400 mt-1">✓</span> Experiencia de usuario sin fricción que aumenta la retención.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. FEATURES (Micro-frontends & Seguridad) */}
        <section className="mb-24 text-center">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 border border-white/5 rounded-xl bg-white/5">
              <Zap className="text-orange-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Velocidad Next.js</h3>
              <p className="text-sm text-slate-400">Arquitectura de micro-frontends renderizada en el servidor para tiempos de carga ultrarrápidos.</p>
            </div>
            <div className="p-6 border border-white/5 rounded-xl bg-white/5">
              <ShieldCheck className="text-blue-400 mx-auto mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Seguridad SHA-256</h3>
              <p className="text-sm text-slate-400">Firmas criptográficas inmutables que blindan cada transacción contra manipulaciones en el navegador.</p>
            </div>
          </div>
        </section>

        {/* 4. LEAD CAPTURE FORM (Lead Magnet) */}
        <section id="lead-magnet" className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Descarga el Blueprint de Integración</h2>
            <p className="text-slate-400 text-sm md:text-base">
              Déjanos tu correo corporativo y recibe de inmediato nuestra guía técnica detallando cómo estructuramos el bypass de RLS y la validación anti-spoofing con Wompi.
            </p>
          </div>

          <form className="relative z-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="sr-only">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Nombre Completo" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Correo Corporativo</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Correo Corporativo" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="company" className="sr-only">Empresa</label>
              <input 
                type="text" 
                id="company" 
                placeholder="Nombre de tu Empresa" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <Download size={18} />
              Obtener Guía Gratuita
            </button>
            <p className="text-xs text-center text-slate-500 mt-4">
              Respetamos tu privacidad. No enviamos spam, solo código y arquitecturas de alto valor.
            </p>
          </form>
        </section>

      </div>
    </main>
  );
}