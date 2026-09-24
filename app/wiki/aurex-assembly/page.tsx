import Link from "next/link";
import { ArrowLeft, Users, Zap, ShieldCheck, FileSpreadsheet, Smartphone, Play, FileText, Hand } from "lucide-react";

export default function AurexAssemblyDocs() {
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

        {/* Encabezado del Producto */}
        <div className="mb-12 border-b border-white/10 pb-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 mb-4">
            <Users size={14} /> Producto SaaS
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Aurex Assembly
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed border-l-4 border-blue-500 pl-6">
            Plataforma en la nube diseñada específicamente para asambleas de copropietarios en Colombia. Garantiza la legalidad de las decisiones, elimina las filas de registro y automatiza la generación de actas.
          </p>
        </div>

        {/* Sección: Argumentos de Venta */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Zap className="text-orange-400" /> Valor Diferenciador (Argumentos de Venta)
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="font-semibold text-blue-100 flex items-center gap-2 mb-2"><Smartphone size={18} className="text-blue-400"/> Velocidad y Cero Fricción</h3>
              <p className="text-sm text-slate-400">Check-in digital mediante PIN dinámico. Sin planillas de papel, sin descargar aplicaciones ni crear contraseñas; ingreso directo desde el navegador.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="font-semibold text-blue-100 flex items-center gap-2 mb-2"><ShieldCheck size={18} className="text-emerald-400"/> Precisión Legal</h3>
              <p className="text-sm text-slate-400">El quórum no se cuenta por personas, sino por Coeficiente de Copropiedad, calculado estrictamente en tiempo real.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="font-semibold text-blue-100 flex items-center gap-2 mb-2"><Hand size={18} className="text-purple-400"/> Orden en el Debate</h3>
              <p className="text-sm text-slate-400">Módulo de debate con "Cola de Peticiones de Palabra", evitando interrupciones y caos en la videollamada.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-xl">
              <h3 className="font-semibold text-blue-100 flex items-center gap-2 mb-2"><FileSpreadsheet size={18} className="text-green-400"/> Auditoría Inmediata</h3>
              <p className="text-sm text-slate-400">Descarga automática del acta en Excel con el padrón electoral certificado y los resultados exactos de cada votación.</p>
            </div>
          </div>
        </section>

        {/* Sección: Guía de Operación */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <FileText className="text-blue-400" /> Guía Rápida de Operación (Administradores)
          </h2>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">1</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Preparación de la Asamblea</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                  <li>Ingrese al Panel Administrativo de Aurex.</li>
                  <li>Cargue el padrón de propietarios (Torre, Apartamento, Coeficiente).</li>
                  <li>En la pestaña <em>"3. Intervenciones"</em>, pegue el enlace de Zoom/Meet para la transmisión.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">2</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Durante el Registro (Check-in)</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                  <li>A medida que lleguen los propietarios, haga clic en "Titular" o "Poder" (Delegado) en la pestaña <em>"1. Padrón"</em>.</li>
                  <li>El sistema generará un PIN de 4 dígitos. Entregue este PIN al propietario.</li>
                  <li>El propietario ingresa al portal con su apartamento y el PIN asignado.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">3</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Lanzar Votaciones</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                  <li>Vaya a la pestaña <em>"2. Votaciones en Vivo"</em>.</li>
                  <li>Escriba la pregunta y presione <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">Abrir Votación</span>.</li>
                  <li>Las pantallas de los propietarios cambiarán automáticamente. El quórum se calculará en vivo.</li>
                  <li>Presione <span className="bg-red-500/20 text-red-300 px-2 py-0.5 rounded text-xs">Cerrar Votación</span> para sellar los resultados.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">4</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Moderación del Debate</h3>
                <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm">
                  <li>Si un propietario levanta la mano virtualmente, aparecerá en estado <em>"Esperando Turno"</em>.</li>
                  <li>Haga clic en <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-xs">Dar Palabra</span> para notificar al usuario que puede encender su micrófono.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 font-bold border border-blue-500/30">5</div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-2">Cierre y Actas</h3>
                <p className="text-slate-300 text-sm mb-2">Al finalizar, haga clic en el botón verde de descarga. El sistema exportará un documento Excel con 3 pestañas certificadas:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-white/10 text-slate-300 px-3 py-1 rounded-full text-xs border border-white/5">1. Asistencia Total</span>
                  <span className="bg-white/10 text-slate-300 px-3 py-1 rounded-full text-xs border border-white/5">2. Resultados Electorales</span>
                  <span className="bg-white/10 text-slate-300 px-3 py-1 rounded-full text-xs border border-white/5">3. Detalle por Inmueble</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}