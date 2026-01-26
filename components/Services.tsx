"use client";

import * as React from "react";
import Image from "next/image";
import { SiPython, SiOdoo, SiPostgresql, SiReact, SiTailwindcss, SiJavascript, SiN8N } from "react-icons/si";
import { TbAutomation } from "react-icons/tb";
import { cn } from "@/lib/utils";

interface Tech {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface Service {
  id: string;
  title: string;
  desc: string;
  img: string;
  tech: Tech[];
}

const SERVICES: Service[] = [
  { 
    id: "01", 
    title: "Odoo ERP Solutions", 
    desc: "Especialista en personalización de flujos de trabajo en Odoo. Implementación de módulos a medida y optimización de bases de datos PostgreSQL para PyMEs.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    tech: [
      { name: "Odoo", icon: <SiOdoo />, color: "text-[#714B67]" },
      { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
      { name: "Postgres", icon: <SiPostgresql />, color: "text-[#4169E1]" },
      { name: "API Rest", icon: <TbAutomation />, color: "text-orange-500" }
    ]
  },
  { 
    id: "02", 
    title: "Workflow Automation", 
    desc: "Conectamos tus herramientas favoritas mediante n8n. Automatizamos tareas repetitivas y sincronizamos datos entre plataformas para ahorrarte horas de trabajo manual.",
    img: "https://images.unsplash.com/photo-1518433278985-2bbd124cac40?auto=format&fit=crop&w=1200&q=80",
    tech: [
      { name: "n8n", icon: <SiN8N />, color: "text-[#FF6D5B]" },
      { name: "Webhooks", icon: <TbAutomation />, color: "text-orange-500" },
      { name: "Python", icon: <SiPython />, color: "text-[#3776AB]" },
      { name: "Javascript", icon: <SiJavascript />, color: "text-[#F7DF1E]" }
    ]
  },
  { 
    id: "03", 
    title: "Frontend Experience", 
    desc: "Desarrollo de interfaces modernas y rápidas. Utilizamos React y Tailwind CSS para crear aplicaciones web que son visualmente impactantes y técnicamente sólidas.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    tech: [
      { name: "React", icon: <SiReact />, color: "text-[#61DAFB]" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-[#06B6D4]" },
      { name: "JS", icon: <SiJavascript />, color: "text-[#F7DF1E]" },
      { name: "API", icon: <TbAutomation />, color: "text-white" }
    ]
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = React.useState<Service>(SERVICES[0]);
  const [isChanging, setIsChanging] = React.useState(false);

  const handleTabChange = (service: Service) => {
    if (service.id === activeTab.id) return;
    setIsChanging(true);
    setTimeout(() => {
      setActiveTab(service);
      setIsChanging(false);
    }, 300); // Tiempo de la transición de salida
  };

  return (
    <section id="services" className="py-24 bg-transparent text-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <span className="text-orange-500 font-bold tracking-[0.3em] uppercase text-xs">
            Capacidades Técnicas
          </span>
          <h2 className="text-5xl md:text-7xl font-bold mt-4 tracking-tighter leading-none text-orange-50">
            Soluciones <br /> <span className="text-orange-500 italic font-light">Escalables.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch min-h-[600px]">
          
          {/* Menú Izquierdo */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-4">
            {SERVICES.map((service) => (
              <button
                key={service.id}
                onClick={() => handleTabChange(service)}
                className={cn(
                  "group relative p-8 text-left transition-all duration-300 rounded-3xl border",
                  activeTab.id === service.id 
                    ? "bg-blue-950/80 text-orange-50 border-orange-500/50 shadow-2xl scale-[1.02] backdrop-blur-md" 
                    : "bg-white/5 border-white/10 hover:border-blue-500/30 text-slate-400"
                )}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className={cn(
                      "text-[10px] font-bold tracking-widest mb-2 transition-colors",
                      activeTab.id === service.id ? "text-orange-500" : "text-slate-500"
                    )}>
                      SYS_0{service.id}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                      {service.title}
                    </h3>
                  </div>
                  <div className={cn(
                    "text-2xl transition-all duration-300",
                    activeTab.id === service.id ? "translate-x-0 text-orange-500" : "-translate-x-2 opacity-0"
                  )}>
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Visualizador Derecho (Sin Framer Motion) */}
          <div className="lg:col-span-7 relative rounded-[2.5rem] overflow-hidden bg-slate-950 shadow-2xl border border-white/10">
            <div className={cn(
              "relative h-full w-full transition-all duration-500 ease-in-out",
              isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
            )}>
              <Image
                src={activeTab.img}
                alt={activeTab.title}
                fill
                className="absolute inset-0 object-cover opacity-40"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <div className="absolute inset-0 p-10 md:p-14 flex flex-col justify-end">
                <div className="flex flex-wrap gap-3 mb-8">
                  {activeTab.tech.map((t, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
                    >
                      <span className={cn("text-xl", t.color)}>{t.icon}</span>
                      <span className="text-white text-[10px] font-bold uppercase tracking-wider">{t.name}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-orange-50 mb-4 tracking-tighter">
                  {activeTab.title}
                </h3>
                <p className="text-slate-300/80 text-lg md:text-xl leading-relaxed max-w-lg font-light">
                  {activeTab.desc}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;