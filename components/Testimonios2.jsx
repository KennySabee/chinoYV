import React from "react";
import TestimonioCard from "@/components/TestimonioCard";
import Typewriter from "typewriter-effect";
import testimonio1 from "@/public/assets/testimonios/vanessaMena.jpg";
import testimonio2 from "@/public/assets/testimonios/traceyElizabeth.jpg";
import testimonio3 from "@/public/assets/testimonios/pamelaSuarez.jpg";
import testimonio4 from "@/public/assets/testimonios/alexanderAndrade.jpg";
import TestimonioVideo from '@/components/TestimonioVideo'


const Testimonios2 = () => {
  return (
    <section id="testimonios" className="w-full  px-2 py-16">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold">
          <Typewriter
            options={{
              strings: ["Testimonios", "感言"],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              cursor: "",
            }}
          />
        </div>
        <h2 className="py-4">Lo que nuestros alumnos dicen</h2>

        <div className="grid mb-5  rounded-lg md:mb-12 md:grid-cols-2 pt-4  ">
          <TestimonioCard
            title={"Excelente metodología de aprendizaje!"}
            info={`" Las clases son muy dinámicas y divertidas. ❤️💯💯
          "`}
            name={"Vanessa Mena"}
            profession={"Arquitecta"}
            img={testimonio1}
          />
          <div className="hidden md:block">
            <TestimonioCard
              title={
                "Muchas veces me dijeron que aprender chino era muy complicado"
              }
              info={`"Ahora con la excelente forma de enseñanza de un gran profesor y el esfuerzo que ponemos, puedo decir que no hay límites para el conocimiento, siempre se puede, la mejor experiencia juntó a todos los que conforman el #clubdechino.
          "`}
              name={"Tracey Elizabeth"}
              profession={"Estudiante del Club"}
              img={testimonio2}
            />
          </div>
          <TestimonioCard
            title={
              "Me parece una buena oportunidad de aprender el idioma chino"
            }
            info={`" Ya que la enseñanza de este idioma no es frecuente en el país. ¡Excelentes profesores 🙂 !
          "`}
            name={"Pamela Suarez"}
            profession={"Estudiante del Club"}
            img={testimonio3}
          />
          <div className="hidden md:block">
            <TestimonioCard
              title={"No había imaginado que llegaría a estudiar chino"}
              info={`"Siempre me pareció un idioma muy complejo, sin embargo, gracias a las enseñanzas que imparte nuestro profesor y la forma en la que realiza las clases, he logrado aprender.
          我在Club de Chino YT 学习汉语。"`}
              name={"Alexander Andrade"}
              profession={""}
              img={testimonio4}
            />
          </div>
        </div>

        <TestimonioVideo/>
        
      </div>
    </section>
  );
};

export default Testimonios2;
