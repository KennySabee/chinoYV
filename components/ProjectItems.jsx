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
        
        <p className="pb-4 pt-2 text-white text-center text-base font-medium uppercase">{useWith}</p>
        <Link href={url} target="_blank">
          <p className="text-center text-lg px-5 uppercase tracking-widest py-3 rounded-lg bg-white text-gray-700 font-bold hover:bg-slate-100  hover:scale-105 ease-in duration-300">
          {title}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItems;
