"use client";

import * as React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";
import { RiArrowRightUpLine } from "react-icons/ri";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "573219470126"; // Reemplaza con tu número real (código de país + número)
  const emailAddress = "johnalexanderurreagarcia@gmail.com"; // Reemplaza con tu correo

  return (
    <footer className="relative bg-transparent pt-24 pb-12 px-6 overflow-hidden border-t border-white/5">
      {/* Glow decorativo de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-orange-500/50 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          
          {/* Columna 1: Info y CTAs Directos */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-orange-50 text-3xl font-bold tracking-tighter mb-4">
                ¿Listo para empezar? <br />
                <span className="text-orange-500 italic font-light">Hablemos hoy mismo.</span>
              </h3>
              <p className="text-slate-400 max-w-sm">
                Especialista en soluciones de ingeniería, automatización y desarrollo escalable.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {/* Botón WhatsApp */}
              <a
  href={`https://wa.me/${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "whatsapp_click",
      source: "floating_button",
    });
  }}
>
  <FaWhatsapp size={18} className="mr-2" />
  WhatsApp
</a>


              {/* Botón Email */}
              <a 
                href={`mailto:${emailAddress}`}
                className="flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-slate-950 px-5 py-3 rounded-xl font-bold text-sm transition-all hover:-translate-y-1 shadow-lg shadow-orange-500/20"
              >
                <FaEnvelope size={18} />
                Enviar Correo
              </a>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              Navegación
            </h4>
            <ul className="space-y-4">
              {["Inicio", "Servicios", "Proyectos", "Sobre mí"].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="group text-slate-400 hover:text-orange-50 transition-colors text-sm flex items-center gap-2"
                  >
                    {item}
                    <RiArrowRightUpLine className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Social Stack */}
          <div>
            <h4 className="text-orange-500 font-black text-[10px] uppercase tracking-[0.2em] mb-6">
              Social Stack
            </h4>
            <div className="flex flex-col gap-4">
              <a href="https://www.linkedin.com/in/john-alexander-urrea-garcia-5b0219169/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-orange-50 transition-colors text-sm group">
                <div className="p-2 rounded-lg bg-slate-900 border border-white/5 group-hover:border-orange-500/50">
                  <FaLinkedin size={16} />
                </div>
                LinkedIn
              </a>
              <a href="https://github.com/XZanderU" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-orange-50 transition-colors text-sm group">
                <div className="p-2 rounded-lg bg-slate-900 border border-white/5 group-hover:border-orange-500/50">
                  <FaGithub size={16} />
                </div>
                GitHub
                <a href="https://www.instagram.com/dev.xander/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-400 hover:text-orange-50 transition-colors text-sm group">
                <div className="p-2 rounded-lg bg-slate-900 border border-white/5 group-hover:border-orange-500/50">
                  <FaInstagram size={16} />
                </div>
                Instagram
              </a>
              </a>
              </div>
          </div>
        </div>

        {/* MEGA LOGO BOTTOM SECTION */}
        <div className="relative border-t border-white/5 pt-12 text-center">
          <div className="select-none pointer-events-none mb-8">
            <h1 className="text-[15vw] font-black leading-none tracking-tighter text-white/3 uppercase">
            AurexCode<span className="text-orange-500/10">.</span>
            </h1>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            <p>© {currentYear} — Diseñado con rigor técnico.</p>
            <div className="flex gap-8">
              <span className="text-slate-700">Disponibilidad: Inmediata</span>
            </div>
          </div>
        </div>
      </div>

      {/* Botón Flotante de WhatsApp (Opcional, aparece en la esquina inferior derecha) */}
      <a
  href={`https://wa.me/${whatsappNumber}`}
  target="_blank"
  rel="noopener noreferrer"
  onClick={() => {
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: "whatsapp_click",
      source: "floating_button",
    });
  }}
  className="fixed bottom-8 right-8 z-50 p-4 bg-emerald-500 text-white rounded-full shadow-2xl hover:bg-emerald-400 hover:scale-110 transition-all active:scale-95 md:flex hidden"
  aria-label="Contactar por WhatsApp"
>
  <FaWhatsapp size={28} />
</a>


    </footer>
  );
};

export default Footer;