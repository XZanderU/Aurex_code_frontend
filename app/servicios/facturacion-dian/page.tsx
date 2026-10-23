import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Check, X, Shield, Server, FileText, ChevronRight, Calculator } from "lucide-react";

const FacturacionDianLanding = () => {
  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-16 px-6 md:px-20 relative overflow-hidden">
      {/* Luz ambiental azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] bg-blue-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

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
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm font-medium text-orange-400 mb-6">
            <FileText size={16} /> Software Propio DIAN
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Conecta tus ventas directo a la DIAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">sin intermediarios</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Elimina la doble digitación y los sobrecostos mensuales por transacción. Desarrollamos tu infraestructura fiscal bajo el modelo de Software Propio con arquitecturas robustas en C# .NET.
          </p>
          <a 
            href="#cotizar" 
            className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(234,88,12,0.3)]"
          >
            Cotizar Integración DIAN <ChevronRight size={20} />
          </a>
        </section>

        {/* 2. COMPARISON TABLE */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">SaaS Genérico vs. Software Propio AurexCode</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">
              Compara el impacto financiero y la propiedad técnica de ambas soluciones.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-900/50 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/5">
                  <th className="p-5 text-slate-300 font-semibold text-sm">Criterio de Evaluación</th>
                  <th className="p-5 text-slate-400 font-semibold text-sm">SaaS Genérico (Terceros)</th>
                  <th className="p-5 text-orange-400 font-bold text-sm bg-orange-500/10">Software Propio AurexCode</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-sm">
                <tr>
                  <td className="p-5 font-medium text-white">Propiedad del Código</td>
                  <td className="p-5 text-slate-400 flex items-center gap-2"><X size={16} className="text-red-400" /> Licencia en alfiler (Renta)</td>
                  <td className="p-5 text-slate-200 font-semibold bg-orange-500/5 flex items-center gap-2"><Check size={16} className="text-orange-400" /> 100% tuyo (Activo digital)</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-white">Costo Recurrente</td>
                  <td className="p-5 text-slate-400 flex items-center gap-2"><X size={16} className="text-red-400" /> Tarifa mensual/anual por documento</td>
                  <td className="p-5 text-slate-200 font-semibold bg-orange-500/5 flex items-center gap-2"><Check size={16} className="text-orange-400" /> Cero mensualidades ocultas</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-white">Integración con Ventas</td>
                  <td className="p-5 text-slate-400 flex items-center gap-2"><X size={16} className="text-red-400" /> Doble digitación manual hacia Excel</td>
                  <td className="p-5 text-slate-200 font-semibold bg-orange-500/5 flex items-center gap-2"><Check size={16} className="text-orange-400" /> Conexión directa automática</td>
                </tr>
                <tr>
                  <td className="p-5 font-medium text-white">Escalabilidad Fiscal</td>
                  <td className="p-5 text-slate-400 flex items-center gap-2"><X size={16} className="text-red-400" /> Limitado por el plan contratado</td>
                  <td className="p-5 text-slate-200 font-semibold bg-orange-500/5 flex items-center gap-2"><Check size={16} className="text-orange-400" /> Volumen ilimitado en C# .NET</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. TECH STACK HIGHLIGHTS */}
        <section className="mb-24">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <Server className="text-orange-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Backend en C# .NET Core</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Procesamiento multihilo de alto rendimiento para la generación de XMLs firmados digitalmente y comunicación directa con los servidores de la DIAN.
              </p>
            </div>
            <div className="p-8 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <Shield className="text-blue-400 mb-4" size={32} />
              <h3 className="text-xl font-bold text-white mb-2">Entity Framework Core & SQL</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Bases de datos relacionales robustas que garantizan integridad referencial, trazabilidad de facturación y auditorías contables instantáneas.
              </p>
            </div>
          </div>
        </section>

        {/* 4. CTA & FORM */}
        <section id="cotizar" className="max-w-3xl mx-auto bg-slate-900 p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Cotizar Integración DIAN</h2>
            <p className="text-slate-400 text-sm">
              Solicita una evaluación de tu sistema de ventas actual para integrar el módulo de facturación electrónica directa.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Nombre de Contacto" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm"
                required
              />
              <input 
                type="email" 
                placeholder="Correo Corporativo" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="NIT / Empresa" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm"
                required
              />
              <input 
                type="tel" 
                placeholder="Teléfono de Contacto" 
                className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
            >
              <Calculator size={18} />
              Solicitar Propuesta de Desarrollo
            </button>
          </form>
        </section>

      </div>
    </main>
  );
};

export default FacturacionDianLanding;