"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, XCircle, CheckCircle2, Zap, ShieldCheck, Download, ChevronRight, Lock, Terminal, Server, Briefcase, ListChecks, HelpCircle, PhoneCall, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const PagosInstantaneosLanding = () => {
  const [formData, setFormData] = React.useState({ nombre: "", correo: "", empresa: "" });
  const [status, setStatus] = React.useState({ loading: false, success: null as string | null, error: null as string | null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const dataToSend = { ...formData, mensaje: "LEAD MAGNET: Solicitud de Guía de Integración Wompi (Landing Pagos Instantáneos)" };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) throw new Error("Error en el servidor");

      window.dataLayer?.push({ event: "form_contact_success" });
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag('event', 'conversion', { 'send_to': 'AW-17918400821/qQEvCIClg_IbELWyloBC', 'value': 1.0, 'currency': 'COP' });
      }

      window.open("/guias/blueprint-wompi.pdf", "_blank");

      setStatus({ loading: false, success: "¡Guía desbloqueada! Se ha abierto el PDF en una nueva pestaña.", error: null });
      setFormData({ nombre: "", correo: "", empresa: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "No se pudo procesar la solicitud." });
    }
  };

  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-blue-600/15 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-10 w-fit">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        {/* 1. HERO SECTION */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-6 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Arquitectura FinTech Integrada con Wompi & Supabase
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Automatiza tus cobros y elimina las <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">conciliaciones manuales</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Recupera decenas de horas operativas a la semana. Conectamos la API de Wompi con bases de datos en tiempo real para aprobar transacciones e inventario sin intervención humana.
          </p>
          <a href="#lead-magnet" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:-translate-y-0.5">
            Descargar Blueprint de Integración <ChevronRight size={18} />
          </a>
        </section>

        {/* 2. TECH LOGOS */}
        <section className="mb-24 border-y border-white/10 py-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-xl text-white"><Zap className="text-amber-400" size={22} /> WOMPI</div>
            <div className="flex items-center gap-2 font-bold text-lg text-emerald-400"><Server size={20} /> Supabase</div>
            <div className="flex items-center gap-2 font-bold text-lg text-blue-400"><Lock size={20} /> SHA-256 Crypto</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Terminal size={20} /> Next.js</div>
          </div>
        </section>

        {/* 3. ARQUITECTURA */}
        <section className="mb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Seguridad Bancaria</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">Integridad Criptográfica Anti-Fraude</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Nuestra solución no confía en los datos recibidos del frontend. Cada transacción genera una firma SHA-256 inmutable e intercepta el webhook de confirmación en un servidor aislado.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5 font-mono text-xs shadow-2xl relative backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-slate-500 text-[10px]">wompi-webhook.ts</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p><span className="text-purple-400">const</span> hash = crypto.createHash(<span className="text-emerald-300">'sha256'</span>).update(data + secret).digest(<span className="text-emerald-300">'hex'</span>);</p>
              <div className="my-3 p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
                <span>[200 OK] Hash Validated</span>
                <span className="text-[10px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded">MATCH</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PAIN POINT COMPARISON */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">El costo del proceso manual vs. La arquitectura autónoma</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 border border-red-500/20 p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><XCircle className="text-red-400" /> Proceso Operativo Manual</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Verificación manual de comprobantes y pantallazos de WhatsApp.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Errores de digitación que generan descuadres contables.</li>
              </ul>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/40 p-8 rounded-3xl relative overflow-hidden backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><CheckCircle2 className="text-blue-400" /> Flujo Automático AurexCode</h3>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span> Aprobación instantánea en menos de 2 segundos vía Webhooks.</li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span> Sincronización automática de inventario y estado en Supabase.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 6. CASOS DE USO EMPRESARIALES */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4 text-blue-400">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Dónde aplica esta solución?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Casos de uso corporativos que transforman operaciones manuales en flujos 100% autónomos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Automatización de pagos recurrentes y suscripciones.",
              "Sincronización de datos transaccionales entre CRMs y ERPs.",
              "Integración de APIs bancarias sin exponer el frontend.",
              "Actualización automática de estado de pedidos (E-commerce).",
              "Validaciones criptográficas de transacciones anti-spoofing.",
              "Conciliación de carteras masivas sin intervención humana."
            ].map((uso, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-colors">
                <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">{uso}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. METODOLOGÍA DE TRABAJO */}
        <section className="mb-24 bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-4">Nuestra Metodología de Implementación</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Un proceso técnico estructurado en 4 fases para garantizar despliegues seguros y sin interrupciones operativas.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="relative">
              <div className="text-5xl font-black text-blue-500/20 absolute -top-4 -left-2 z-0">01</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diagnóstico</h3>
              <p className="text-xs text-slate-400 relative z-10">Auditoría del flujo actual, cuellos de botella y stack tecnológico de la empresa.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-blue-500/20 absolute -top-4 -left-2 z-0">02</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diseño</h3>
              <p className="text-xs text-slate-400 relative z-10">Creación de la arquitectura de microservicios, endpoints y esquema de base de datos.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-blue-500/20 absolute -top-4 -left-2 z-0">03</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Desarrollo</h3>
              <p className="text-xs text-slate-400 relative z-10">Programación de integraciones API, validaciones SHA-256 y pruebas de carga en Sandbox.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-blue-500/20 absolute -top-4 -left-2 z-0">04</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Despliegue</h3>
              <p className="text-xs text-slate-400 relative z-10">Pase a producción (Vercel/AWS), documentación técnica y monitoreo en tiempo real.</p>
            </div>
          </div>
        </section>

        {/* 8. PREGUNTAS FRECUENTES */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-2xl mb-4 text-slate-300">
              <HelpCircle size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "¿La solución es compatible con la API de Wompi y otros gateways?", a: "Sí, desarrollamos arquitecturas agnósticas que se integran nativamente con Wompi, Stripe, MercadoPago y otros proveedores mediante Webhooks seguros." },
              { q: "¿Cómo se asegura la integridad de los pagos frente a fraudes?", a: "Implementamos validación de firmas criptográficas (SHA-256) en el servidor. El sistema recalcula el checksum de la transacción para garantizar que no fue manipulada en el frontend." },
              { q: "¿Se puede integrar con mi ERP, CRM o sistema actual?", a: "Absolutamente. Diseñamos microservicios en Node.js/.NET que actúan como middleware, actualizando tus sistemas legacy, bases de datos (SQL/NoSQL) o CRMs en tiempo real tras cada transacción." },
              { q: "¿Cuáles son los tiempos y costos de implementación?", a: "Los plazos varían entre 2 a 6 semanas dependiendo de la complejidad. El costo es por desarrollo (Software Propio), lo que significa que no pagas mensualidades ocultas ni tarifas por volumen de transacciones a AurexCode." }
            ].map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-slate-900/40 rounded-xl overflow-hidden backdrop-blur-sm">
                <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center group-open:text-blue-400 transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={18} className="group-open:rotate-180 transition-transform text-slate-500" />
                </summary>
                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 9. CIERRE COMERCIAL */}
        <section className="mb-24 bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(37,99,235,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          <PhoneCall size={40} className="mx-auto text-blue-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">¿Qué proceso de tu negocio te gustaría automatizar?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
            Cuéntanos tu cuello de botella actual. Agenda una auditoría técnica sin compromiso y descubre cómo una arquitectura robusta puede escalar tu facturación y reducir tu carga operativa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/#contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/25">
              Consultar mi proyecto
            </Link>
            <a href="#lead-magnet" className="w-full sm:w-auto bg-transparent border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all">
              Descargar guía técnica
            </a>
          </div>
        </section>

        {/* 5. LEAD CAPTURE FORM (LEAD MAGNET) */}
        <section id="lead-magnet" className="max-w-3xl mx-auto bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden backdrop-blur-xl">
          <div className="text-center mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block mb-3">Recurso Técnico Gratuito</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Descarga el Blueprint de Integración</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Déjanos tu correo corporativo y abre de inmediato la guía técnica con la arquitectura completa.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre Completo" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Corporativo" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Nombre de tu Empresa" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            <button type="submit" disabled={status.loading} className={cn("w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2", status.loading ? "opacity-50" : "hover:scale-[1.01]")}>
              <Download size={18} /> {status.loading ? "Generando descarga..." : "Obtener Guía Técnica en PDF"}
            </button>
            {status.success && <p className="text-blue-400 text-sm font-bold text-center mt-4 bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">{status.success}</p>}
            {status.error && <p className="text-red-400 text-sm font-bold text-center mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">{status.error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
};

export default PagosInstantaneosLanding;