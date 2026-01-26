import Hero from "@/components/Inicio"; // Asegúrate de que el archivo se llame Inicio.tsx
import Services from "@/components/Services";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Las próximas secciones aquí abajo */}
    </>
  );
}