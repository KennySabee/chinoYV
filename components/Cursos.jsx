
import cursoPresencial from '@/public/assets/projects/cursosPresenciales.jpeg'
import cursoOnline from '@/public/assets/projects/cursosOnline.jpeg'


import ProjectItems from './ProjectItems'
import Typewriter from "typewriter-effect";


const Cursos = () => {
  return (
    <section id='cursos' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <div className="uppercase text-3xl tracking-widest text-red-600 font-semibold"><Typewriter
              options={{
                strings: [ "cursos","培训班"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
              }}
              
            /></div>
            <h2 className="py-4">Para todas las edades</h2>
            <div className='grid md:grid-cols-2 gap-8'>
                <ProjectItems 
                img={cursoPresencial}
                title='Cursos Presenciales'
                useWith='Valle de los Chillos'
                url='https://walink.co/53de20'

                />
                <ProjectItems 
                img={cursoOnline}
                title='Cursos Online'
                useWith='Ecuador'
                url='https://walink.co/53de20'
                

                />
                
               
            </div>

        </div>
    </section>
  )
}

export default Cursos