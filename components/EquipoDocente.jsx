import React from "react";
import adrianY from "@/public/assets/docentes/adrianY.jpeg";
import carlosS from "@/public/assets/docentes/carlosS.jpeg";
import elizabeth from "@/public/assets/docentes/elizabeth.jpeg";
import cristian from "@/public/assets/docentes/cristian.jpeg";
import alejandra from "@/public/assets/docentes/alejandra.jpeg";
import EquipoCard from "@/components/EquipoCard";
import Typewriter from "typewriter-effect";

const EquipoDocente = () => {
  return (
    <section id="equipo" className="w-full sm:h-screen sm:mb-20 md:mb-0 lg:mb-52 xl:mb-0 ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
      <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold">
          <Typewriter
              options={{
                strings: [ "Equipo Docente","教学团队"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
                
              }}
              
              
            />
          </div>
        <h2 className="py-4">Equipo Académico y Administrativo</h2>
        <div className="grid sm:grid-cols-2  gap-16 group">
          <EquipoCard
            img={adrianY}
            nombre={"Ing. Adrian Yanchapaxi"}
            puesto={'Director del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "`}
          />
          <EquipoCard
            img={carlosS}
            nombre={"Msc. Carlos Simba"}
            puesto={'Maestro del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reiciendis minus praesentium deleniti vitae officia rem aperiam blanditiis in"`}
          />
          <EquipoCard
            img={elizabeth}
            nombre={"Lic. Elizabeth Caicedo"}
            puesto={'Maestra del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."`}
          />
         
          <EquipoCard
            img={cristian}
            nombre={"Msc. Cristian Proaño"}
            puesto={'Maestro del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."`}
          />
          
          
        </div>
        
          
      </div>
    </section>
  );
};

export default EquipoDocente;
