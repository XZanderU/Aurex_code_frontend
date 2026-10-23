"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Check, X, Shield, Server, FileText, ChevronRight, Calculator } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const FacturacionDianLanding = () => {
  const [formData, setFormData] = React.useState({
    nombre: "",
    correo: "",
    empresa: "",
    telefono: "", // Campo adicional
  });

  const [status, setStatus] = React.useState({ loading: false, success: null as string | null, error: null as string | null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const dataToSend = {
      nombre: formData.nombre,
      correo: formData.correo,
      empresa: formData.empresa,
      mensaje: `COTIZACIÓN DIAN: El prospecto dejó este teléfono: ${formData.telefono}`,
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

      setStatus({ loading: false, success: "¡Solicitud recibida! Te contactaremos pronto.", error: null });
      setFormData({ nombre: "", correo: "", empresa: "", telefono: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "No se pudo procesar la solicitud." });
    }
  };

  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-12 w-fit">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        {/* HERO SECTION */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-6">
            <FileText size={16} /> Software Propio DIAN
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Conecta tus ventas directo a la DIAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">sin intermediarios</span>
          </h1>
        </section>

        {/* CTA & FORM */}
        <section id="cotizar" className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Cotizar Integración DIAN</h2>
            <p className="text-slate-400 text-sm">Solicita una evaluación de tu sistema de ventas actual.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre de Contacto" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Corporativo" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="NIT / Empresa" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono de Contacto" required className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
            </div>
            
            <button type="submit" disabled={status.loading} className={cn("w-full bg-orange-600 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm", status.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-500")}>
              <Calculator size={18} /> {status.loading ? "Procesando..." : "Solicitar Propuesta"}
            </button>

            {status.success && <p className="text-blue-400 text-sm font-bold text-center mt-2">{status.success}</p>}
            {status.error && <p className="text-red-400 text-sm font-bold text-center mt-2">{status.error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
};

export default FacturacionDianLanding;