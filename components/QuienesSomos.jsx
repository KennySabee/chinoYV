import React from "react";
import quienesSomosImg from "@/public/assets/quienesSomosChinoYV.jpg";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const QuienesSomos = () => {
  return (
    <section
      id="quienessomos"
      className="w-full  px-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          
          <div className="uppercase tracking-widest text-3xl text-red-600 font-semibold">
          <Typewriter
              options={{
                strings: [ "Quienes somos","关于我们"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                cursor: ''
                
              }}
              
              
            />
          </div>
          <h2 className="py-4">Chino YV</h2>
          <p className="py-2 text-gray-600">
            {`//`} Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className="py-2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            accusamus dolorum nam exercitationem numquam nesciunt quas doloribus
            totam consequatur, eaque repellendus autem, provident unde adipisci
            blanditiis perferendis distinctio, quidem quos.
          </p>
          <p className="py-2 text-gray-600">
            Aperiam temporibus repellendus fuga iusto nesciunt beatae dicta ut.
            Est debitis vero molestias accusamus nostrum unde laudantium optio.
            Rerum, repellendus eveniet consectetur ipsam unde repellat iure
            minima modi porro. Vel.Aperiam temporibus repellendus fuga iusto
            nesciunt beatae dicta ut. Est debitis vero molestias accusamus
            nostrum unde laudantium optio. Rerum, repellendus eveniet
            consectetur ipsam unde repellat iure minima modi porro. Vel.
          </p>
          <Link href="/#cursos">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Mira nuestros cursos.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded-xl" src={quienesSomosImg} alt="quienes somos" />
        </div>
      </div>
    </section>
  );
};

export default QuienesSomos;
