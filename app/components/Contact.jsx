// app/components/Contact.jsx
"use client";

import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
import { BsWhatsapp, BsInstagram, BsFacebook, BsTiktok } from "react-icons/bs";

const Contact = () => {
  // Datos de las sucursales
  const sucursales = [
    {
      nombre: "Matriz Quito - Valle",
      direccion:
        "Geovanny Farina 062 entre Isla San Cristobal e Isla Genovesa. Valle de los Chillos, Quito.",
      telefono: "0998720755",
      mapaUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.784450436999!2d-78.4596037!3d-0.3001153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd9886a65f89%3A0x73880249bf161b86!2sClub%20Chino%20YV!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec",
      mapsUrlDirect: "https://www.google.com/maps?ll=-0.300121,-78.457029&z=15&t=m&hl=es&gl=EC&mapclient=embed&cid=8324906426956127110",
    },
    {
      nombre: "Sucursal - Quito",
      direccion: "Juan Manuel Lasso y Las Guayanas.",
      telefono: "0998720755",
      mapaUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.704543599089!2d-78.4957473!3d-0.1870097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b42fd13b745%3A0x69df054a7ce74617!2sClub%20Chino%20YV!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec",
      mapsUrlDirect: "https://www.google.com/maps/place/Club+Chino+YV/@-0.187015,-78.490876,15z/data=!4m6!3m5!1s0x91d59b42fd13b745:0x69df054a7ce74617!8m2!3d-0.1870151!4d-78.4908764!16s%2Fg%2F11vy9_6dj5?hl=es&entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D",
    },
  ];

  // Datos de becas
  const becasData = [
    {
      nombre: "María Fernanda López",
      logro: "Beca de pregrado en Beijing",
      universidad: "Universidad de Beijing",
    },
    {
      nombre: "Carlos Andrés Mendoza",
      logro: "Beca de 1 año de idioma en Shanghái",
      universidad: "Universidad de Shanghái",
    },
    {
      nombre: "Ana Sofía Ramírez",
      logro: "Beca posgrado en Guangzhou",
      universidad: "Universidad de Guangzhou",
    },
    {
      nombre: "Jorge Enrique Silva",
      logro: "Beca de posgrado en Hangzhou",
      universidad: "Universidad de Hangzhou",
    },
    {
      nombre: "Daniela Alejandra Torres",
      logro: "Beca de 1 año de idioma en Chengdu",
      universidad: "Universidad de Chengdu",
    },
  ];

  return (
    <div
      id="contact"
      className="w-full py-16 bg-gradient-to-br from-white to-gray-50"
    >
      <div className="max-w-[1240px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold mb-4">
            <Typewriter
              options={{
                strings: ["Encuéntranos", "找到我们"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: "",
              }}
            />
          </div>
          <h2 className="py-4 text-3xl font-bold text-gray-800">
            Visítanos en nuestras sucursales
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aprende el idioma del futuro donde estés.
            <span className="font-semibold text-red-600">
              {" "}
              ¡Más de 25 estudiantes ya ganaron becas del Gobierno de China!
            </span>
          </p>
        </motion.div>

        {/* Grid de sucursales con mapas */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sucursales.map((sucursal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {sucursal.nombre}
                </h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-3">
                    <span className="font-semibold text-gray-800">
                      Dirección:
                    </span>{" "}
                    {sucursal.direccion}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold text-gray-800">
                      Teléfono:
                    </span>{" "}
                    {sucursal.telefono}
                  </p>
                </div>

                {/* Mapa embebido */}
                <div className="relative h-64 rounded-xl overflow-hidden mb-4 shadow-lg">
                  <iframe
                    src={sucursal.mapaUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa ${sucursal.nombre}`}
                  ></iframe>
                </div>

                 {/* ✅ ENLACE DIRECTO SIN PROCESAR — LA SOLUCIÓN DEFINITIVA */}
                <div className="flex justify-center">
                  <Link
                    href={sucursal.mapsUrlDirect}
                    target="_blank"
                    className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Ver en Google Maps
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de becas destacada - Grid de 2 columnas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestros Estudiantes con Becas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 25 de nuestros estudiantes han sido beneficiados con becas
              del Gobierno de China gracias a su dedicación al estudiar chino
              mandarín.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {becasData.map((beca, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-red-50 to-red-100 border-l-4 border-red-600 p-6 rounded-xl shadow-lg"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🎓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {beca.nombre}
                    </h3>
                    <p className="text-red-700 font-semibold">{beca.logro}</p>
                    <p className="text-gray-600 text-sm">{beca.universidad}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final - Rojo y blanco (Redes Sociales) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">
            ¡Síguenos en Redes Sociales!
          </h3>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Entérate de nuestros cursos, becas, eventos y mucho más. ¡Conéctate
            con nuestra comunidad!
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="https://www.facebook.com/clubchinoyv"
              target="_blank"
              aria-label="Facebook"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 min-w-[180px]"
            >
              <BsFacebook className="h-6 w-6" />
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/clubchinoyv/"
              target="_blank"
              aria-label="Instagram"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 min-w-[180px]"
            >
              <BsInstagram className="h-6 w-6" />
              Instagram
            </Link>
            <Link
              href="https://www.tiktok.com/@clubchinoyv"
              target="_blank"
              aria-label="TikTok"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 min-w-[180px]"
            >
              <BsTiktok className="h-6 w-6" />
              TikTok
            </Link>
            <Link
              href="https://walink.co/53de20"
              target="_blank"
              aria-label="WhatsApp"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 min-w-[180px]"
            >
              <BsWhatsapp className="h-6 w-6" />
              WhatsApp
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;