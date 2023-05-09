import React from "react";
import Image from "next/image";

const EquipoCard = ({ img, nombre, info, puesto }) => {
  return (
    <div className="shadow-lg shadow-gray-400 duration-500 p-8  mt-3 rounded-xl cursor-pointer md:group-hover:blur-sm hover:!blur-none md:group-hover:scale-[0.85] hover:!scale-100"> 
      <Image src={img} alt="/" className="h-36 mx-auto " style={{ objectFit: "contain"} }
        priority />
      <h4 className="uppercase text-xl font-bold text-center pt-4">{nombre}</h4>
      <p className="text-sm leading-7 my-3 text-gray-500 text-center ">
        {puesto}
      </p>
      <p className="text-sm leading-7 my-3 text-gray-500 text-center ">
        {info}
      </p>
    </div>
  );
};

export default EquipoCard;
