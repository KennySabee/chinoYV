import React from "react";
import Image from "next/image";
import remixGuitarProject from "@/public/assets/projects/remixGuitarProject.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const guitarla = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10 " />
        <Image
          src={remixGuitarProject}
          alt="img folie"
          className="absolute z-[1] object-cover"
          fill
          priority
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">ECOMMERCE APP</h2>
          <h3> Remix Run / Strapi</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid  md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4 p-4">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">Project</p>
          <h2 className="py-4">Overview</h2>
          <p>
            {" "}
            This app was built on Remix and is hosted on Strapi. Users are able
            to buy guitars, selecting the quantity and added to their cart, it
            is a full ecommerce app about a guitar store to try out front-end
            with the new framework of react Remix Run.
          </p>

          <div className="flex flex-col  mt-5 md:flex-row justify-start">

          <Link
            href="https://kenny-guitarla-ecommerce.netlify.app/"
            target="_blank"
            className="md:mr-3"
          >
            <button className="px-8 py-2 mt-4 mr-8 w-full  ">Link</button>
          </Link>
          <Link
            href="https://github.com/KennySabee/GuitarLAFrontRemix"
            target="_blank"
          >
            <button className="px-8 py-2 mt-4  w-full">Code</button>
          </Link>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Remix Run
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Strapi
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Postgre SQL
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Cloudinary
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer p-4">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default guitarla;
