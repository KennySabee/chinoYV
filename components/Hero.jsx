import React from "react";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Hero = ({ message }) => {
  return (
    <div className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img">
      {/* Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />

      <div className="max-w-[1240px] p-5  text-white z-[2] mx-auto flex flex-col justify-center items-center text-center ">
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
            Somos una academia de Chino Mandarín especializada en brindar una
            enseñanza del idioma y cultura china excepcional. Actualmente, nos
            encontramos brindando hacia nuestros alumnos cursos de manera
            virtual, como presencial, pregunta por ellos.
          </p>
        </div>
        {/* 2da animacion */}
        {/* <div className="content">
          <div className="content__container">
            <p className="content__container__text">Hello</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">world !</li>
              <li className="content__container__list__item">bob !</li>
              <li className="content__container__list__item">users !</li>
              <li className="content__container__list__item">everybody !</li>
            </ul>
          </div>
        </div> */}

        <div className="flex justify-between items-center  m-auto py-4">
          <Link
            href="https://www.facebook.com/clubchinoyv"
            target="_blank"
            className="mr-6"
          >
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700 shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFacebook />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/clubchinoyv/"
            target="_blank"
            className="mr-6"
          >
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700  shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsInstagram />
            </div>
          </Link>
          <Link href="https://wa.link/d6q2ga " target="_blank" className="mr-6">
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700  shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsWhatsapp />
            </div>
          </Link>
          <Link href="https://www.tiktok.com/@clubchinoyv" target="_blank">
            <div className="rounded-full shadow-md bg-gradient-to-r from-red-500 to-red-700  shadow-red-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaTiktok />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
