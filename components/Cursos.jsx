
import cursoPresencial from '@/public/assets/projects/cursosPresenciales.jpeg'
import cursoOnline from '@/public/assets/projects/cursosOnline.jpeg'


import ProjectItems from './ProjectItems'
import Typewriter from "typewriter-effect";


const Cursos = () => {
  return (
    <div id='cursos' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className="uppercase text-xl tracking-widest text-red-600"><Typewriter
              options={{
                strings: [ "cursos","学习课程"],
                autoStart: true,
                loop: true,
                pauseFor: 6000,
                cursor: ''
              }}
              
            /></div>
            <h2 className="py-4">Para todas las edades</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItems 
                img={cursoPresencial}
                title='Cursos Presenciales'
                useWith='Valle de los Chillos'
                url='/'

                />
                <ProjectItems 
                img={cursoOnline}
                title='Cursos Online'
                useWith='Ecuador'
                url='/'
                priority

                />
                
               
            </div>

        </div>
    </div>
  )
}

export default Cursos