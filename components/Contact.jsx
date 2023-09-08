import React from "react";
import Image from "next/image";
import contact from "@/public/assets/croquis.png";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Form from "./Form";
import Typewriter from "typewriter-effect";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
      <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold">
          <Typewriter
              options={{
                strings: [ "Contacto","接触"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
                
              }}
              
              
            />
          </div>
        <h2 className="py-4">Contacto</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Link href="https://www.google.com.ec/maps/place/Club+Chino+YV/@-0.3000723,-78.4574318,17z/data=!3m1!4b1!4m6!3m5!1s0x91d5bd9886a65f89:0x73880249bf161b86!8m2!3d-0.3000723!4d-78.4574318!16s%2Fg%2F11ptxzkdsz?hl=es" target="_blank">
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={contact}
                    alt="contact image"
                    
                  />
                </Link>
              </div>
              <div>
                <h2 className="py-2 mt-3">Club Chino YV</h2>
                <p>Academia de Chino Mandarin</p>
                <p className="py-4">
                我的语言的限制就是我的世界的限制 <br /> 
                “Los limites de mi idioma son los límites de mi mundo”
                </p>
              </div>
              <div>
                
                <p className="  font-bold mt-3 uppercase">Matriz Quito </p>
                <p className="mt-2">Isla San Cristobal y Geovanni Farina, edificio Alcazar del Valle 2do piso. Valle de los Chillos, Quito.</p>
                <p className="pt-2"> 0998720755</p>
                <div className="flex items-center justify-between py-4 mt-5">
                  <Link
                    href="https://www.facebook.com/clubchinoyv"
                    target="_blank"
                    className="mr-6"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsFacebook />
                    </div>
                  </Link>
                  <Link
                    href="https://www.instagram.com/clubchinoyv/"
                    target="_blank"
                    className="mr-6"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400  p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsInstagram />
                    </div>
                  </Link>
                  <Link
                    href="https://walink.co/53de20 "
                    target="_blank"
                    className="mr-6"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400  p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <BsWhatsapp />
                    </div>
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@clubchinoyv"
                    target="_blank"
                  >
                    <div className="rounded-full shadow-md shadow-gray-400  p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                      <FaTiktok />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4" id="form">
              <Form />
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-red-600" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
