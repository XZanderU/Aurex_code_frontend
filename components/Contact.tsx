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
      const response = await fetch('https://aurexcode-api-bzdwf5dsa6hzfkbc.brazilsouth-01.azurewebsites.net/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.title || 'Error al enviar el mensaje');
      }

      setStatus({
        loading: false,
        success: '¡Mensaje enviado con éxito!',
        error: null
      });

      setFormData({ nombre: '', correo: '', empresa: '', mensaje: '' });
    } catch (err: any) {
      setStatus({
        loading: false,
        success: null,
        error: err.message || 'Error de conexión'
      });
    }
  };

  return (
    <section id="contact" className="relative py-32 bg-transparent overflow-hidden px-6">
      {/* Decoración de fondo azul sutil */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h2 className="text-4xl md:text-6xl font-bold text-orange-50 mb-4 tracking-tighter">
            ¿Tienes un <span className="text-orange-500 italic font-light">proyecto?</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Hablemos y construyamos algo sólido juntos.
          </p>
        </div>

        {/* Card del Formulario */}
        <div className="flex justify-center">
          <div className="w-full max-w-lg bg-slate-900/60 backdrop-blur-xl border border-blue-500/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in-95 duration-700 delay-200">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Nombre */}
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
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              {/* Correo */}
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
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              {/* Empresa */}
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest text-orange-500 font-black ml-1">
                  Empresa (opcional)
                </label>
                <input
                  name="empresa"
                  placeholder="Nombre de tu negocio"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all"
                />
              </div>

              {/* Mensaje */}
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
                  className="bg-slate-950/50 border border-white/5 rounded-2xl px-5 py-4 text-orange-50 placeholder:text-white/10 focus:outline-none focus:border-orange-500/50 transition-all resize-none"
                />
              </div>

              {/* Botón */}
              <div className="md:col-span-2 mt-4">
                <button
                  type="submit"
                  disabled={status.loading}
                  className={cn(
                    "w-full bg-orange-500 text-slate-950 font-black py-5 rounded-2xl uppercase tracking-[0.2em] text-xs transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98]",
                    status.loading ? "opacity-50 cursor-not-allowed" : "hover:bg-orange-400 hover:-translate-y-1"
                  )}
                >
                  {status.loading ? 'Procesando...' : 'Enviar Propuesta'}
                </button>
              </div>

              {/* Mensajes de Estado */}
              <div className="md:col-span-2 text-center">
                {status.success && (
                  <p className="text-blue-400 text-sm font-bold animate-pulse">
                    {status.success}
                  </p>
                )}
                {status.error && (
                  <p className="text-red-400 text-sm font-bold">
                    {status.error}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
