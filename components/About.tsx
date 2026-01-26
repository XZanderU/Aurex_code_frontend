"use client";

import Image from "next/image";


interface Technology {
  name: string;
  src: string;
}

const technologies: Technology[] = [
  { name: "React", src: "/tech/react.svg" },
  { name: "C#", src: "/tech/csharp.svg" },
  { name: "Node.js", src: "/tech/node.svg" },
  { name: "JavaScript", src: "/tech/javascript.svg" },
  { name: "n8n", src: "/tech/n8n.svg" },
];

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-transparent px-6 overflow-hidden">
      {/* Glow decorativo azul de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-8 animate-in fade-in slide-in-from-left-8 duration-1000 ease-out">
          <div>
            <p className="text-orange-500 font-bold tracking-[0.3em] uppercase text-sm mb-4">
              Sobre mí
            </p>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tighter text-orange-50">
              Construyo software con <br />
              <span className="text-orange-500 italic font-light text-4xl md:text-6xl">
                enfoque real en negocio.
              </span>
            </h2>
            <p className="text-slate-300/80 text-lg md:text-xl leading-relaxed max-w-xl">
              Desarrollo soluciones digitales modernas, escalables y bien pensadas.
              <span className="block mt-4 text-orange-50/90 font-medium">
                Combino ingeniería, automatización y diseño para crear productos que funcionan y crecen.
              </span>
            </p>
          </div>

          {/* TECH STACK GRID */}
          <div className="pt-4">
            <p className="text-orange-500 uppercase tracking-widest text-[10px] font-black mb-6">
              Stack tecnológico
            </p>
            <div className="flex flex-wrap gap-4">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-4 px-5 py-3 rounded-xl border border-blue-500/10 bg-slate-900/40 backdrop-blur-sm hover:border-orange-500/30 transition-colors duration-300 group"
                >
                  <div className="relative w-6 h-6 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                    {/* Asegúrate de tener estos SVGs en /public/tech/ */}
                    <Image
                      src={tech.src}
                      alt={tech.name}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-slate-300 text-sm font-medium group-hover:text-orange-50 transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA LINK */}
          <div className="pt-4">
            <button className="flex items-center gap-4 group cursor-pointer outline-none">
              <div className="w-12 h-px bg-orange-500 group-hover:w-20 transition-all duration-500"></div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs">
                Leer más sobre mi visión
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE BLOCK */}
        <div className="relative animate-in fade-in zoom-in-95 duration-1000 delay-200">
          <div className="relative h-125 w-full rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-slate-900/40 group">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Equipo trabajando"
              fill
              className="object-cover mix-blend-luminosity opacity-50 group-hover:opacity-100 group-hover:mix-blend-normal group-hover:scale-105 transition-all duration-1000"
            />
            {/* Overlay para mezclar con el fondo azul */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-transparent to-transparent" />
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 -left-6 bg-orange-500 p-8 rounded-2xl shadow-2xl animate-in slide-in-from-bottom-10 duration-700 delay-500 hidden lg:block hover:scale-105 transition-transform">
            <p className="text-4xl font-black text-slate-950">3+</p>
            <p className="text-slate-900 font-bold text-xs uppercase tracking-tighter leading-none">
              Años de <br />Experiencia
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;