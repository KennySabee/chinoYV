// app/components/Hero.jsx
'use client'

import { useState, useEffect } from 'react';
import { BsWhatsapp } from "react-icons/bs";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Hero = ({ message }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative flex items-center justify-center h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video 
        src="https://res.cloudinary.com/kennysabee/video/upload/f_auto:video,q_auto/v1/ChinoYV/heroChinoYV"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-[1240px] px-4 text-white mx-auto flex flex-col justify-center items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-sm uppercase text-gray-300 tracking-widest mb-4"
          >
            {message}
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <Typewriter
              options={{
                strings: ["大家好，我们是", "Hola somos el"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: "<span style='color: #dc2626;'>|</span>",
                deleteSpeed: 50,
              }}
            />
          </motion.h1>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="py-4 text-3xl md:text-5xl lg:text-6xl font-bold"
          >
            <span className="text-white">Club</span> 
            <span className="text-red-600"> Chino YV</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="py-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
          >
            Somos una academia especializada en la enseñanza del chino mandarín y su cultura. Te preparamos para la certificación oficial HSK y ofrecemos oportunidades únicas de becas en China, abriendo puertas a tu futuro académico y laboral en el mundo.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mb-12"
        >
          <Link 
            href="#cursos"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/30 text-center"
          >
            Comienza tu aprendizaje
          </Link>
          <Link 
            href="#contact"
            className="inline-block bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 text-center"
          >
            Contáctanos
          </Link>
        </motion.div>

        {/* Achievement Badge - Actualizado */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-6 p-4 bg-red-600/20 backdrop-blur-sm rounded-lg border border-red-500/30 text-center max-w-md"
        >
          <p className="text-white text-sm md:text-base">
            🎓 Aprende el idioma del futuro<br></br>
            ¡Más de 5 estudiantes ya lograron becas oficiales del Gobierno Chino!
          </p>
        </motion.div>
      </div>

      {/* Botón WhatsApp fijo */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          href="https://walink.co/53de20"
          target="_blank"
          className="flex items-center justify-center w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 hover:shadow-green-500/50"
          aria-label="WhatsApp"
        >
          <BsWhatsapp className="text-white text-2xl" />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;