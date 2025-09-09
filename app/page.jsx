// app/page.jsx
import Navbar from "@/app/components/Navbar2";
import Hero from "@/app/components/Hero";
import Cursos from "@/app/components/Cursos";
import Testimonios from "@/app/components/Testimonios2";
import Galeria from "@/app/components/Galeria";
import Contact from "@/app/components/Contact";
import Footer from '@/app/components/Footer'
import QuienesSomos from "@/app/components/QuienesSomos";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <QuienesSomos />
        <Cursos />
        <Testimonios />
        <Galeria />
        <Contact />
      </main>
      <Footer /> 
    </div>
  );
}
