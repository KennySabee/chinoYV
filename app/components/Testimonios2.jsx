// app/components/Testimonios2.jsx
'use client';

import React, { useState, useRef } from "react";
import TestimonioCard from "@/app/components/TestimonioCard";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import testimonio1 from "@/public/assets/testimonios/vanessaMena.jpg";
import testimonio2 from "@/public/assets/testimonios/traceyElizabeth.jpg";
import testimonio3 from "@/public/assets/testimonios/pamelaSuarez.jpg";
import testimonio4 from "@/public/assets/testimonios/alexanderAndrade.jpg";

const Testimonios2 = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="testimonios" className="w-full py-16 bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-[1240px] mx-auto px-4">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold mb-4">
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
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Lo que nuestros alumnos dicen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre por qué más de 200 estudiantes han elegido nuestra academia para aprender chino
          </p>
        </motion.div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <TestimonioCard
              title={"Excelente metodología de aprendizaje!"}
              info={`"Las clases son muy dinámicas y divertidas. ❤️💯💯"`}
              name={"Vanessa Mena"}
              profession={"Arquitecta"}
              img={testimonio1}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonioCard
              title={"Muchas veces me dijeron que aprender chino era muy complicado"}
              info={`"Ahora con la excelente forma de enseñanza de un gran profesor y el esfuerzo que ponemos, puedo decir que no hay límites para el conocimiento, siempre se puede, la mejor experiencia junto a todos los que conforman el #clubdechino."`}
              name={"Tracey Elizabeth"}
              profession={"Estudiante del Club"}
              img={testimonio2}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <TestimonioCard
              title={"Me parece una buena oportunidad de aprender el idioma chino"}
              info={`"Ya que la enseñanza de este idioma no es frecuente en el país. ¡Excelentes profesores 🙂 !"`}
              name={"Pamela Suarez"}
              profession={"Estudiante del Club"}
              img={testimonio3}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TestimonioCard
              title={"No había imaginado que llegaría a estudiar chino"}
              info={`"Siempre me pareció un idioma muy complejo, sin embargo, gracias a las enseñanzas que imparte nuestro profesor y la forma en la que realiza las clases, he logrado aprender. 我在Club de Chino YT 学习汉语。"`}
              name={"Alexander Andrade"}
              profession={"Estudiante del Club"}
              img={testimonio4}
            />
          </motion.div>
        </div>

        {/* Video de testimonios - Formato reel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl"
        >
          <div className="relative aspect-[9/16] w-full"> {/* Relación de aspecto para reels (9:16) */}
            <video 
              ref={videoRef}
              src="/assets/testimonios/TestimoniosVid.mp4" 
              loop               
              playsInline 
              className="w-full h-full object-cover"
              onClick={toggleVideo}
            />
            <div 
              className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer"
              onClick={toggleVideo}
            >
              {!isPlaying && (
                <button className="bg-white/20 backdrop-blur-sm p-4 rounded-full hover:bg-white/30 transition-all duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonios2;