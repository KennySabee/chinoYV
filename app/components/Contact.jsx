// app/components/Contact.jsx
'use client'

import React from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

const Contact = () => {
  // Datos de las sucursales
  const sucursales = [
    {
      nombre: "Matriz Quito - Valle",
      direccion: "Isla San Cristobal y Geovanni Farina, edificio Alcazar del Valle 2do piso. Valle de los Chillos, Quito.",
      telefono: "0998720755",
      mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.784450436999!2d-78.4596037!3d-0.3001153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd9886a65f89%3A0x73880249bf161b86!2sClub%20Chino%20YV!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec",
      coordenadas: "-0.3001153,-78.4596037"
    },
    {
      nombre: "Sucursal Quito - Los Chillos",
      direccion: "Av. los Shyris N24-175 y calle Riobamba, Edificio Galileo, oficina 401. Quito.",
      telefono: "0998720755",
      mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.704543599089!2d-78.4957473!3d-0.1870097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59b42fd13b745%3A0x69df054a7ce74617!2sClub%20Chino%20YV!5e0!3m2!1ses!2sec!4v1700000000000!5m2!1ses!2sec",
      coordenadas: "-0.1870097,-78.4957473"
    }
  ];

  // Datos de becas
  const becasData = [
    {
      nombre: "María Fernanda López",
      logro: "Beca completa de estudios en Beijing",
      universidad: "Universidad de Beijing"
    },
    {
      nombre: "Carlos Andrés Mendoza",
      logro: "Beca de intercambio cultural en Shanghái",
      universidad: "Universidad de Shanghái"
    },
    {
      nombre: "Ana Sofía Ramírez",
      logro: "Beca de investigación en Guangzhou",
      universidad: "Universidad de Guangzhou"
    },
    {
      nombre: "Jorge Enrique Silva",
      logro: "Beca de posgrado en Hangzhou",
      universidad: "Universidad de Hangzhou"
    },
    {
      nombre: "Daniela Alejandra Torres",
      logro: "Beca de idiomas en Chengdu",
      universidad: "Universidad de Chengdu"
    }
  ];

  return (
    <div id="contact" className="w-full py-16 bg-gradient-to-br from-white to-gray-50">
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
                cursor: ''
              }}
            />
          </div>
          <h2 className="py-4 text-3xl font-bold text-gray-800">Visítanos en nuestras sucursales</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Aprende el idioma del futuro donde estés. 
            <span className="font-semibold text-red-600"> ¡Más de 5 estudiantes ya ganaron becas del Gobierno de China!</span>
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
                <h3 className="text-xl font-bold text-gray-800 mb-4">{sucursal.nombre}</h3>
                <div className="mb-4">
                  <p className="text-gray-600 mb-3">
                    <span className="font-semibold text-gray-800">Dirección:</span> {sucursal.direccion}
                  </p>
                  <p className="text-gray-600 mb-4">
                    <span className="font-semibold text-gray-800">Teléfono:</span> {sucursal.telefono}
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
                
                <div className="flex justify-center">
                  <Link 
                    href={sucursal.mapaUrl.replace('embed', 'place').split('!')[0]}
                    target="_blank"
                    className="text-red-600 hover:text-red-700 font-medium flex items-center gap-1 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
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
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Nuestros Estudiantes con Becas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Más de 5 de nuestros estudiantes han sido beneficiados con becas del Gobierno de China gracias a su dedicación al estudiar chino mandarín.
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
                    <h3 className="text-lg font-bold text-gray-800">{beca.nombre}</h3>
                    <p className="text-red-700 font-semibold">{beca.logro}</p>
                    <p className="text-gray-600 text-sm">{beca.universidad}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Final - Rojo y blanco */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl shadow-2xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">¡Tu oportunidad está aquí!</h3>
          <p className="text-xl text-red-100 mb-6 max-w-2xl mx-auto">
            Únete a los estudiantes que ya abrieron puertas al mundo con el chino. 
            ¡La próxima beca podría ser tuya!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://walink.co/53de20"
              target="_blank"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Consulta por WhatsApp
            </Link>
            <Link 
              href="#cursos"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-white hover:text-red-600"
            >
              Ver Cursos
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;