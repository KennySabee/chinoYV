import Link from "next/link";
import Image from "next/image";
import navLogo from "../public/assets/navLogo.png";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
import { BsWhatsapp, BsInstagram, BsFacebook} from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [colorMenuMobile, setColorMenuMobile] = useState('white')

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 754) {
        setColor("#ecf0f3");
        setTextColor("#000000");
        setShadow(true);
        setColorMenuMobile('#000000')
      } else {
        setColor("transparent");
        setTextColor("white");
        setShadow(false);
        setColorMenuMobile('#ecf0f3')
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] left-0 top-0 ease-in duration-300"
          : "fixed w-full h-20 z-[100] left-0 top-0 ease-in duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image src={navLogo} alt="/" width={50} height={50} />
        </Link>

        <div>
          <ul style={{ color: `${textColor}` }} className="hidden md:flex">
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/">Inicio</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/#quienessomos">Quienes somos</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/#cursos">Cursos</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/#testimonios">Testimonios</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/#galeria">Galeria</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/#equipo">Equipo</Link>
            </li>
            <li className="p-4 uppercase text-sm hover:text-gray-500">
              <Link href="/#contact">Contacto</Link>
            </li>
          </ul>
          <div onClick={handleNav} className="md:hidden " style={{color: `${colorMenuMobile}`}}>
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" onClick={() => setNav(false)}>
                <Image src={navLogo} alt="/" width={50} height={50} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Aprende el idioma del futuro{" "}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/">Inicio</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#quienessomos">Quienes somos</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#cursos">Cursos</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#testimonios">Testimonios</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#galeria">Galeria</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#equipo">Equipo</Link>
              </li>
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link href="/#contact">Contacto</Link>
              </li>
            </ul>
            <div className=" pt-40">
              <p className="uppercase tracking-widest ">
                Conecta con nosotros
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href="https://www.facebook.com/clubchinoyv"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    {" "}
                    <BsFacebook />
                  </div>
                </Link>
                <Link
                  href="https://www.instagram.com/clubchinoyv/"
                  target="_blank"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsInstagram />
                  </div>
                </Link>
                <Link href="https://wa.link/d6q2ga" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <BsWhatsapp />
                  </div>
                </Link>
                
                <Link href="https://www.tiktok.com/@clubchinoyv" target="_blank">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaTiktok />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
