import SkillsImages from './SkillsImage'
import htmlImg from "@/public/assets/skills/html.png";
import cssImg from "@/public/assets/skills/css.png";
import githubImg from "@/public/assets/skills/github1.png";
import jsImg from "@/public/assets/skills/javascript.png";
import nextImg from "@/public/assets/skills/nextjs.png";
import nodeImg from "@/public/assets/skills/node.png";
import reactImg from "@/public/assets/skills/react.png";
import tailwindImg from "@/public/assets/skills/tailwind.png";


const Director = () => {
  return (
    <div id='testimonios' className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-red-600">
          Testimonios
        </p>
        <h2 className="py-4">Mira lo que los demas dicen</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
         <SkillsImages
            img= {htmlImg}
            title='html'
         />
         <SkillsImages
            img= {cssImg}
            title='css'
         />
         <SkillsImages
            img= {jsImg}
            title='javascript'
         />
         <SkillsImages
            img= {reactImg}
            title='react'
         />
         <SkillsImages
            img= {tailwindImg}
            title='tailwind'
         />
         <SkillsImages
            img= {nextImg}
            title='nextjs'
         />
         <SkillsImages
            img= {githubImg}
            title='github'
         />
         <SkillsImages
            img= {nodeImg}
            title='node'
         />
        
        </div>
      </div>
    </div>
  );
};

export default Director;
