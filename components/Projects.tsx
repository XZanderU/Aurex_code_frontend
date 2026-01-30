"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  category: string;
  desc: string;
  img: string;
  size: string;
  link: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Recipes Generator",
    category: "Fullstack / Cloud AI",
    desc: "Aplicación que utiliza Claude 3 Sonnet para generar recetas basadas en ingredientes. Construida con React, TypeScript y desplegada en AWS Amplify.",
    img: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1200&q=80",
    size: "md:col-span-2 md:row-span-2",
    link: "https://github.com/XZanderU",
  },
  {
    id: 2,
    title: "User Management API",
    category: "Backend / .NET",
    desc: "API REST robusta desarrollada con C#, Entity Framework Core y SQLite para la gestión escalable de usuarios.",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc48?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-1 md:row-span-1",
    link: "https://github.com/XZanderU"
  },
  {
    id: 3,
    title: "Virtual R Landing Page",
    category: "Frontend / React",
    desc: "Interfaz moderna y responsiva orientada a la conversión, desarrollada con React, JavaScript y Tailwind CSS.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-1 md:row-span-1",
    link: "https://virtual-r-lake.vercel.app/"
  },
  {
    id: 4,
    title: "Professional Portfolio",
    category: "UX / Motion Design",
    desc: "Plataforma personal de alto impacto visual utilizando animaciones fluidas y una estética premium.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    size: "md:col-span-2 md:row-span-1",
    link: "https://github.com/XZanderU"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent px-6 overflow-hidden">
      <div className="max-w-[1920px] mx-auto md:px-12">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div>
            <span className="text-orange-500 font-bold tracking-[0.4em] uppercase text-xs">
              Desarrollo Destacado
            </span>
            <h2 className="text-5xl md:text-7xl font-bold text-orange-50 mt-4 tracking-tighter italic">
              Proyectos <span className="text-orange-500 not-italic">Reales.</span>
            </h2>
          </div>
          
          <p className="text-slate-400 max-w-sm text-lg md:text-right font-light">
            Especializado en arquitecturas **.NET**, integración de **servicios AWS** y desarrollo frontend con **React y Nextjs**.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {PROJECTS.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ animationDelay: `${index * 100}ms` }}
              className={cn(
                "relative group overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/20 backdrop-blur-md transition-all duration-500 hover:border-orange-500/30 animate-in fade-in slide-in-from-bottom-10 fill-mode-both",
                project.size
              )}
            >
              {/* NEXT.JS IMAGE OPTIMIZED */}
              <div className="absolute inset-0 -z-10">
                <Image 
                  src={project.img} 
                  alt={project.title}
                  fill
                  className="object-cover grayscale brightness-[0.35] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
              </div>

              {/* OVERLAY GRADIENT */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-900/20 to-transparent -z-10 opacity-80 group-hover:opacity-60 transition-opacity" />

              {/* CONTENT */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="block text-orange-500 font-bold uppercase tracking-widest text-[10px] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {project.category}
                </span>
                
                <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tighter mb-2">
                  {project.title}
                </h3>
                
                <p className="text-slate-300/70 text-sm max-w-xs opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  {project.desc}
                </p>

                <div className="mt-6 flex items-center gap-2 text-white font-bold text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                  <span className="h-[1px] w-8 bg-orange-500 group-hover:w-12 transition-all duration-500"></span>
                  Ver Repositorio
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;