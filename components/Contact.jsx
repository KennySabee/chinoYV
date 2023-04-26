import React from "react";
import Image from "next/image";
import contact from "@/public/assets/contact.jpg";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import Form from "./Form";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-red-600">
          Contacto
        </p>
        <h2 className="py-4">Comunícate</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full">
              <div>
                <Link href="/#form">
                  <Image
                    className="rounded-xl hover:scale-105 ease-in duration-300"
                    src={contact}
                    alt="contact image"
                    priority
                  />
                </Link>
              </div>
              <div>
                <h2 className="py-2">Club Chino YV</h2>
                <p>Academia de Chino Mandarin</p>
                <p className="py-4">
                  Disponemos de cursos virtuales como presenciales. Contáctanos
                  y conversemos.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Conecta con nosotros</p>
                <div className="flex items-center justify-between py-4">
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
                    href="https://wa.link/d6q2ga "
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
