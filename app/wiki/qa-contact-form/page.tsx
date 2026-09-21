import Link from "next/link";
import { ArrowLeft, Bug, Activity, GitBranch, CheckCircle } from "lucide-react";

export default function QAVercelDeployment() {
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
              <Activity size={20} />
              <span className="font-semibold tracking-wider uppercase text-xs">DevOps & QA Case Study</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Troubleshooting en Producción: Caché de Vercel y Desincronización de Ramas
            </h1>
            <p className="text-slate-400 text-lg">
              Análisis de un falso positivo en un despliegue donde los cambios locales no se reflejaban en el dominio principal debido a la persistencia de caché y conflictos en el control de versiones.
            </p>
          </header>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-orange-400">
              <Bug size={24} />
              <h2 className="text-2xl font-bold text-white">1. El Incidente (Síntomas)</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Durante el despliegue de una refactorización en un formulario de contacto de Next.js (App Router), se reportó que el sistema seguía enviando las peticiones HTTP a un webhook obsoleto de n8n, a pesar de que el código fuente local ya había sido actualizado para apuntar a un nuevo endpoint interno (`/api/contact`).
            </p>
            <p className="text-slate-300 leading-relaxed">
              La consola de Vercel indicaba que el <em>build</em> había sido exitoso y el estado de Git local mostraba el árbol de trabajo limpio, generando una discrepancia silenciosa entre el entorno de desarrollo y producción.
            </p>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-purple-400">
              <Activity size={24} />
              <h2 className="text-2xl font-bold text-white">2. Auditoría y Diagnóstico QA</h2>
            </div>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0"></span>
                <p><strong>Inspección de Red (DevTools):</strong> Se interceptó la carga útil del formulario deshabilitando la caché del navegador local. Se comprobó que el <em>Request URL</em> efectivamente seguía apuntando al entorno de n8n, confirmando que Vercel estaba sirviendo un artefacto de código antiguo.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0"></span>
                <p><strong>Análisis de Capas de Caché:</strong> Se intentó una purga del Full Route Cache y el Data Cache desde la infraestructura CDN de Vercel para descartar la retención agresiva de Next.js. El problema persistió.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-purple-500 shrink-0"></span>
                <p><strong>Revisión de Control de Versiones:</strong> Al auditar el flujo CI/CD, se descubrió la causa raíz: el repositorio local estaba realizando <em>pushes</em> a la rama <code>master</code>, mientras que Vercel estaba configurado para escuchar y compilar exclusivamente los cambios en la rama <code>main</code>.</p>
              </li>
            </ul>
          </section>

          <section className="mb-10">
            <div className="flex items-center gap-2 mb-4 text-blue-400">
              <GitBranch size={24} />
              <h2 className="text-2xl font-bold text-white">3. La Solución (Resolución)</h2>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              Para estandarizar el proyecto con las convenciones actuales de la industria y restablecer el flujo de integración continua, se ejecutaron las siguientes acciones correctivas:
            </p>
            <div className="bg-slate-950 rounded-xl p-5 border border-white/5 font-mono text-sm text-slate-300 mb-4">
              <p className="text-slate-500 mb-2">// 1. Migración de la rama local</p>
              <p className="text-blue-300">$ git branch -M main</p>
              <br />
              <p className="text-slate-500 mb-2">// 2. Sincronización con el origen remoto</p>
              <p className="text-blue-300">$ git push -u origin main</p>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Finalmente, desde el panel de Vercel, se restableció la asignación automática de dominios (Auto-assign custom domains) a la nueva rama <code>main</code>, logrando un despliegue exitoso donde el tráfico HTTP se enrutó correctamente hacia el nuevo endpoint de Nodemailer.
            </p>
          </section>

          <section>
            <div className="flex items-center gap-2 mb-4 text-emerald-400">
              <CheckCircle size={24} />
              <h2 className="text-2xl font-bold text-white">4. Lecciones Aprendidas</h2>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Un despliegue exitoso en consola no garantiza la entrega de valor al cliente. Este caso subraya la importancia de triangular las pruebas combinando herramientas de caja negra (interfaz), caja blanca (código local) y observabilidad de red (DevTools) para detectar brechas en la infraestructura CI/CD.
            </p>
          </section>
        </article>
      </div>
    </main>
  );
}