import Image from 'next/image';
import React, { useState } from 'react';
import { SliderData } from './SliderData';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Typewriter from "typewriter-effect";

const Galeria = ({ slides }) => {
  
  const [current, setCurrent] = useState(0);
  const length = slides.length
  

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div id='galeria' className='max-w-[1240px] mx-auto px-2 py-16 lg:h-screen'>
      <div className="uppercase tracking-widest text-2xl text-red-600 font-semibold">
          <Typewriter
              options={{
                strings: [ "Galeria","画廊" ],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
                
              }}
              
              
            />
          </div>
     
      <h2 className="py-4">Conoce a nuestros alumnos</h2>
      <div className='relative flex justify-center p-4'>

      {SliderData.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-[1] ease-in duration-500'
                : 'opacity-0'
            }
          >
              <FaArrowCircleLeft
                onClick={prevSlide}
                className='absolute top-[50%] left-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
              {index === current && (
                <Image
                  src={slide.image}
                  alt='/'
                  width='1440'
                  height='900'
                  style={{objectFit:"cover"}}
                  priority 
                />
              )}
              <FaArrowCircleRight
                onClick={nextSlide}
                className='absolute top-[50%] right-[30px] text-white/70 cursor-pointer select-none z-[2]'
                size={50}
              />
            </div>
        );
    })}
    </div>
    </div>
  );
};

export default Galeria;
