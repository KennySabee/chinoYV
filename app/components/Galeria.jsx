// app/components/Galeria.jsx
'use client'

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Galeria = ({ slides = SliderData }) => {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  // Verificación de seguridad para length
  const length = slides && Array.isArray(slides) ? slides.length : 0;

  // Auto play functionality
  useEffect(() => {
    if (!isAutoPlaying || length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrent(prev => (prev === length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, length]);

  const nextSlide = () => {
    if (length > 0) {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }
    setIsAutoPlaying(false);
  };
  
  const prevSlide = () => {
    if (length > 0) {
      setCurrent(current === 0 ? length - 1 : current - 1);
    }
    setIsAutoPlaying(false);
  };

  // Verificación adicional antes de renderizar
  if (!slides || !Array.isArray(slides) || slides.length <= 0) {
    return (
      <section id='galeria' className='max-w-[1240px] mx-auto px-4 py-16'>
        <div className="text-center">
          <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold mb-4">
            <Typewriter
              options={{
                strings: ["Galeria", "画廊"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
              }}
            />
          </div>
          <h2 className="py-4 text-3xl font-bold text-gray-800">Conoce a nuestros alumnos</h2>
          <div className='relative flex justify-center p-8 bg-gray-50 rounded-2xl'>
            <p className="text-gray-500 text-lg">No hay imágenes disponibles en este momento.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id='galeria' className='max-w-[1240px] mx-auto px-4 py-16 bg-gradient-to-br from-white to-gray-50'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold mb-4">
          <Typewriter
            options={{
              strings: ["Galeria", "画廊"],
              autoStart: true,
              loop: true,
              pauseFor: 2000,
              cursor: ''
            }}
          />
        </div>
        <h2 className="py-4 text-3xl font-bold text-gray-800">Conoce a nuestros alumnos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Momentos especiales de nuestros estudiantes aprendiendo el idioma del futuro
        </p>
      </motion.div>

      <div className='relative max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-2xl'>
        {/* Slider Container */}
        <div className='relative h-[500px] md:h-[600px]'>
          {slides.map((slide, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === current ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className='absolute inset-0'
            >
              <Image
                src={slide.image}
                alt={slide.alt || `Galería Club Chino YV - Imagen ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                priority={index === 0}
                className="brightness-90"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              {/* Image Info */}
              {slide.title && (
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{slide.title}</h3>
                  {slide.description && (
                    <p className="text-gray-200 text-lg">{slide.description}</p>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className='absolute top-[50%] left-4 md:left-8 transform -translate-y-1/2 text-white/80 hover:text-white cursor-pointer select-none z-10 transition-all duration-300 hover:scale-110'
          aria-label="Imagen anterior"
        >
          <FaArrowCircleLeft size={40} className='drop-shadow-lg' />
        </button>
        
        <button
          onClick={nextSlide}
          className='absolute top-[50%] right-4 md:right-8 transform -translate-y-1/2 text-white/80 hover:text-white cursor-pointer select-none z-10 transition-all duration-300 hover:scale-110'
          aria-label="Siguiente imagen"
        >
          <FaArrowCircleRight size={40} className='drop-shadow-lg' />
        </button>

        {/* Dots Indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3'>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Ir a la imagen ${index + 1}`}
            />
          ))}
        </div>

        {/* Auto Play Indicator */}
        <div className="absolute top-4 right-4">
          <div 
            className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-gray-400'}`}
            title={isAutoPlaying ? 'Reproducción automática activa' : 'Reproducción automática pausada'}
          ></div>
        </div>
      </div>

      {/* Gallery Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
       
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">200+</div>
          <div className="text-gray-600">Estudiantes</div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">5+</div>
          <div className="text-gray-600">Becas en China</div>
        </div>
      </motion.div>
    </section>
  );
};

export default Galeria;