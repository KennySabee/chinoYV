import React from "react";
import cursoOnline from "@/public/assets/projects/cursosOnline.jpeg";
import EquipoCard from "@/components/EquipoCard";

const EquipoDocente = () => {
  return (
    <div id="equipo" className="w-full ">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-red-600">
        Equipo Docente
        </p>
        <h2 className="py-4">Equipo Académico y Administrativo</h2>
        <div className="grid md:grid-cols-3 gap-8 group">
          <EquipoCard
            img={cursoOnline}
            nombre={"John Doe"}
            puesto={'Director del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "`}
          />
          <EquipoCard
            img={cursoOnline}
            nombre={"Luis Pereira"}
            puesto={'Director del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo reiciendis minus praesentium deleniti vitae officia rem aperiam blanditiis in"`}
          />
          <EquipoCard
            img={cursoOnline}
            nombre={"Camila Gallegos"}
            puesto={'Director del Club'}
            info={`
              "Lorem ipsum, dolor sit amet consectetur adipisicing elit."`}
          />
          
        </div>
      </div>
    </div>
  );
};

export default EquipoDocente;
