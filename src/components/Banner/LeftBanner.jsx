import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiWordpress, SiLaravel, SiFlutter } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Professional Coder.",
      "Full Stack Developer.",
      "Digital Marketer.",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ishrakul Islam</span>
        </h1>
        <h2 className="text-3xl font-bold text-white">
          a <span className="">{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a full stack developer, I possess a comprehensive skill set that
          allows me to handle all aspects of web application development. With
          expertise in both front-end and back-end technologies, I am capable of
          creating robust, scalable, and user-friendly software solutions.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 xl:gap-0 justify-between">
        <div className="">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a
                href="https://www.linkedin.com/in/md-ishrakul-islam-efaz-5388b01a5/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://twitter.com/EfazIshrak" target="_blank">
                <FaTwitter />
              </a>
            </span>
            <span className="bannerIcon">
              <a href="https://github.com/cseishrakul" target="_blank">
                <FaGithub />
              </a>
            </span>
          </div>
        </div>
        <div className="">
          <h2 className="text-base uppercase font-titleFont mb-4">
            Best skill on
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiFlutter />
            </span>
            <span className="bannerIcon">
              <SiWordpress />
            </span>
            <span className="bannerIcon">
              <SiLaravel />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
