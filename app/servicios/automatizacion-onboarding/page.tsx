import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Cpu, Users, Workflow, BarChart3, CheckCircle2, ChevronRight, SearchCheck } from "lucide-react";

const AutomatizacionOnboardingLanding = () => {
  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
      {/* Luz ambiental azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-cyan-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link 
          href="/" 
          className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-12 w-fit"
        >
          <ArrowLeft size={16} />
          Volver al Inicio
        </Link>

        {/* 1. HERO SECTION */}
        <section className="text-center mb-24 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400 mb-6">
            <Cpu size={16} /> Hiperautomatización B2B
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Unifica tus herramientas y automatiza tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">procesos operativos más lentos</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Elimina los silos de información. Conectamos tu CRM, sistemas de nómina y accesos mediante microservicios en Node.js para escalar tu operación sin aumentar la carga administrativa.
          </p>
          <a 
            href="#auditoria" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
          >
            Solicitar Auditoría de Procesos <ChevronRight size={20} />
          </a>
        </section>

        {/* 2. USE CASES GRID */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Casos de Uso de Automatización</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
              Flujos de trabajo optimizados mediante microservicios que trabajan de forma silenciosa e ininterrumpida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
              <Users className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Onboarding de Empleados</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Asignación automática de roles, credenciales y accesos en bases de datos desde el primer día del colaborador.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
              <Workflow className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Captura e Ingesta de Leads</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Sincronización instantánea de prospectos entre la Landing Page, el CRM y los canales de atención comercial.
              </p>
            </div>
            <div className="p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition-colors">
              <BarChart3 className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-lg font-bold text-white mb-2">Consolidación de Datos</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Unificación de reportes entre múltiples sistemas dispersos sin requerir intervención manual en hojas de cálculo.
              </p>
            </div>
          </div>
        </section>

        {/* 3. SOCIAL PROOF / DATA */}
        <section className="mb-24 bg-blue-900/20 border border-blue-500/20 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-black text-cyan-400 mb-2"> hasta 75%</div>
              <p className="text-sm text-slate-300">Reducción en tiempo de onboarding de personal</p>
            </div>
            <div>
              <div className="text-4xl font-black text-blue-400 mb-2">0%</div>
              <p className="text-sm text-slate-300">Errores por ingreso manual de datos duplicados</p>
            </div>
            <div>
              <div className="text-4xl font-black text-orange-400 mb-2">24/7</div>
              <p className="text-sm text-slate-300">Sincronización continua entre microservicios</p>
            </div>
          </div>
        </section>

        {/* 4. CONTACT FORM */}
        <section id="auditoria" className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Solicita una Auditoría de Procesos</h2>
            <p className="text-slate-400 text-sm">
              Analizaremos el flujo operativo de tu empresa para identificar los cuellos de botella más costosos y diseñar tu plan de hiperautomatización.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nombre Completo" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                required
              />
              <input 
                type="email" 
                placeholder="Correo Corporativo" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm"
                required
              />
            </div>
            <input 
              type="text" 
              placeholder="Empresa / Herramientas que utilizas (ej. HubSpot, Excel, SAP)" 
              className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 transition-colors text-sm"
              required
            />
            <button 
              type="submit" 
              className="w-full bg-cyan-600 hover:bg-cyan-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <SearchCheck size={18} />
              Solicitar Auditoría Gratuita
            </button>
          </form>
        </section>

      </div>
    </main>
  );
};

export default AutomatizacionOnboardingLanding;