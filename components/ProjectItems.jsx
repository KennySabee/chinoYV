import Link from "next/link";
import Image from "next/image";

const ProjectItems = ({ img, title, useWith, url }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-red-500 to-red-600 ">
      <Image
        className="rounded-xl group-hover:opacity-10 "
        src={img}
        alt="/"
        style={{ objectFit: "cover"} }
        
        
      />
      <div className="hidden group-hover:block absolute">
        <h3 className="text-2xl text-white tracking-widest text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center uppercase">{useWith}</p>
        <Link href={url} target="_blank">
          <p className="text-center uppercase py-3 rounded-lg bg-white text-gray-700 font-bold text-sm hover:scale-105 ease-in duration-300">
            Más Información
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
