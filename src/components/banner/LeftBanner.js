import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';
import HomeReveal from '../reveal/homeReveal';

const LeftBanner = () => {
  const words = ["Full Stack.", "Mobile."]
    const [text] = useTypewriter({
      words: words,
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
    <HomeReveal delay={0.5}>
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Bienvenue sur mon Portfolio </h4>
        <h1 className="text-6xl font-bold text-white">
          <span className="text-designColor capitalize">Enrick BILBA</span> 
        </h1>
        <h2 className="text-4xl font-bold text-white">
          Développeur <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          Je suis un développeur Full Stack spécialisé dans les technologies 
          Next.js, React, React Native et Node.js. 
          Passionné par le développement web et mobile, je maîtrise les 
          outils nécessaires pour concevoir 
          des solutions innovantes et performantes.
        </p>
      </div>
    </HomeReveal>

     <HomeReveal delay={0.75}>
      <Media />
     </HomeReveal>
      
    </div>
  );
}

export default LeftBanner