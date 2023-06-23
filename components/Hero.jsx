import React from "react";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = ({ message }) => {
  return (
    <section className="relative flex items-center justify-center h-screen mb-12 w-full ">
      {/* bg-fixed bg-center bg-cover custom-img */}
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-screen bg-black/80 " />
      <video 
        src="https://res.cloudinary.com/kennysabee/video/upload/f_auto:video,q_auto/v1/ChinoYV/heroChinoYV"
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover"
      />

      <div className="absolute max-w-[1240px] p-5  text-white  mx-auto flex flex-col justify-center items-center text-center ">
        <div>
          <p className="text-sm uppercase text-gray-200">{message}</p>
          <h1 className="pt-4 ">
            <Typewriter
              options={{
                strings: ["大家好，我们是", "Hola somos"],
                autoStart: true,
                loop: true,
                pauseFor: 500,
                cursor: "|",
              }}
            />
          </h1>

          <h1 className="py-4 text-red-600">
            <span className="text-white">Club</span> Chino YV
          </h1>

          <p className="py-4 text-gray-200 max-w-[70%] m-auto">
            Academia de Chino Mandarín enfocada en la enseñanza del idioma y
            cultura china, con el objetivo de brindar más oportunidades
            académicas y laborales a nuestros estudiantes.
          </p>
        </div>

        <div className="flex justify-between items-center  m-auto py-4">
          <Link
            href="https://www.facebook.com/clubchinoyv"
            target="_blank"
            className="mr-6"
          >
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700 shadow-red-400 p-6 cursor-pointer opacity-90 hover:scale-125 hover:opacity-100 ease-in duration-300">
              <BsFacebook />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/clubchinoyv/"
            target="_blank"
            className="mr-6"
          >
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700  shadow-red-400 p-6 cursor-pointer opacity-90 hover:scale-125 hover:opacity-100 ease-in duration-300">
              <BsInstagram />
            </div>
          </Link>
          <Link
            href="https://walink.co/53de20 "
            target="_blank"
            className="mr-6"
          >
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700  shadow-red-400 p-6 cursor-pointer opacity-90 hover:scale-125 hover:opacity-100 ease-in duration-300">
              <BsWhatsapp />
            </div>
          </Link>
          <Link href="https://www.tiktok.com/@clubchinoyv" target="_blank">
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700  shadow-red-400 p-6 cursor-pointer opacity-90 hover:scale-125 hover:opacity-100 ease-in duration-300">
              <FaTiktok />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
