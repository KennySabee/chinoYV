// app/components/Cursos.jsx
'use client'

import cursoPresencial from '@/public/assets/projects/cursosPresenciales.jpeg'
import cursoOnline from '@/public/assets/projects/cursosOnline.jpeg'
import cursoNegocios from '@/public/assets/projects/cursosOnline.jpeg'
import ProjectItems from './ProjectItems'
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Cursos = () => {
  // Datos de los cursos
  const cursosData = [
    {
      img: cursoPresencial,
      title: 'Cursos Presenciales',
      useWith: 'Valle de los Chillos',
      url: 'https://walink.co/53de20',
      description: 'Clases presenciales con profesores nativos. Aprende en un ambiente interactivo y cultural.',
      features: ['Grupos reducidos', 'Materiales incluidos', 'Certificación HSK']
    },
    {
      img: cursoOnline,
      title: 'Cursos Online',
      useWith: 'Ecuador',
      url: 'https://walink.co/53de20',
      description: 'Flexibilidad total para aprender desde casa. Clases en vivo con profesores especializados.',
      features: ['Horarios flexibles', 'Clases grabadas', 'Soporte 24/7']
    },
    {
      img: cursoNegocios,
      title: 'Cursos de Negocios',
      useWith: 'Profesionales',
      url: 'https://walink.co/53de20',
      description: 'Especialización en chino para negocios. Perfecto para emprendedores y profesionales.',
      features: ['Vocabulario empresarial', 'Casos prácticos', 'Red de contactos']
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