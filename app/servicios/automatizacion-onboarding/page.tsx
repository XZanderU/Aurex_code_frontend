"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Users, Workflow, BarChart3, ChevronRight, SearchCheck } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const AutomatizacionOnboardingLanding = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    correo: "",
    empresa: "",
  });

  const [status, setStatus] = React.useState({ loading: false, success: null as string | null, error: null as string | null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const dataToSend = {
      ...formData,
      mensaje: "AUDITORÍA: Solicitud de análisis de procesos (Landing Automatización y Onboarding)",
    };

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

      setStatus({ loading: false, success: "¡Auditoría solicitada! Nos pondremos en contacto.", error: null });
      setFormData({ nombre: "", correo: "", empresa: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "No se pudo procesar la solicitud." });
    }
  };

  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-12 w-fit">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        {/* HERO SECTION */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 mb-6">
            <Cpu size={16} /> Hiperautomatización B2B
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Unifica tus herramientas y automatiza tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">procesos más lentos</span>
          </h1>
        </section>

        {/* CONTACT FORM */}
        <section id="auditoria" className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Solicita una Auditoría de Procesos</h2>
            <p className="text-slate-400 text-sm">Analizaremos el flujo operativo de tu empresa para identificar cuellos de botella.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre Completo" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Corporativo" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
            </div>
            <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Empresa / Herramientas que usas (ej. Excel, SAP)" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm" />
            
            <button type="submit" disabled={status.loading} className={cn("w-full bg-cyan-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm", status.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-cyan-500")}>
              <SearchCheck size={18} /> {status.loading ? "Procesando..." : "Solicitar Auditoría Gratuita"}
            </button>

            {status.success && <p className="text-blue-400 text-sm font-bold text-center mt-2">{status.success}</p>}
            {status.error && <p className="text-red-400 text-sm font-bold text-center mt-2">{status.error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
};

export default AutomatizacionOnboardingLanding;