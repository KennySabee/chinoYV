// app/components/Footer.jsx
'use client'

import React from "react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Quienes Somos", href: "/#quienessomos" },
    { name: "Cursos", href: "/#cursos" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "Galería", href: "/#galeria" },
    { name: "Contacto", href: "/#contact" }
  ];

  return (
    <footer className="bg-gray-200 text-gray-800 pt-12 pb-6">
      <div className="max-w-[1240px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo y descripción */}
          <div className="col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-3 text-red-600">Club Chino YV</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Academia especializada en chino mandarín. Preparación HSK y oportunidades de becas en China.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <p className="text-red-700 text-xs">
                Aprende el idioma del futuro y abre puertas a oportunidades únicas.
              </p>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="text-base font-bold mb-3 text-red-600">Navegación</h4>
            <ul className="space-y-1.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-gray-600 hover:text-red-600 transition-colors duration-200 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-base font-bold mb-3 text-red-600">Contacto</h4>
            <div className="space-y-2">
              <div>
                <p className="text-gray-700 font-medium text-xs">Matriz Quito - Valle</p>
                <p className="text-gray-600 text-xs">Isla San Cristobal y Geovanni Farina</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-xs">Sucursal Quito - Los Chillos</p>
                <p className="text-gray-600 text-xs">Av. los Shyris N24-175</p>
              </div>
              <div>
                <p className="text-gray-700 font-medium text-sm">Teléfono: 0998720755</p>
              </div>
            </div>
          </div>

          {/* Redes sociales */}
          <div>
            <h4 className="text-base font-bold mb-3 text-red-600">Síguenos</h4>
            <div className="flex space-x-3 mb-4">
              <SocialLink href="https://www.facebook.com/clubchinoyv" icon={<BsFacebook />} label="Facebook" />
              <SocialLink href="https://www.instagram.com/clubchinoyv/" icon={<BsInstagram />} label="Instagram" />
              <SocialLink href="https://walink.co/53de20" icon={<BsWhatsapp />} label="WhatsApp" />
              <SocialLink href="https://www.tiktok.com/@clubchinoyv" icon={<FaTiktok />} label="TikTok" />
            </div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              <p className="text-green-700 text-xs">
                <BsWhatsapp className="inline mr-1 text-green-600" size={12} />
                Consulta por WhatsApp para más información.
              </p>
            </div>
          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-300 my-6"></div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-xs">
          © {currentYear} Club Chino YV. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

// Componente para enlaces sociales
const SocialLink = ({ href, icon, label }) => (
  <Link
    href={href}
    target="_blank"
    aria-label={label}
    className="bg-white border border-gray-300 hover:border-red-300 p-2 rounded-full transition-all duration-200"
  >
    <div className="text-gray-600 hover:text-red-600">
      {icon}
    </div>
  </Link>
);

export default Footer;