"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden bg-transparent"
    >
      {/* H1 SEO */}
      <h1 className="sr-only">
        Desarrollo de software y soluciones digitales a medida
      </h1>

      {/* Background decorativo */}
      <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[50%] bg-blue-600/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[5%] right-[-5%] w-[40%] h-[40%] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none animate-pulse" />

      <div className="w-full max-w-[1920px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10 md:px-12">
        
        {/* Left */}
        <div className="flex flex-col duration-1000 animate-in fade-in slide-in-from-left-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="h-[1px] w-12 bg-orange-500" />
            <span className="text-orange-500 font-bold tracking-[0.5em] uppercase text-[10px]">
              Agencia Full-Stack 2026
            </span>
          </div>

          {/* Título visual */}
          <div
            className="text-6xl md:text-8xl lg:text-[110px] font-bold tracking-[-0.04em] leading-[0.85] text-orange-50"
            aria-hidden="true"
          >
            Aurex <br />
            <span className="text-orange-500 italic font-light">Code</span>
          </div>

          {/* Copy */}
          <p className="mt-10 text-slate-300/80 text-lg md:text-2xl max-w-xl leading-relaxed font-light">
            Desarrollamos software y soluciones digitales a medida con enfoque real en negocio y rendimiento.
            Convertimos ideas en sistemas sólidos, escalables y diseñados para crecer.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-wrap gap-6">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-orange-500 text-slate-950 hover:bg-orange-600 rounded-full px-10 py-7 font-bold uppercase tracking-widest text-xs h-auto group shadow-xl shadow-orange-500/10"
            >
              Agenda una llamada
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="px-10 py-7 rounded-full font-bold uppercase tracking-widest text-xs text-orange-50 border-white/10 bg-transparent hover:bg-white/5 h-auto"
            >
              Ver portafolio
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            Sin compromiso · Respuesta en menos de 24 horas
          </p>
        </div>

        {/* Right */}
        <div className="relative duration-1000 animate-in fade-in zoom-in-95 delay-300">
          <div className="relative h-[500px] w-full rounded-[2.5rem] overflow-hidden border border-white/5 bg-slate-900/40 group">
            <Image
              src="https://images.unsplash.com/photo-1649230955455-b5c798af2de2?q=80&w=2066&auto=format&fit=crop"
              alt="Agencia de desarrollo de software y soluciones digitales"
              fill
              priority
              className="object-cover mix-blend-luminosity opacity-40 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-10 -left-10 h-40 w-40 hidden md:block animate-[spin_15s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              <path
                id="txtPath"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                fill="transparent"
              />
              <text className="fill-orange-500/40 uppercase font-black text-[8px] tracking-[3px]">
                <textPath xlinkHref="#txtPath">
                  • Construimos el futuro • Desplegamos a diario • Diseñamos con intención •
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

