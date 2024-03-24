import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe, FaBars } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../Layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<FaBars />}
        />
        <Card
          title="App Development"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Wordpress"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<FaGlobe />}
        />
        <Card
          title="Seo Optimization"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<SiProgress />}
        />
        <Card
          title="Figma to Html"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
          icon={<SiAntdesign />}
        />
        <Card
          title="Graphics Design"
          des="loremExcepteur do commodo proident ex esse labore ut dolor est non fugiat ex exercitation."
        />
      </div>
    </section>
  );
};

export default Features;
