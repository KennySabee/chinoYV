import Head from "next/head";
import Hero from "@/components/Hero";
import QuienesSomos from "@/components/QuienesSomos";
import Cursos from "@/components/Cursos";
import Galeria from "@/components/Galeria";
import { SliderData } from "@/components/SliderData";
import EquipoDocente from "@/components/EquipoDocente";
import Testimonios2 from "@/components/Testimonios2";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        <title>Club Chino YV | Academia de Chino Mandarin</title>
      </Head>
      <Hero message="Aprende el idioma del futuro" />
      <QuienesSomos />
      <Cursos />
      <Testimonios2 />
      <Galeria slides={SliderData} />      
      <EquipoDocente />
      <Contact />
    </>
  );
}
