// app/components/Cursos.jsx
'use client'

import cursoPresencial from '@/public/assets/projects/cursoPresencial.png'
import cursoOnline from '@/public/assets/projects/cursoOnline.png'
import cursoNegocios from '@/public/assets/projects/cursoNegocios.png'
import ProjectItems from './ProjectItems'
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Cursos = () => {
  // Datos de los cursos
  const cursosData = [
    {
      img: cursoPresencial,
      title: 'Cursos Presenciales',
      useWith: 'Valle de los Chillos o Quito',
      url: 'https://walink.co/53de20',
      description: 'Clases presenciales con profesores nativos. Aprende en un ambiente interactivo y cultural.',
      features: ['2 días a la semana (1 hora y 30min cada clase). Valor mensual de 65USD e inscripción de 25USD', '3 días a la semana (1 hora y 30min cada clase). Valor mensual de 85USD e inscripción de 25USD', 'Sábados de 9:00am a 12:00pm (3 horas cada sábado). Valor mensual de 65USD e inscripción de 25USD']
    },
    {
      img: cursoOnline,
      title: 'Cursos Online',
      useWith: 'Ecuador',
      url: 'https://walink.co/53de20',
      description: 'Flexibilidad total para aprender desde casa. Vía Zoom Pro para toda Latinoamérica.',
      features: ['2 días a la semana (1 hora y 30min cada clase). Valor mensual de 50USD e inscripción de 20USD.', '⁠3 días a la semana (1 hora y 30min cada clase). Valor mensual de 70USD e inscripción de 20USD', '4 días a la semana (1 hora y 30min cada clase). Valor mensual de 95USD e inscripción de 20USD.','Sábados de 9:00am a 12:00pm (3 horas cada sábado). Valor mensual de 50USD e inscripción de 20USD']
    },
    {
      img: cursoNegocios,
      title: 'Cursos de Negocios',
      useWith: 'Profesionales',
      url: 'https://walink.co/53de20',
      description: 'Especialización en chino para negocios. Perfecto para emprendedores y profesionales, vía Zoom Pro para toda Latinoamérica .',
      features: ['Vocabulario empresarial', '3 días a la semana (1 hora y 30min cada clase). Valor mensual de 199USD e inscripción de 30USD',]
    }
  ];

  return (
    <section id='cursos' className='w-full bg-gray-50 py-16'>
      <div className='max-w-[1240px] mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="uppercase text-3xl tracking-widest text-red-600 font-semibold mb-4">
            <Typewriter
              options={{
                strings: ["cursos", "培训班"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
              }}
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Para todas las edades</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Descubre nuestra variedad de cursos diseñados para diferentes necesidades y estilos de aprendizaje
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {cursosData.map((curso, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="h-full"
            >
              <ProjectItems 
                img={curso.img}
                title={curso.title}
                useWith={curso.useWith}
                url={curso.url}
                description={curso.description}
                features={curso.features}
              />
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  )
}

export default Cursos