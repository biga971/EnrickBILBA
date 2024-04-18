import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import Reveal from '../reveal'

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      <Reveal>
        <Title
          title="Vous pouvez me faire un feedback"
          des="Projets"
        />
      </Reveal>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <Reveal>
           <ProjectsCard
              title="SOCIAL MEDIA CLONE"
              des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              src={projectOne}
            />
        </Reveal>
        <Reveal>
          <ProjectsCard
            title="E-commerce Website"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectTwo}
          />
        </Reveal>
        <Reveal>
          <ProjectsCard
            title="Chatting App"
            des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            src={projectThree}
          />
        </Reveal>
      </div>
    </section>
  );
}

export default Projects