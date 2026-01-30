"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface FormData {
  nombre: string;
  correo: string;
  empresa: string;
  mensaje: string;
}

interface FormStatus {
  loading: boolean;
  success: string | null;
  error: string | null;
}

const ContactForm = () => {
  const [formData, setFormData] = React.useState<FormData>({
    nombre: '',
    correo: '',
    empresa: '',
    mensaje: ''
  });

  const [status, setStatus] = React.useState<FormStatus>({
    loading: false,
    success: null,
    error: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus({ loading: true, success: null, error: null });

  try {
    const response = await fetch(
      "https://alexanderurrea.app.n8n.cloud/webhook-test/Contactform", // 👈 URL de tu webhook n8n
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: formData.nombre,
          correo: formData.correo,
          empresa: formData.empresa,
          mensaje: formData.mensaje,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error (${response.status})`);
    }

    setStatus({
      loading: false,
      success: "¡Mensaje enviado con éxito!",
      error: null,
    });

    setFormData({
      nombre: "",
      correo: "",
      empresa: "",
      mensaje: "",
    });
  } catch (err: any) {
    setStatus({
      loading: false,
      success: null,
      error: "No se pudo enviar el mensaje. Intenta nuevamente.",
    });
  }
};


  return (
    <section id="contact" className="relative py-32 bg-transparent overflow-hidden px-6">
      {/* Decoración de fondo azul sutil */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-50 mb-4 tracking-tighter">
            ¿Tienes un <span className="text-orange-500 italic font-light">proyecto?</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Hablemos y construyamos algo sólido juntos.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-slate-900/60 backdrop-blur-xl border border-blue-500/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-orange-500 font-black ml-1">
                  Nombre
                </label>
                <input
                  name="nombre"
                  placeholder="Ej. John Doe"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-orange-500 font-black ml-1">
                  Correo
                </label>
                <input
                  name="correo"
                  type="email"
                  placeholder="john@empresa.com"
                  value={formData.correo}
                  onChange={handleChange}
                  required
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-orange-500 font-black ml-1">
                  Empresa (opcional)
                </label>
                <input
                  name="empresa"
                  placeholder="Nombre de tu negocio"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-orange-500 font-black ml-1">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos un poco sobre tu idea..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                />
              </div>

              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={status.loading}
                  className={cn(
                    "w-full bg-orange-500 text-slate-950 font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs transition-all",
                    status.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-400 hover:-translate-y-1"
                  )}
                >
                  {status.loading ? 'Procesando...' : 'Enviar Propuesta'}
                </button>
              </div>

              <div className="md:col-span-2 text-center">
                {status.success && <p className="text-blue-400 text-sm font-bold animate-pulse">{status.success}</p>}
                {status.error && <p className="text-red-400 text-sm font-bold">{status.error}</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
