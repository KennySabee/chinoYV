import React from "react";
import quienesSomosImg from "@/public/assets/quienesSomosChinoYV.jpg";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const QuienesSomos = () => {
  return (
    <section
      id="quienessomos"
      className="w-full  px-2 flex items-center py-16 "
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          
          <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold">
          <Typewriter
              options={{
                strings: [ "Quienes somos","关于我们"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
                
              }}
              
              
            />
          </div>
          <h2 className="py-4">Chino YV</h2>
          
          <p className="py-2 text-gray-600">
          Somos un equipo de profesionales con varios años de experiencia en la enseñanza del idioma chino mandarín. Nuestra experiencia de vida en China nos ha brindado la oportunidad de conocer una cultura extraordinaria y poder aprender el idioma. En los últimos años China se ha convertido en una gran potencia mundial en todos los niveles, llegando a ser uno de los principales socios comerciales con varios países en el mundo. Es por esta razón que actualmente se considera al Idioma Chino Mandarín como el “Idioma del Futuro”. 
          </p>
          <p className="py-2 text-gray-600">
          En nuestra Academia todos nuestros cursos están enfocados en la preparación para el examen de suficiencia en el idioma llamado HSK (汉语水平考试). Ofrecemos clases Online y Presenciales con metodología grupal y personalizada. Aprende el idioma del futuro con nosotros! 学汉语吧!
          </p>
          <Link href="/#cursos">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Mira nuestros cursos.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={quienesSomosImg} alt="quienes somos" />
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
