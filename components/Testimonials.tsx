"use client";

import * as React from "react";
import { RiDoubleQuotesL, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

interface Message {
  id: number;
  text: string;
  highlight: string;
}

const MESSAGES: Message[] = [
  {
    id: 1,
    text: "El software no es un gasto. Es una ventaja competitiva cuando está bien construido.",
    highlight: "Arquitectura · Rendimiento · Escalabilidad",
  },
  {
    id: 2,
    text: "No construimos páginas bonitas. Construimos sistemas que resuelven problemas reales.",
    highlight: "Código con criterio técnico",
  },
  {
    id: 3,
    text: "Cada línea de código tiene un propósito. Nada está ahí por accidente.",
    highlight: "Menos humo · Más ingeniería",
  },
  {
    id: 4,
    text: "Un mal desarrollo cuesta dos veces: cuando lo haces y cuando lo arreglas.",
    highlight: "Hazlo bien desde el inicio",
  },
];

const Testimonials = () => {
  const [index, setIndex] = React.useState(0);
  const [isExiting, setIsExiting] = React.useState(false);

  const handleNavigation = (direction: "next" | "prev") => {
    setIsExiting(true);
    
    setTimeout(() => {
      if (direction === "next") {
        setIndex((prev) => (prev + 1) % MESSAGES.length);
      } else {
        setIndex((prev) => (prev - 1 + MESSAGES.length) % MESSAGES.length);
      }
      setIsExiting(false);
    }, 300); // Duración de la animación de salida
  };

  return (
    <section id="testimonials" className="py-24 bg-transparent px-6 relative overflow-hidden">
      {/* Decoración de fondo - Comillas gigantes en azul muy sutil */}
      <RiDoubleQuotesL className="absolute top-10 left-10 text-[15rem] text-blue-500/5 pointer-events-none select-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs">
            Principios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-orange-50 mt-4 tracking-tighter">
            Cómo trabajamos y{" "}
            <span className="text-orange-500 italic font-light">por qué importa.</span>
          </h2>
        </div>

        {/* Carrusel Contenedor */}
        <div className="relative min-h-[350px] flex flex-col items-center justify-center">
          
          <div className={cn(
            "text-center max-w-4xl transition-all duration-300 ease-in-out transform",
            isExiting ? "opacity-0 scale-95 translate-y-4" : "opacity-100 scale-100 translate-y-0"
          )}>
            <RiDoubleQuotesL className="text-5xl text-orange-500 mx-auto mb-8" />

            <blockquote className="text-2xl md:text-4xl text-orange-50 font-medium leading-tight mb-8 tracking-tight italic px-4">
              "{MESSAGES[index].text}"
            </blockquote>

            <p className="text-orange-500 uppercase tracking-[0.25em] text-sm font-black">
              {MESSAGES[index].highlight}
            </p>
          </div>

          {/* Controles de Navegación */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={() => handleNavigation("prev")}
              className="p-4 border border-white/10 rounded-full text-orange-50 bg-slate-900/40 backdrop-blur-sm hover:bg-orange-500 hover:text-slate-950 hover:border-orange-500 transition-all active:scale-90"
              aria-label="Anterior"
            >
              <RiArrowLeftSLine size={24} />
            </button>

            <button
              onClick={() => handleNavigation("next")}
              className="p-4 border border-white/10 rounded-full text-orange-50 bg-slate-900/40 backdrop-blur-sm hover:bg-orange-500 hover:text-slate-950 hover:border-orange-500 transition-all active:scale-90"
              aria-label="Siguiente"
            >
              <RiArrowRightSLine size={24} />
            </button>
          </div>

          {/* Indicadores de puntos (opcional) */}
          <div className="flex gap-2 mt-8">
            {MESSAGES.map((_, i) => (
              <div 
                key={i}
                className={cn(
                  "h-1 transition-all duration-300 rounded-full",
                  i === index ? "w-8 bg-orange-500" : "w-2 bg-white/20"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;