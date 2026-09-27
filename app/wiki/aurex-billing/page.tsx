import Link from "next/link";
import { ArrowLeft, ShieldCheck, Server, Lock, Cpu, CreditCard, Database, Terminal } from "lucide-react";

export default function DistributedPaymentsDocs() {
  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-12 px-6 md:px-20">
      <div className="mx-auto max-w-4xl">
        <Link 
          href="/wiki" 
          className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-8 w-fit"
        >
          <ArrowLeft size={16} />
          Volver a la Wiki
        </Link>

        <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          
          {/* ENCABEZADO */}
          <header className="mb-10 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <CreditCard size={20} />
              <span className="font-semibold tracking-wider uppercase text-xs">Arquitectura de Software / Integración Financiera B2B</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Integración de Pagos Distribuidos para SaaS (Aurex Assembly & Aurex Billing)
            </h1>
            <p className="text-slate-400 text-sm">
              Autor: <strong className="text-slate-200">XZanderU</strong>
            </p>
          </header>

          {/* SECCIÓN 1: VISIÓN ARQUITECTÓNICA */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <Server size={24} />
              <h2 className="text-2xl font-bold text-white">1. Visión Arquitectónica: Enfoque de Microservicios</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Para la gestión de suscripciones del ecosistema Aurex, se diseñó e implementó una arquitectura distribuida basada en el principio de <strong>Separación de Responsabilidades (Separation of Concerns)</strong>. El flujo comercial y transaccional se dividió en dos dominios completamente desacoplados:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold text-blue-200 mb-2">Aurex Assembly (Main App)</h3>
                <p className="text-sm text-slate-400">Núcleo del negocio. Gestiona el marketing, la adquisición de usuarios, la lógica de asambleas y la vitrina comercial. Su responsabilidad financiera se limita exclusivamente a capturar la intención de compra.</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
                <h3 className="font-semibold text-blue-200 mb-2">Aurex Billing (Micro-frontend)</h3>
                <p className="text-sm text-slate-400">Caja registradora blindada y aislada. No conoce detalles de asambleas; intercepta intenciones de compra, congela precios, renderiza la pasarela y valida respuestas criptográficas.</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mt-4 italic">
              Esta separación garantiza que cualquier vulnerabilidad, pico de tráfico o actualización en la plataforma principal no comprometa el entorno de procesamiento de pagos.
            </p>
          </section>

          {/* SECCIÓN 2: FLUJO TRANSACCIONAL */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <Cpu size={24} />
              <h2 className="text-2xl font-bold text-white">2. Flujo Transaccional del Ciclo de Vida</h2>
            </div>
            <p className="text-slate-300 mb-4">El proceso de compra sigue un modelo asíncrono y de transferencia de estado:</p>
            <div className="space-y-3 text-slate-300 text-sm bg-white/5 p-6 rounded-xl border border-white/10">
              <div className="flex gap-3">
                <span className="font-bold text-blue-400">1.</span>
                <p><strong>Vitrina Comercial:</strong> El usuario explora los planes SaaS desde la ruta pública en aurex-assembly.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-400">2.</span>
                <p><strong>Intención de Compra (Draft Order):</strong> Se genera un registro inmutable con estado PENDING y un código de referencia único atado a un timestamp estricto.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-400">3.</span>
                <p><strong>Handshake y Redirección:</strong> El usuario es redirigido al micro-frontend (aurex-billing) llevando únicamente el código de referencia en la URL.</p>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-blue-400">4.</span>
                <p><strong>Bloqueo y Renderizado:</strong> El servicio financiero consulta la BD de forma privilegiada, bloquea el valor (<code>amount_in_cents</code>) y renderiza el widget de Wompi evitando manipulaciones de precios.</p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 3: ESTRATEGIA DE SEGURIDAD */}
          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Lock size={24} />
              <h2 className="text-2xl font-bold text-white">3. Estrategia de Seguridad y Prevención de Fraude</h2>
            </div>
            <p className="text-slate-300 mb-4">El ecosistema implementa tres capas de seguridad robustas:</p>
            
            <div className="space-y-6 text-slate-300">
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold text-white mb-1">A. Políticas RLS (Row Level Security) en PostgreSQL</h3>
                <p className="text-sm text-slate-400">Privilegios mínimos en Supabase. INSERTs públicos y anónimos permitidos, pero lectura (SELECT) bloqueada. El micro-frontend lee mediante un cliente con Service Role Key en entorno seguro SSR.</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold text-white mb-1">B. Firmas de Integridad Criptográfica (Frontend)</h3>
                <p className="text-sm text-slate-400">Se concatena referencia, centavos, moneda y <code>WOMPI_INTEGRITY_SECRET</code> aplicando hash SHA-256 para rechazar transacciones alteradas en el DOM.</p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <h3 className="font-semibold text-white mb-1">C. Validación Anti-Spoofing en Webhook (Backend)</h3>
                <p className="text-sm text-slate-400">El endpoint <code>/api/webhooks/wompi</code> intercepta el payload, reconstruye el hash localmente usando <code>WOMPI_EVENTS_SECRET</code> y valida el checksum antes de consolidar el pago en Supabase.</p>
              </div>
            </div>
          </section>

          {/* SECCIÓN 4: STACK TECNOLÓGICO */}
          <section>
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <Database size={24} />
              <h2 className="text-2xl font-bold text-white">4. Stack Tecnológico</h2>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-300">
              <li className="bg-white/5 p-3 rounded-lg border border-white/5"><strong>Framework Core:</strong> Next.js (App Router, Server Components, API Routes)</li>
              <li className="bg-white/5 p-3 rounded-lg border border-white/5"><strong>Base de Datos & Auth:</strong> Supabase (PostgreSQL, RLS)</li>
              <li className="bg-white/5 p-3 rounded-lg border border-white/5"><strong>Pasarela de Pagos:</strong> Wompi API (Widgets & Event Webhooks)</li>
              <li className="bg-white/5 p-3 rounded-lg border border-white/5"><strong>Seguridad:</strong> Node.js Crypto module (SHA-256 Hashing)</li>
            </ul>
          </section>

        </article>
      </div>
    </main>
  );
}