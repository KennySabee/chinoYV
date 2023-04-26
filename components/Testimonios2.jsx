import React from "react";
import TestimonioCard from "@/components/TestimonioCard";

const Testimonios2 = () => {
  return (
    <div id="testimonios" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-600">
          Testimonios
        </p>
        <h2 className="py-4">Lo que nuestros alumnos dicen</h2>

        <div className="grid mb-5  rounded-lg md:mb-12 md:grid-cols-2">
          <TestimonioCard 
          title={'Very easy this was to integrate'} 
          info={`"If you care for your time, I hands down would go with this."`} 
          name={'Bonnie Green'} 
          profession={'Developer at Open AI'}
          img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
          />
          <TestimonioCard 
          title={'Very easy this was to integrate'} 
          info={`"If you care for your time, I hands down would go with this."`} 
          name={'Bonnie Green'} 
          profession={'Developer at Open AI'}
          img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
          />
          <TestimonioCard 
          title={'Very easy this was to integrate'} 
          info={`"If you care for your time, I hands down would go with this."`} 
          name={'Bonnie Green'} 
          profession={'Developer at Open AI'}
          img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
          />
          <TestimonioCard 
          title={'Very easy this was to integrate'} 
          info={`"If you care for your time, I hands down would go with this."`} 
          name={'Bonnie Green'} 
          profession={'Developer at Open AI'}
          img={"https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"}
          />
         
        </div>
      </div>
    </div>
  );
};

export default Testimonios2;
