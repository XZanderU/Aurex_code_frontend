"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ChevronRight,
  ChevronDown,
  Zap,
  Scale,
  MessageSquare,
  FileSpreadsheet,
  KeyRound,
  Smartphone,
  Video,
  Users,
  XCircle,
  CheckCircle2,
  Briefcase,
  HelpCircle,
  PhoneCall,
  CalendarCheck,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

/* Marco tipo navegador para las capturas de la interfaz */
const Shot = ({
  src,
  alt,
  width,
  height,
  priority = false,
  url = "aurex-assembly.vercel.app",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  url?: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-slate-900/90 shadow-2xl overflow-hidden backdrop-blur-xl">
    <div className="flex items-center gap-2 border-b border-white/10 bg-slate-950/60 px-4 py-3">
      <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
      <span className="ml-3 font-mono text-[10px] text-slate-500">{url}</span>
    </div>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      sizes="(min-width: 1024px) 560px, 100vw"
      className="w-full h-auto"
    />
  </div>
);

const pasos = [
  {
    titulo: "Preparación de la asamblea",
    items: [
      "Ingresa al Panel Administrativo de Aurex.",
      "Carga el padrón de propietarios (Torre, Apartamento, Coeficiente).",
      "En la pestaña “3. Intervenciones”, pega el enlace de Zoom o Meet para la transmisión.",
    ],
    img: { src: "/img/aurex-assembly/importar-propietarios.png", alt: "Pantalla para importar propietarios desde un archivo de Excel en Aurex Assembly", w: 1920, h: 922 },
  },
  {
    titulo: "Durante el registro (check-in)",
    items: [
      "A medida que llegan los propietarios, haz clic en “Titular” o “Poder” (delegado) en la pestaña “1. Padrón y Asistencia”.",
      "El sistema genera un PIN de 4 dígitos que entregas al propietario.",
      "El propietario ingresa al portal con su apartamento y el PIN asignado.",
    ],
    img: { src: "/img/aurex-assembly/sala-padron.png", alt: "Sala de control de Aurex Assembly con el padrón, el PIN de cada propietario, el coeficiente y el quórum", w: 1908, h: 919 },
  },
  {
    titulo: "Lanzar votaciones",
    items: [
      "Ve a la pestaña “2. Votaciones en Vivo”.",
      "Escribe la pregunta y presiona Abrir Votación.",
      "Las pantallas de los propietarios cambian automáticamente y el quórum se calcula en vivo.",
      "Presiona Cerrar Votación para sellar los resultados.",
    ],
    img: { src: "/img/aurex-assembly/sala-votaciones.png", alt: "Pestaña de votaciones en vivo de la sala de control con el botón Abrir Votación y los resultados", w: 1885, h: 876 },
  },
  {
    titulo: "Moderación del debate",
    items: [
      "Si un propietario levanta la mano virtualmente, aparece en la cola con estado “Esperando Turno”.",
      "Haz clic en Dar Palabra para avisarle que puede encender su micrófono en Zoom o Meet.",
      "Al terminar, marca Terminar Intervención para avanzar al siguiente.",
    ],
    img: { src: "/img/aurex-assembly/sala-intervenciones.png", alt: "Cola de peticiones de palabra y enlace de transmisión de Zoom o Meet en la sala de control", w: 1920, h: 927 },
  },
];

const faqs = [
  {
    q: "¿Los propietarios tienen que descargar una aplicación o crear una cuenta?",
    a: "No. Cada propietario ingresa desde el navegador de su celular o computador con su número de apartamento y el PIN de 4 dígitos que recibe en el registro. No hay contraseñas ni instalaciones.",
  },
  {
    q: "¿Cómo se calcula el quórum?",
    a: "Por coeficiente de copropiedad, no por número de personas. Cada vez que registras a un propietario o a un apoderado, el quórum se actualiza en tiempo real en la sala de control.",
  },
  {
    q: "¿Funciona con Zoom o Google Meet?",
    a: "Sí. Pegas el enlace de la reunión en la pestaña de intervenciones y lo compartes con los propietarios desde Aurex. La plataforma ordena los turnos de palabra y tú das el micrófono en Zoom o Meet a quien esté hablando.",
  },
  {
    q: "¿Qué pasa con los propietarios que asisten con poder?",
    a: "En el padrón registras a cada inmueble como “Titular” o “Poder” (delegado). El sistema genera el PIN y deja constancia del delegado en el padrón.",
  },
  {
    q: "¿Qué incluye el acta que se descarga?",
    a: "Un archivo de Excel con tres pestañas certificadas: asistencia total, resultados electorales y detalle por inmueble. Se genera con un clic al finalizar la asamblea.",
  },
  {
    q: "¿Cuánto cuesta y cómo empiezo?",
    a: "Cotizamos según las necesidades de tu copropiedad o administradora. Solicita una demostración y te enviamos una propuesta; también puedes explorar la plataforma desde el enlace de demo.",
  },
];

const SoftwareAsambleasLanding = () => {
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
      mensaje: `DEMO AUREX ASSEMBLY: Solicitud de demostración (Landing Software de Asambleas). Teléfono del prospecto: ${formData.telefono}`,
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
        window.gtag("event", "conversion", { send_to: "AW-17918400821/qQEvCIClg_IbELWyloBC", value: 1.0, currency: "COP" });
      }

      setStatus({ loading: false, success: "¡Solicitud recibida! Te contactaremos pronto para agendar tu demostración de Aurex Assembly.", error: null });
      setFormData({ nombre: "", correo: "", empresa: "", telefono: "" });
    } catch (err) {
      setStatus({ loading: false, success: null, error: "No se pudo procesar la solicitud." });
    }
  };

  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 pt-32 pb-20 px-6 md:px-20 relative overflow-hidden">
      {/* Luz ambiental Azul */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-blue-600/15 blur-[140px] rounded-full -z-10 pointer-events-none" />

      <div className="mx-auto max-w-6xl">
        <Link href="/" className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-10 w-fit">
          <ArrowLeft size={16} /> Volver al Inicio
        </Link>

        {/* 1. HERO SECTION */}
        <section className="text-center mb-16 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(37,99,235,0.2)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Aurex Assembly · Software para asambleas de copropietarios en Colombia
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight">
            Asambleas de propiedad horizontal sin filas ni planillas y <br className="hidden md:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300">con acta automática</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto font-light">
            Plataforma en la nube diseñada para asambleas de copropietarios. Garantiza la legalidad de las decisiones, elimina las filas de registro y genera el acta por ti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#solicitar-demo" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(37,99,235,0.6)] hover:-translate-y-0.5">
              Solicitar demostración <ChevronRight size={18} />
            </a>
            <a href="https://aurex-assembly.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-transparent border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all">
              Explorar la plataforma <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Captura principal */}
        <section className="mb-16 max-w-5xl mx-auto">
          <Shot
            src="/img/aurex-assembly/sala-padron.png"
            alt="Sala de control de Aurex Assembly con padrón de propietarios, coeficientes y quórum en tiempo real"
            width={1908}
            height={919}
            priority
          />
        </section>

        {/* 2. TRUST BADGES */}
        <section className="mb-24 border-y border-white/10 py-8 bg-white/[0.02] backdrop-blur-sm rounded-2xl">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-black text-xl text-white"><KeyRound className="text-amber-400" size={22} /> PIN de 4 dígitos</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Smartphone size={20} className="text-emerald-400" /> Sin apps ni contraseñas</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Scale size={20} className="text-blue-400" /> Quórum por coeficiente</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><Video size={20} className="text-cyan-400" /> Zoom y Meet</div>
            <div className="flex items-center gap-2 font-bold text-lg text-white"><FileSpreadsheet size={20} className="text-green-400" /> Acta en Excel</div>
          </div>
        </section>

        {/* 3. VALOR DIFERENCIADOR */}
        <section className="mb-24">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <span className="text-blue-400 font-bold uppercase tracking-widest text-xs">Producto SaaS</span>
            <h2 className="text-3xl font-extrabold text-white mt-2 mb-4">Cuatro razones para llevar tu asamblea a Aurex</h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Aurex Assembly está pensada para el flujo real de una asamblea en Colombia: registrar, votar, debatir y documentar sin fricción.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
              <div className="inline-flex p-3 bg-amber-500/10 rounded-2xl mb-4 text-amber-400"><Zap size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-2">Velocidad y cero fricción</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Check-in digital mediante PIN dinámico. Sin planillas de papel, sin descargar aplicaciones ni crear contraseñas: ingreso directo desde el navegador.</p>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
              <div className="inline-flex p-3 bg-blue-500/10 rounded-2xl mb-4 text-blue-400"><Scale size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-2">Precisión legal</h3>
              <p className="text-slate-400 text-sm leading-relaxed">El quórum no se cuenta por personas, sino por coeficiente de copropiedad, calculado estrictamente en tiempo real.</p>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
              <div className="inline-flex p-3 bg-cyan-500/10 rounded-2xl mb-4 text-cyan-400"><MessageSquare size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-2">Orden en el debate</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Módulo de debate con cola de peticiones de palabra, para evitar interrupciones y caos en la videollamada.</p>
            </div>
            <div className="bg-slate-900/50 border border-white/5 p-8 rounded-3xl hover:border-blue-500/30 transition-colors">
              <div className="inline-flex p-3 bg-emerald-500/10 rounded-2xl mb-4 text-emerald-400"><FileSpreadsheet size={24} /></div>
              <h3 className="text-xl font-bold text-white mb-2">Auditoría inmediata</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Descarga automática del acta en Excel con el padrón electoral certificado y los resultados exactos de cada votación.</p>
            </div>
          </div>
        </section>

        {/* 4. PAIN POINT COMPARISON */}
        <section className="mb-24">
          <h2 className="text-3xl font-extrabold text-center text-white mb-12">La asamblea tradicional vs. La asamblea con Aurex</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900/40 border border-red-500/20 p-8 rounded-3xl relative overflow-hidden backdrop-blur-sm">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><XCircle className="text-red-400" /> Asamblea Tradicional</h3>
              <ul className="space-y-4 text-slate-400 text-sm">
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Filas de registro con planillas de papel a la entrada.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Quórum contado a mano, con riesgo de errores y discusiones.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Videollamadas caóticas, con interrupciones y sin turnos.</li>
                <li className="flex items-start gap-3"><span className="text-red-500 font-bold">✕</span> Acta armada después, a partir de notas y hojas sueltas.</li>
              </ul>
            </div>
            <div className="bg-blue-900/20 border border-blue-500/40 p-8 rounded-3xl relative overflow-hidden backdrop-blur-md">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3"><CheckCircle2 className="text-blue-400" /> Flujo Aurex Assembly</h3>
              <ul className="space-y-4 text-slate-200 text-sm">
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span> Check-in digital con PIN de 4 dígitos, desde el navegador.</li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span> Quórum por coeficiente de copropiedad, calculado en tiempo real.</li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span> Cola de peticiones de palabra: habla una persona a la vez.</li>
                <li className="flex items-start gap-3"><span className="text-blue-400 font-bold">✓</span> Acta en Excel generada automáticamente al terminar.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 5. GUÍA RÁPIDA DE OPERACIÓN */}
        <section className="mb-24 bg-blue-900/10 border border-blue-500/20 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm">
          <div className="text-center mb-14 relative z-10">
            <h2 className="text-3xl font-extrabold text-white mb-4">Así funciona una asamblea en Aurex</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Cinco pasos para administrar la asamblea de principio a fin, desde el panel del administrador.</p>
          </div>

          <div className="space-y-16 relative z-10">
            {pasos.map((paso, i) => (
              <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
                <div className={cn(i % 2 === 1 ? "md:order-last" : "")}>
                  <div className="text-5xl font-black text-blue-500/30 mb-2">{`0${i + 1}`}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{paso.titulo}</h3>
                  <ul className="space-y-3">
                    {paso.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Shot src={paso.img.src} alt={paso.img.alt} width={paso.img.w} height={paso.img.h} />
                </div>
              </div>
            ))}

            {/* Paso 5: Cierre y actas */}
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-5xl font-black text-blue-500/30 mb-2">05</div>
                <h3 className="text-2xl font-bold text-white mb-4">Cierre y actas</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Al finalizar, haz clic en el botón verde Descargar Acta. El sistema exporta un documento de Excel con 3 pestañas certificadas:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" /> <span>Asistencia total</span></li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" /> <span>Resultados electorales</span></li>
                  <li className="flex items-start gap-3 text-sm text-slate-300"><CheckCircle2 size={18} className="text-blue-400 shrink-0 mt-0.5" /> <span>Detalle por inmueble</span></li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-900/90 p-5 font-mono text-xs shadow-2xl relative backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-slate-500 text-[10px]">acta-asamblea.xlsx</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">1. Asistencia Total</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px]">2. Resultados Electorales</span>
                  <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-400 text-[10px]">3. Detalle por Inmueble</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-[10px] text-slate-500 border-b border-white/10 pb-2 mb-2">
                  <span>Inmueble</span>
                  <span>Calidad</span>
                  <span className="text-right">Coef.</span>
                </div>
                <div className="space-y-2 text-slate-300">
                  <div className="grid grid-cols-3 gap-2"><span>Torre 1-Apto 101</span><span>Titular</span><span className="text-right">0.025%</span></div>
                  <div className="grid grid-cols-3 gap-2"><span>Torre 2-Apto 101</span><span>Titular</span><span className="text-right">0.025%</span></div>
                  <div className="grid grid-cols-3 gap-2"><span>Torre 3-Apto 101</span><span>Poder</span><span className="text-right">0.025%</span></div>
                </div>
                <div className="my-3 p-2.5 rounded bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 flex items-center justify-between">
                  <span>Padrón electoral certificado</span>
                  <span className="text-[10px] font-bold bg-emerald-500/20 px-2 py-0.5 rounded">EXCEL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. LO QUE VE EL PROPIETARIO */}
        <section className="mb-24">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4 text-blue-400">
              <Smartphone size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">Lo que ve el propietario</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Un portal simple, desde el navegador del celular o del computador. Ingresa con su apartamento y su PIN, pide la palabra y vota cuando se abre una decisión.
            </p>
          </div>
          <div className="grid md:grid-cols-[320px_1fr] gap-8 items-center">
            <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-w-xs mx-auto w-full">
              <Image
                src="/img/aurex-assembly/ingreso-propietario.png"
                alt="Portal de ingreso de copropietarios con número de apartamento y PIN de acceso"
                width={450}
                height={554}
                sizes="320px"
                className="w-full h-auto"
              />
            </div>
            <div>
              <Shot
                src="/img/aurex-assembly/pantalla-propietario.png"
                alt="Pantalla del propietario con el botón Pedir la palabra, estado de espera de votación y su coeficiente"
                width={1919}
                height={918}
                url="Vista del propietario"
              />
              <div className="grid sm:grid-cols-3 gap-4 mt-6">
                <div className="bg-slate-900/50 border border-white/5 p-4 rounded-xl">
                  <KeyRound size={18} className="text-amber-400 mb-2" />
                  <p className="text-xs text-slate-300">Ingreso con apartamento y PIN de 4 dígitos.</p>
                </div>
                <div className="bg-slate-900/50 border border-white/5 p-4 rounded-xl">
                  <MessageSquare size={18} className="text-cyan-400 mb-2" />
                  <p className="text-xs text-slate-300">Botón para pedir la palabra y entrar a la cola.</p>
                </div>
                <div className="bg-slate-900/50 border border-white/5 p-4 rounded-xl">
                  <Scale size={18} className="text-blue-400 mb-2" />
                  <p className="text-xs text-slate-300">Las opciones de voto aparecen solas cuando se abre una votación.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. RECORRIDO POR EL PANEL */}
        <section className="mb-24">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold text-white mb-4">Configura todo en minutos</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Registra el conjunto, programa la asamblea y entra a la sala de control desde un panel claro. Haz clic en cada captura para verla completa.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { src: "/img/aurex-assembly/configurar-conjunto.png", w: 1920, h: 914, titulo: "Registra el conjunto", desc: "Nombre, NIT opcional y total de unidades de la copropiedad.", alt: "Formulario para registrar un conjunto residencial en Aurex Assembly" },
              { src: "/img/aurex-assembly/crear-asamblea.png", w: 1920, h: 923, titulo: "Programa la asamblea", desc: "Elige tipo (ordinaria o extraordinaria), modalidad, fecha y hora.", alt: "Formulario para programar una nueva asamblea con tipo, modalidad, fecha y hora" },
              { src: "/img/aurex-assembly/mis-asambleas.png", w: 1920, h: 919, titulo: "Entra a la sala de control", desc: "Gestiona las reuniones de tu copropiedad desde un solo lugar.", alt: "Listado Mis Asambleas con el acceso a la sala de control" },
            ].map((card, i) => (
              <a key={i} href={card.src} target="_blank" rel="noopener noreferrer" className="group block bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-colors">
                <Image src={card.src} alt={card.alt} width={card.w} height={card.h} sizes="(min-width: 768px) 360px, 100vw" className="w-full h-auto border-b border-white/5" />
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-1">{card.titulo}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* 8. CASOS DE USO */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-blue-500/10 rounded-2xl mb-4 text-blue-400">
              <Briefcase size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white mb-4">¿Dónde aplica esta solución?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm">Para administradores, consejos y empresas administradoras que quieren asambleas ordenadas y bien documentadas.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Asambleas ordinarias anuales de copropietarios.",
              "Asambleas extraordinarias con votaciones puntuales.",
              "Asambleas híbridas, con asistentes presenciales y virtuales.",
              "Asambleas 100% virtuales por Zoom o Google Meet.",
              "Registro de propietarios y apoderados con poder o delegado.",
              "Administradoras que gestionan varios conjuntos desde un solo panel."
            ].map((uso, i) => (
              <div key={i} className="bg-slate-900/50 border border-white/5 p-6 rounded-2xl flex items-start gap-4 hover:border-blue-500/30 transition-colors">
                <CheckCircle2 size={20} className="text-blue-400 shrink-0 mt-0.5" />
                <p className="text-slate-300 text-sm">{uso}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 9. PREGUNTAS FRECUENTES */}
        <section className="mb-24 max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center p-3 bg-slate-800 rounded-2xl mb-4 text-slate-300">
              <HelpCircle size={28} />
            </div>
            <h2 className="text-3xl font-extrabold text-white">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="group border border-white/10 bg-slate-900/40 rounded-xl overflow-hidden backdrop-blur-sm">
                <summary className="cursor-pointer p-6 font-semibold text-white flex justify-between items-center group-open:text-blue-400 transition-colors list-none">
                  {faq.q}
                  <ChevronDown size={18} className="group-open:rotate-180 transition-transform text-slate-500 shrink-0 ml-4" />
                </summary>
                <div className="p-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* 10. CIERRE COMERCIAL */}
        <section className="mb-24 bg-gradient-to-br from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-3xl p-10 text-center shadow-[0_0_40px_rgba(37,99,235,0.1)] relative overflow-hidden">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />
          <PhoneCall size={40} className="mx-auto text-blue-400 mb-6" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 relative z-10">¿Lista tu próxima asamblea para hacerse sin filas?</h2>
          <p className="text-slate-300 max-w-2xl mx-auto mb-8 relative z-10">
            Agenda una demostración sin compromiso y mira cómo Aurex Assembly registra, calcula el quórum, modera el debate y entrega el acta por ti.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <a href="#solicitar-demo" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-blue-500/25">
              Solicitar demostración
            </a>
            <Link href="/#contact" className="w-full sm:w-auto bg-transparent border border-blue-500/30 text-blue-400 hover:bg-blue-500/10 font-bold py-4 px-8 rounded-full transition-all">
              Consultar mi proyecto
            </Link>
          </div>
        </section>

        {/* 11. FORMULARIO DE DEMOSTRACIÓN */}
        <section id="solicitar-demo" className="max-w-3xl mx-auto bg-slate-900/90 p-8 md:p-12 rounded-3xl border border-blue-500/30 shadow-[0_0_50px_rgba(37,99,235,0.2)] relative overflow-hidden backdrop-blur-xl">
          <div className="absolute top-0 right-0 p-32 bg-blue-500/10 blur-[80px] rounded-full pointer-events-none" />

          <div className="text-center mb-8 relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 px-3 py-1 rounded-full inline-block mb-3">Demostración Gratuita</span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Solicita una demostración de Aurex Assembly</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Déjanos tus datos y te mostramos la plataforma con el caso de tu conjunto o administradora.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Nombre Completo" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              <input type="email" name="correo" value={formData.correo} onChange={handleChange} placeholder="Correo Electrónico" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input type="text" name="empresa" value={formData.empresa} onChange={handleChange} placeholder="Conjunto o Administradora" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
              <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} placeholder="Teléfono / WhatsApp" required className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm" />
            </div>

            <button type="submit" disabled={status.loading} className={cn("w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg text-sm", status.loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.01]")}>
              <CalendarCheck size={18} /> {status.loading ? "Enviando solicitud..." : "Solicitar demostración"}
            </button>

            {status.success && <p className="text-blue-400 text-sm font-bold text-center mt-4 bg-blue-500/10 border border-blue-500/20 p-3 rounded-lg">{status.success}</p>}
            {status.error && <p className="text-red-400 text-sm font-bold text-center mt-4 bg-red-500/10 border border-red-500/20 p-3 rounded-lg">{status.error}</p>}
          </form>
        </section>
      </div>
    </main>
  );
};

export default SoftwareAsambleasLanding;
