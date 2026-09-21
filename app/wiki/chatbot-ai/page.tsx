import Link from "next/link";
import { ArrowLeft, Bot, Activity, Terminal, Key, Cpu } from "lucide-react";

export default function QAChatbotAI() {
  return (
    <main className="min-h-screen bg-blue-950 text-slate-200 py-12 px-6 md:px-20">
      <div className="mx-auto max-w-4xl">
        <Link 
          href="/wiki" 
          className="flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors mb-8 w-fit"
        >
          <ArrowLeft size={16} />
          Volver a la Wiki
        </Link>

        <article className="rounded-2xl border border-white/10 bg-slate-900/50 p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          <header className="mb-10 border-b border-white/10 pb-8">
            <div className="flex items-center gap-3 mb-4 text-blue-400">
              <Bot size={20} />
              <span className="font-semibold tracking-wider uppercase text-xs">AI & API Integration</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Debugging de Streams en Vercel AI SDK: Falsos Positivos HTTP 200
            </h1>
            <p className="text-slate-400 text-lg">
              Resolución de cortes abruptos en el flujo de datos (Server-Sent Events) causados por asimetría de configuración entre el entorno local y el despliegue de producción.
            </p>
          </header>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <Activity size={24} />
              <h2 className="text-2xl font-bold text-white">1. Contexto y Falla Reportada</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Se implementó un chatbot utilizando <strong>Next.js App Router</strong>, <strong>Vercel AI SDK</strong> y la API de <strong>OpenAI</strong>. Al desplegar a producción, la interfaz del chat permitía enviar el mensaje, pero retornaba inmediatamente un mensaje de error genérico en el frontend: <em>"No pude procesar tu mensaje. Inténtalo nuevamente."</em>
            </p>
            <p className="text-slate-300 leading-relaxed">
              La inspección inicial en las DevTools del navegador reveló un comportamiento inusual: la petición POST hacia la ruta <code>/api/chat</code> retornaba un código de estado <strong>200 OK</strong> de manera instantánea, pero la respuesta no contenía el payload esperado.
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Terminal size={24} />
              <h2 className="text-2xl font-bold text-white">2. Análisis del Defecto (QA)</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Dado que la arquitectura utiliza <code>text/event-stream</code> para transmitir la respuesta palabra por palabra, el servidor Next.js abre la conexión y responde con el <code>200 OK</code> antes de que OpenAI comience a procesar el texto. Al revisar la lógica del backend en el archivo <code>route.ts</code>, se detectaron dos puntos de fallo crítico:
            </p>
            <ul className="space-y-4 text-slate-300 bg-white/5 p-6 rounded-xl border border-white/10">
              <li className="flex items-start gap-3">
                <Cpu className="text-blue-400 shrink-0 mt-1" size={18} />
                <p><strong>Configuración de Modelo Inválida:</strong> El código solicitaba el modelo <code>"gpt-5.6-luna"</code>, un identificador inexistente en la API oficial. OpenAI rechazaba la petición milisegundos después de que Vercel ya había respondido al cliente con el 200 OK, rompiendo el stream.</p>
              </li>
              <li className="flex items-start gap-3">
                <Key className="text-blue-400 shrink-0 mt-1" size={18} />
                <p><strong>Variables de Entorno Omitidas:</strong> La credencial <code>OPENAI_API_KEY</code> estaba configurada en el archivo local <code>.env</code>, pero por políticas de seguridad de Git, este archivo no se sube al repositorio. El contenedor de producción de Vercel carecía de autorización para comunicarse con el proveedor de IA.</p>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <Activity size={24} />
              <h2 className="text-2xl font-bold text-white">3. Implementación de la Solución</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              La corrección se ejecutó en dos fases garantizando la alineación entre código e infraestructura:
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-300 ml-2">
              <li>Refactorización del bloque <code>streamText</code> en <code>app/api/chat/route.ts</code> para apuntar a un modelo válido y optimizado para respuestas rápidas (<code>gpt-4o-mini</code>).</li>
              <li>Inyección manual de la variable de entorno <code>OPENAI_API_KEY</code> a través del panel de Settings de Vercel, asegurando que la clave secreta resida exclusivamente en el servidor de producción.</li>
              <li>Ejecución de un nuevo despliegue (Redeploy) para que la instancia de Vercel absorbiera las nuevas variables de entorno.</li>
            </ol>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <Bot size={24} />
              <h2 className="text-2xl font-bold text-white">4. Impacto</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              El asistente ahora procesa y transmite las respuestas mediante <em>Server-Sent Events (SSE)</em> sin interrupciones. Este caso valida la importancia de auditar arquitecturas orientadas a flujos en tiempo real, donde un estado HTTP exitoso en el nivel de red no siempre equivale a un procesamiento lógico exitoso en el backend.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}