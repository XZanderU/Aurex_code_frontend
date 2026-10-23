"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ChevronRight, SearchCheck, Webhook, Box, CloudCog, XCircle, CheckCircle2, Briefcase, HelpCircle, PhoneCall, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const AutomatizacionOnboardingLanding = () => {
  const [formData, setFormData] = React.useState({ nombre: "", correo: "", empresa: "" });
  const [status, setStatus] = React.useState({ loading: false, success: null as string | null, error: null as string | null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const dataToSend = { ...formData, mensaje: "AUDITORÍA: Solicitud de análisis de procesos (Landing Automatización y Onboarding)" };

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

      setStatus({ loading: false, success: "¡Auditoría solicitada! Nos pondremos en contacto contigo rápidamente para agendarla.", error: null });
      setFormData({ nombre: "", correo: "", empresa: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "No se pudo procesar la solicitud." });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
      {/* Luz ambiental Cyan */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-cyan-600/15 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors mb-10 w-fit">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        {/* 1. HERO SECTION */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold text-cyan-400 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Microservicios REST y Event-Driven
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Unifica tus herramientas y automatiza tus <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400">procesos más lentos</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Elimina los silos de información. Conectamos tu CRM, sistemas de nómina y accesos mediante microservicios en Node.js para escalar tu operación B2B de forma silenciosa e ininterrumpida.
          </p>
          <a href="#auditoria" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)] hover:-translate-y-0.5">
            Solicitar Auditoría de Procesos <ChevronRight size={18} />
          </a>
        </section>

        {/* 2. TECH LOGOS */}
        <section className="mb-24 border-y border-white/10 py-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-xl text-white"><Box size={22} className="text-green-500" /> Node.js</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><CloudCog size={20} className="text-blue-400" /> REST APIs</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Webhook size={20} className="text-cyan-400" /> Webhooks</div>
          </div>
        </section>

        {/* 3. MOCKUP Y CARACTERÍSTICAS */}
        <section className="mb-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-cyan-400 font-bold uppercase tracking-widest text-xs">Hiperautomatización</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">Sincronización Total sin Código</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Creamos puentes digitales entre tus herramientas favoritas. Cuando se firma un contrato o entra un lead, nuestros servicios despliegan accesos, actualizan bases de datos y notifican a tu equipo en milisegundos.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-slate-900/50 border border-cyan-500/20 p-4 rounded-xl">
                <div className="text-2xl font-black text-cyan-400 mb-1">0%</div>
                <p className="text-xs text-slate-400">Errores de digitación cruzada</p>
              </div>
              <div className="bg-slate-900/50 border border-blue-500/20 p-4 rounded-xl">
                <div className="text-2xl font-black text-blue-400 mb-1">24/7</div>
                <p className="text-xs text-slate-400">Ejecución ininterrumpida</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5 font-mono text-xs shadow-2xl relative backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-slate-500 text-[10px]">onboarding-workflow.ts</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p className="text-slate-500">// Evento de nuevo colaborador (WebHook CRM)</p>
              <p><span className="text-purple-400">const</span> employee = <span className="text-purple-400">await</span> CRM.getLead(req.body.id);</p>
              <br/>
              <p className="text-slate-500">// 1. Aprovisionamiento Automático en DB</p>
              <p><span className="text-purple-400">const</span> auth = <span className="text-purple-400">await</span> Supabase.admin.createUser({'{'}</p>
              <p className="pl-4">email: employee.email,</p>
              <p className="pl-4">password: generateTempToken(),</p>
              <p className="pl-4">role: <span className="text-cyan-300">"editor"</span></p>
              <p>{'}'});</p>
              <br/>
              <p className="text-slate-500">// 2. Notificación a Recursos Humanos</p>
              <p><span className="text-purple-400">await</span> Slack.notify(<span className="text-cyan-300">"#hr-alerts"</span>, `Nuevo acceso para ${'{employee.name}'}`);</p>

              <div className="my-3 p-2.5 rounded bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 flex items-center justify-between">
                <span>[SUCCESS] Flujo Ejecutado en 840ms</span>
                <span className="text-[10px] font-bold bg-cyan-500/20 px-2 py-0.5 rounded">NODE.JS RUNTIME</span>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PAIN POINT COMPARISON */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">El costo de las herramientas aisladas vs. Procesos conectados</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 border border-red-500/20 p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><XCircle className="text-red-400" /> Operación con Silos de Información</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Copiar y pegar datos manualmente entre el CRM, Excel y nómina.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Accesos y cuentas que tardan días en crearse tras firmar un contrato.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Información desactualizada y errores de digitación en cada herramienta.</li>
              </ul>
            </div>
            <div className="bg-cyan-900/20 border border-cyan-500/40 p-8 rounded-3xl relative overflow-hidden backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><CheckCircle2 className="text-cyan-400" /> Flujo Automático AurexCode</h3>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span> Datos sincronizados entre tus sistemas mediante Webhooks y REST APIs.</li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span> Accesos aprovisionados y equipo notificado en cuestión de milisegundos.</li>
                <li className="flex items-start gap-3"><span className="text-cyan-400 font-bold">✓</span> Ejecución ininterrumpida 24/7 sin intervención humana.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CASOS DE USO EMPRESARIALES */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-cyan-500/10 rounded-2xl mb-4 text-cyan-400">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Dónde aplica esta solución?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Casos de uso corporativos que transforman tareas repetitivas en flujos 100% autónomos.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Aprovisionamiento automático de accesos al firmar un contrato.",
              "Onboarding de nuevos colaboradores con alta de usuarios y roles.",
              "Sincronización de datos entre CRM, nómina y bases de datos.",
              "Notificaciones automáticas a Recursos Humanos y equipos por Slack.",
              "Captura y enrutamiento de leads desde formularios hacia tu CRM.",
              "Conexión de hojas de Excel y herramientas como HubSpot con tus sistemas."
            ].map((uso, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-cyan-500/30 transition-colors">
                <CheckCircle2 size={20} className="text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">{uso}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. METODOLOGÍA DE TRABAJO */}
        <section className="mb-24 bg-cyan-900/10 border border-cyan-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-4">Nuestra Metodología de Implementación</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Un proceso técnico estructurado en 4 fases para automatizar tus procesos sin interrumpir la operación.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="relative">
              <div className="text-5xl font-black text-cyan-500/20 absolute -top-4 -left-2 z-0">01</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diagnóstico</h3>
              <p className="text-xs text-slate-400 relative z-10">Auditoría del flujo operativo, herramientas en uso y cuellos de botella más costosos de tu empresa.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-cyan-500/20 absolute -top-4 -left-2 z-0">02</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diseño</h3>
              <p className="text-xs text-slate-400 relative z-10">Mapa de eventos, microservicios REST, endpoints y webhooks que conectarán tus sistemas.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-cyan-500/20 absolute -top-4 -left-2 z-0">03</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Desarrollo</h3>
              <p className="text-xs text-slate-400 relative z-10">Programación de los flujos en Node.js, integraciones con CRM, bases de datos y notificaciones, con pruebas controladas.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-cyan-500/20 absolute -top-4 -left-2 z-0">04</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Despliegue</h3>
              <p className="text-xs text-slate-400 relative z-10">Pase a producción, documentación técnica y monitoreo para que los flujos corran 24/7.</p>
            </div>
          </div>
        </section>

        {/* 7. PREGUNTAS FRECUENTES */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-2xl mb-4 text-slate-300">
              <HelpCircle size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "¿Qué herramientas se pueden conectar entre sí?", a: "Integramos tu CRM, sistemas de nómina, bases de datos, hojas de Excel, plataformas como HubSpot y canales de notificación como Slack, mediante REST APIs y Webhooks." },
              { q: "¿Qué pasa cuando se firma un contrato o entra un nuevo lead?", a: "El evento dispara un flujo automático: nuestros microservicios crean los accesos, actualizan las bases de datos y notifican a tu equipo en milisegundos, sin intervención manual." },
              { q: "¿Necesito cambiar las herramientas que ya uso?", a: "No. Construimos puentes entre los sistemas que ya tienes, de modo que tu equipo sigue trabajando en las herramientas que conoce mientras los datos se sincronizan de forma automática." },
              { q: "¿En qué consiste la auditoría de procesos?", a: "Es una consultoría gratuita en la que mapeamos el flujo operativo de tu empresa para identificar y cotizar la automatización de los cuellos de botella más costosos." }
            ].map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-slate-900/40 rounded-xl overflow-hidden backdrop-blur-sm">
                <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center group-open:text-cyan-400 transition-colors list-none">
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

        {/* 8. CIERRE COMERCIAL */}
        <section className="mb-24 bg-gradient-to-br from-cyan-900/40 to-slate-900 border border-cyan-500/30 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(6,182,212,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />
          <PhoneCall size={40} className="mx-auto text-cyan-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">¿Qué proceso de tu negocio te gustaría automatizar?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
            Cuéntanos tu cuello de botella actual. Agenda una auditoría técnica sin compromiso y descubre cómo unificar tus herramientas puede reducir tu carga operativa y escalar tu operación.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/#contact" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-cyan-500/25">
              Consultar mi proyecto
            </Link>
            <a href="#auditoria" className="w-full sm:w-auto bg-transparent border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 font-bold py-4 px-8 rounded-full transition-all">
              Solicitar auditoría gratuita
            </a>
          </div>
        </section>

        {/* 9. FORMULARIO B2B */}
        <section id="auditoria" className="max-w-3xl mx-auto bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-32 bg-cyan-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full inline-block mb-3">Consultoría Gratuita</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Solicita una Auditoría de Procesos</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Mapearemos el flujo operativo de tu empresa para identificar y cotizar la automatización de los cuellos de botella más costosos.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre Completo" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Corporativo" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
            </div>
            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Empresa / Herramientas a automatizar (Ej. Excel, HubSpot)" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />

            <button type="submit" disabled={status.loading} className={cn("w-full bg-gradient-to-r from-cyan-600 to-blue-500 hover:from-cyan-500 hover:to-blue-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm", status.loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.01]")}>
              <SearchCheck size={18} /> {status.loading ? "Procesando solicitud..." : "Solicitar Auditoría Gratuita"}
            </button>

            {status.success && <p className="text-cyan-400 text-sm font-bold text-center mt-4 bg-cyan-500/10 border border-cyan-500/20 p-3 rounded-lg">{status.success}</p>}
            {status.error && <p className="text-red-400 text-sm font-bold text-center mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">{status.error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
};

export default AutomatizacionOnboardingLanding;