// app/components/QuienesSomos.jsx
'use client'

import React from "react";
import quienesSomosImg from "@/public/assets/quienesSomosChinoYV.jpg";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const QuienesSomos = () => {
  return (
    <section
      id="quienessomos"
      className="w-full px-4 py-16 bg-gradient-to-br from-gray-50 to-white"
    >
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-2 gap-12 items-center">
        {/* Contenido de texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold mb-4">
            <Typewriter
              options={{
                strings: ["Quienes somos", "关于我们"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
              }}
            />
          </div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-800 mb-6"
          >
            Chino YV
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="py-3 text-gray-600 leading-relaxed"
          >
            Somos un equipo de profesionales con amplia experiencia en la enseñanza del chino mandarín. Nuestra vivencia en China nos permitió conocer a fondo su cultura y dominar el idioma.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            viewport={{ once: true }}
            className="py-3 text-gray-600 leading-relaxed"
          >
            Hoy, China es una potencia mundial y su lengua se considera el <span className="font-semibold text-red-600">Idioma del Futuro</span>.
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            viewport={{ once: true }}
            className="py-3 text-gray-600 leading-relaxed"
          >
            En nuestra Academia te preparamos para el examen oficial <span className="font-semibold text-red-600">HSK (汉语水平考试)</span> con clases online y presenciales, en grupos o de forma personalizada. ¡Aprende con nosotros el idioma que abrirá puertas a tu futuro académico y profesional! 学汉语吧!
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/#cursos"
              className="inline-block mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 mb-12 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Mira nuestros cursos
            </Link>
          </motion.div>
        </motion.div>

        {/* Imagen */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full h-auto"
        >
          <div className="relative group">
            <div className="absolute -inset-4 bg-red-600 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
                src={quienesSomosImg} 
                alt="Quienes somos - Club Chino YV" 
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Badge de logro */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-xl border border-red-100"
            >
              <div className="flex items-center">
                <span className="text-2xl">🎓</span>
                <div className="ml-2">
                  <p className="text-sm font-bold text-red-600">Más de 5</p>
                  <p className="text-xs text-gray-600">Becas en China</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuienesSomos;