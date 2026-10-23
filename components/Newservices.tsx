"use client";

import * as React from "react";
import Link from "next/link";
import { Zap, FileCheck, Cpu, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    id: "pagos-instantaneos",
    title: "Pagos Instantáneos & Conciliación",
    desc: "Automatiza la aprobación de cobros en tiempo real integrando Wompi y Supabase. Elimina la revisión manual de pantallazos.",
    icon: Zap,
    link: "/servicios/pagos-instantaneos",
    badge: "FinTech B2B",
  },
  {
    id: "facturacion-dian",
    title: "Facturación Electrónica DIAN",
    desc: "Conecta tus ventas directamente a la autoridad fiscal sin intermediarios usando C# .NET y Software Propio.",
    icon: FileCheck,
    link: "/servicios/facturacion-dian",
    badge: "Software Propio",
  },
  {
    id: "automatizacion-onboarding",
    title: "Hiperautomatización & Onboarding",
    desc: "Unifica tus sistemas internos y reduce silos de datos mediante microservicios en Node.js.",
    icon: Cpu,
    link: "/servicios/automatizacion-onboarding",
    badge: "Microservicios",
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-transparent px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs">
            Soluciones Empresariales
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 tracking-tight">
            Servicios de <span className="text-orange-500">Ingeniería.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative rounded-3xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-md flex flex-col justify-between hover:border-blue-500/50 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-400 border border-blue-500/20 w-fit">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                      {service.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                </div>

                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver Solución <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;