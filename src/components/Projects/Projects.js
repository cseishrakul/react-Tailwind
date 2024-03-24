import React from "react";
import Title from "../Layouts/Title";
import ProjectCard from "./ProjectCard";
import {
  delivery,
  ecom,
  onFlick,
  pos,
  rf1,
  sway,
} from "../../assets/index";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <a
          href="https://github.com/cseishrakul/react-food-delivery/tree/main"
          target="_blank"
        >
          <ProjectCard
            title="React Restaurant App"
            des="Beautiful restaurant app with reactJs(Tailwind css, framer motion & react icons)."
            src={rf1}
          />
        </a>
        <a
          href="https://github.com/cseishrakul/food-delivery-react"
          target="_blank"
        >
          <ProjectCard
            title="Food Delivery App"
            des="Beautiful food app with reactJs(Tailwind css, framer motion & react icons)."
            src={delivery}
          />
        </a>

        <a href="https://github.com/cseishrakul/e-com-lh" target="_blank">
          <ProjectCard
            title="E-commerce Website"
            des="Beautiful E-commerce website with html,css,bootstrap,js & Laravel 9."
            src={ecom}
          />
        </a>
        <a href="https://github.com/cseishrakul/pos-laravel" target="_blank">
          <ProjectCard
            title="Stock Management"
            des="Beautiful store management with html,css,bootstrap,js & Laravel 9."
            src={pos}
          />
        </a>
        <a href="https://dev-agency-test007.pantheonsite.io/" target="_blank">
          <ProjectCard
            title="OnFlick Agency"
            des="Beautiful website of onflick agency with the help of wordpress."
            src={onFlick}
          />
        </a>
        <a href="https://dev-ishrak.pantheonsite.io/" target="_blank">
          <ProjectCard
            title="Sway"
            des="Beautiful website of sway agency with the help of wordpress."
            src={sway}
          />
        </a>
      </div>
    </section>
  );
};

export default Projects;
