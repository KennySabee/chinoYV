// app/components/Navbar2.jsx
'use client'

import Link from "next/link";
import Image from "next/image";
import navLogo from "@/public/assets/navLogo.png";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', changeBackground);
    
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  const navItems = [
    { name: "Inicio", href: "/" },
    { name: "Quienes somos", href: "/#quienessomos" },
    { name: "Cursos", href: "/#cursos" },
    { name: "Testimonios", href: "/#testimonios" },
    { name: "Galeria", href: "/#galeria" },
    { name: "Contacto", href: "/#contact" }
  ];

  return (
    <header className={`fixed w-full h-20 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white shadow-xl' : 'bg-transparent'
    }`}>
      <div className="flex justify-between items-center w-full h-full px-4 md:px-8">
        {/* Logo con efecto hover */}
        <Link href="/">
          <div className="transition-transform duration-300 hover:scale-110">
            <Image 
              src={navLogo} 
              alt="Club Chino YV Logo" 
              width={scrolled ? 45 : 55}
              height={scrolled ? 45 : 55}
              className="transition-all duration-500"
            />
          </div>
        </Link>

        {/* Desktop Navigation con efectos */}
        <div className="hidden md:flex items-center">
          <ul className="flex space-x-8">
            {navItems.map((item, index) => (
              <li key={item.name} className="relative">
                <Link 
                  href={item.href}
                  className={`font-medium transition-all duration-300 relative ${
                    scrolled ? 'text-gray-800 hover:text-red-600' : 'text-white hover:text-red-300'
                  }`}
                >
                  {item.name}
                  {/* Efecto underline animado */}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button con animación */}
        <div className="md:hidden">
          <button 
            onClick={handleNav}
            className={`transition-all duration-300 ${
              scrolled ? 'text-gray-800' : 'text-white'
            } hover:scale-110`}
          >
            <AiOutlineMenu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu con transiciones mejoradas */}
      <div className={`md:hidden fixed inset-0 z-50 transition-all duration-500 ease-in-out ${
        nav ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        {/* Overlay con fade */}
        <div 
          className={`absolute inset-0 transition-opacity duration-500 ${
            nav ? 'bg-black/80 opacity-100' : 'bg-black/0 opacity-0'
          }`}
          onClick={handleNav}
        ></div>
        
        {/* Menu slide con mejor animación */}
        <div className={`absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-red-700 to-red-800 transition-transform duration-500 ease-out ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-red-600">
              <Image src={navLogo} alt="Club Chino YV" width={45} height={45} />
              <button 
                onClick={handleNav}
                className="text-white p-2 rounded-full hover:bg-red-600 transition-colors duration-300"
              >
                <AiOutlineClose size={26} />
              </button>
            </div>

            {/* Menu Items con stagger animation */}
            <div className="flex-1 overflow-y-auto py-8">
              <ul className="px-6 space-y-2">
                {navItems.map((item, index) => (
                  <li 
                    key={item.name}
                    className={`transition-all duration-500 delay-${index * 100} ${
                      nav ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    <Link
                      href={item.href}
                      onClick={handleNav}
                      className="block py-4 text-white text-xl font-medium border-b border-red-600/30 hover:border-red-500 transition-all duration-300 hover:bg-red-600/20 rounded-lg px-4"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Icons con efectos - Solo iconos en móvil */}
            <div className="p-6 border-t border-red-600">
              <p className="text-red-200 text-sm mb-4 text-center">Síguenos en redes</p>
              <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com/clubchinoyv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 hover:scale-110 transition-all duration-300">
                  <BsFacebook size={24} />
                </a>
                <a href="https://www.instagram.com/clubchinoyv/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 hover:scale-110 transition-all duration-300">
                  <BsInstagram size={24} />
                </a>
                
                <a href="https://www.tiktok.com/@clubchinoyv" target="_blank" rel="noopener noreferrer" className="text-white hover:text-red-200 hover:scale-110 transition-all duration-300">
                  <FaTiktok size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;