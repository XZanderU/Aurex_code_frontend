"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, Check, Shield, Server, ChevronRight, Calculator, FileCode2, Database, XCircle, CheckCircle2, Briefcase, HelpCircle, PhoneCall, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

const FacturacionDianLanding = () => {
  const [formData, setFormData] = React.useState({ nombre: "", correo: "", empresa: "", telefono: "" });
  const [status, setStatus] = React.useState({ loading: false, success: null as string | null, error: null as string | null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: null, error: null });

    const dataToSend = {
      ...formData,
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

      setStatus({ loading: false, success: "¡Solicitud recibida con éxito! Nuestro arquitecto de software te contactará en breve.", error: null });
      setFormData({ nombre: "", correo: "", empresa: "", telefono: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "No se pudo procesar la solicitud." });
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
      {/* Luz ambiental Naranja */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-orange-600/15 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-orange-400 hover:text-orange-300 transition-colors mb-10 w-fit">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        {/* 1. HERO SECTION */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-xs font-semibold text-orange-400 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(234,88,12,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Certificados bajo el modelo Software Propio DIAN
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Conecta tus ventas directo a la DIAN <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">sin intermediarios</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Elimina la doble digitación y los sobrecostos mensuales por transacción. Desarrollamos tu infraestructura fiscal con arquitecturas robustas en C# .NET.
          </p>
          <a href="#cotizar" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_40px_rgba(234,88,12,0.6)] hover:-translate-y-0.5">
            Cotizar Integración DIAN <ChevronRight size={18} />
          </a>
        </section>

        {/* 2. TECH LOGOS / TRUST BADGES */}
        <section className="mb-24 border-y border-white/10 py-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-xl text-white"><Server size={22} className="text-purple-500" /> C# .NET Core</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Database size={20} className="text-blue-400" /> Entity Framework</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Shield size={20} className="text-emerald-400" /> Certificados p12</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><FileCode2 size={20} className="text-orange-400" /> XML UBL 2.1</div>
          </div>
        </section>

        {/* 3. MOCKUP INTERACTIVO ESTILO IDE */}
        <section className="mb-24 grid md:grid-cols-2 gap-10 items-center">
          <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5 font-mono text-xs shadow-2xl relative backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-slate-500 text-[10px]">DianFacturacionService.cs</span>
            </div>
            <div className="space-y-2 text-slate-300">
              <p className="text-slate-500">// Generación de XML UBL 2.1 firmado</p>
              <p><span className="text-blue-400">var</span> invoice = <span className="text-blue-400">new</span> DianInvoice {'{'}</p>
              <p className="pl-4">Nit = <span className="text-orange-300">"901.234.567-8"</span>,</p>
              <p className="pl-4">TotalAmount = <span className="text-purple-300">150000.00m</span></p>
              <p>{'};'}</p>
              <p><span className="text-blue-400">var</span> signedXml = Cryptography.SignWithCertificate(invoice.ToXml(), cert);</p>
              <p><span className="text-blue-400">var</span> response = <span className="text-purple-400">await</span> DianApi.SubmitAsync(signedXml);</p>

              <div className="my-3 p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
                <span>[200 OK] CUFE: 4a6c9... Factura Validada</span>
                <span className="text-[10px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded">DIAN API</span>
              </div>
            </div>
          </div>

          <div>
            <span className="text-orange-400 font-bold uppercase tracking-widest text-xs">Propiedad de Código</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">SaaS Genérico vs. Software Propio</h2>
            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              Las plataformas de terceros (SaaS) te cobran mensualidades por cada factura emitida. Con nuestra integración bajo el modelo de Software Propio, el código y la conexión a la DIAN son tuyos.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Check className="text-orange-400 mt-1" size={18} />
                <p className="text-sm text-slate-300"><strong className="text-white">Cero Mensualidades Ocultas:</strong> Escala el volumen de tu facturación sin límites ni bloqueos de tarifa.</p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="text-orange-400 mt-1" size={18} />
                <p className="text-sm text-slate-300"><strong className="text-white">Automatización Multihilo:</strong> Backend C# .NET de alto rendimiento que procesa cientos de firmas digitales por segundo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. PAIN POINT COMPARISON */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">El costo del SaaS por transacción vs. Tu propia infraestructura fiscal</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 border border-red-500/20 p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><XCircle className="text-red-400" /> Proveedor SaaS Tradicional</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Mensualidades y tarifas que crecen con cada factura emitida.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Doble digitación entre tu sistema de ventas y la plataforma del proveedor.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Dependencia total de un tercero para cumplir con la DIAN.</li>
              </ul>
            </div>
            <div className="bg-orange-900/20 border border-orange-500/40 p-8 rounded-3xl relative overflow-hidden backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><CheckCircle2 className="text-orange-400" /> Integración Software Propio AurexCode</h3>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3"><span className="text-orange-400 font-bold">✓</span> Sin mensualidades ocultas ni cobros por volumen de facturas.</li>
                <li className="flex items-start gap-3"><span className="text-orange-400 font-bold">✓</span> Tu sistema de ventas se conecta directo a la DIAN, sin doble digitación.</li>
                <li className="flex items-start gap-3"><span className="text-orange-400 font-bold">✓</span> El código y la conexión fiscal son de tu propiedad.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. CASOS DE USO EMPRESARIALES */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-orange-500/10 rounded-2xl mb-4 text-orange-400">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Dónde aplica esta solución?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Casos de uso corporativos que convierten el cumplimiento fiscal en un flujo 100% automático.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Facturación electrónica de venta directamente desde tu POS o ERP.",
              "Emisión automática de notas crédito y notas débito.",
              "Generación de documento soporte para proveedores no obligados a facturar.",
              "Integración de pedidos de e-commerce con facturación inmediata.",
              "Firma digital masiva con certificados p12 y XML UBL 2.1.",
              "Reintentos y trazabilidad de CUFE ante rechazos o caídas de la DIAN."
            ].map((uso, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-orange-500/30 transition-colors">
                <CheckCircle2 size={20} className="text-orange-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">{uso}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. METODOLOGÍA DE TRABAJO */}
        <section className="mb-24 bg-orange-900/10 border border-orange-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="text-center mb-12 relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-4">Nuestra Metodología de Implementación</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Un proceso técnico estructurado en 4 fases para garantizar una integración fiscal segura y sin interrupciones en tu facturación.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            <div className="relative">
              <div className="text-5xl font-black text-orange-500/20 absolute -top-4 -left-2 z-0">01</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diagnóstico</h3>
              <p className="text-xs text-slate-400 relative z-10">Evaluación de tu sistema de ventas actual, volumen de facturación y requisitos fiscales de tu empresa.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-orange-500/20 absolute -top-4 -left-2 z-0">02</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Diseño</h3>
              <p className="text-xs text-slate-400 relative z-10">Arquitectura del servicio en C# .NET, modelo de datos con Entity Framework y flujo de firma con certificado p12.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-orange-500/20 absolute -top-4 -left-2 z-0">03</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Desarrollo</h3>
              <p className="text-xs text-slate-400 relative z-10">Generación de XML UBL 2.1, firma digital, consumo de la API de la DIAN y pruebas en ambiente de habilitación.</p>
            </div>
            <div className="relative">
              <div className="text-5xl font-black text-orange-500/20 absolute -top-4 -left-2 z-0">04</div>
              <h3 className="text-lg font-bold text-white mb-2 relative z-10">Despliegue</h3>
              <p className="text-xs text-slate-400 relative z-10">Paso a producción, entrega del código fuente, documentación técnica y monitoreo de la emisión de facturas.</p>
            </div>
          </div>
        </section>

        {/* 7. PREGUNTAS FRECUENTES */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-2xl mb-4 text-slate-300">
              <HelpCircle size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "¿Qué significa facturar bajo el modelo de Software Propio?", a: "Significa que tu empresa emite facturas electrónicas con un software desarrollado a la medida, conectado directamente a la DIAN y sin depender de un proveedor tecnológico que cobre por cada documento. El código y la conexión fiscal son tuyos." },
              { q: "¿Se integra con mi sistema de ventas, POS o ERP actual?", a: "Sí. Desarrollamos el servicio en C# .NET como una capa que recibe las ventas de tu sistema actual, genera el XML UBL 2.1, lo firma con tu certificado y lo envía a la DIAN, sin que tengas que digitar la información dos veces." },
              { q: "¿Qué documentos electrónicos se pueden automatizar?", a: "Además de la factura electrónica de venta, podemos automatizar notas crédito, notas débito y documento soporte, según las necesidades de tu operación." },
              { q: "¿Cuáles son los tiempos y costos de implementación?", a: "Los plazos dependen de la complejidad de tu operación y del proceso de habilitación ante la DIAN, y los definimos en la propuesta tras la evaluación técnica. El costo es por desarrollo (Software Propio): no pagas mensualidades ocultas ni tarifas por volumen de facturas a AurexCode." }
            ].map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-slate-900/40 rounded-xl overflow-hidden backdrop-blur-sm">
                <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center group-open:text-orange-400 transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={18} className="group-open:rotate-180 transition-transform text-slate-500" />
                </summary>
                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 8. CIERRE COMERCIAL */}
        <section className="mb-24 bg-gradient-to-br from-orange-900/40 to-slate-900 border border-orange-500/30 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(234,88,12,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />
          <PhoneCall size={40} className="mx-auto text-orange-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">¿Listo para dejar de pagar por cada factura?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
            Cuéntanos cómo facturas hoy. Solicita una evaluación técnica sin compromiso y descubre cómo una integración propia con la DIAN puede reducir tus costos y tu carga operativa.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <Link href="/#contact" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-orange-500/25">
              Consultar mi proyecto
            </Link>
            <a href="#cotizar" className="w-full sm:w-auto bg-transparent border border-orange-500/30 text-orange-400 hover:bg-orange-500/10 font-bold py-4 px-8 rounded-full transition-all">
              Cotizar integración DIAN
            </a>
          </div>
        </section>

        {/* 9. FORMULARIO B2B */}
        <section id="cotizar" className="max-w-3xl mx-auto bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-orange-500/30 shadow-[0_0_50px_rgba(234,88,12,0.15)] relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-32 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Cotizar Integración DIAN</h2>
            <p className="text-slate-400 text-sm leading-relaxed">Solicita una evaluación técnica de tu sistema de ventas actual.</p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre de Contacto" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Corporativo" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="NIT / Empresa" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-orange-500 transition-colors text-sm" />
            </div>

            <button type="submit" disabled={status.loading} className={cn("w-full bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-500 hover:to-orange-400 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm", status.loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.01]")}>
              <Calculator size={18} /> {status.loading ? "Procesando..." : "Solicitar Propuesta de Desarrollo"}
            </button>

            {status.success && <p className="text-orange-400 text-sm font-bold text-center mt-4 bg-orange-500/10 border border-orange-500/20 p-3 rounded-lg">{status.success}</p>}
            {status.error && <p className="text-red-400 text-sm font-bold text-center mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">{status.error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
};

export default FacturacionDianLanding;