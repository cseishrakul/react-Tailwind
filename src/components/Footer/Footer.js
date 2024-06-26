import React from "react";
import {FaFacebookF, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import { logo } from "../../assets/index";
import FooterBottom from "./footerBottom/FooterBottom";

const Footer = () => {
  return (
    <div className="w-full py-20 border-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 gap-8">
      <div className="w-full h-full flex flex-col gap-8">
        <img className="w-32" src={logo} alt="" />
        <div className="flex gap-4">
            <span className="bannerIcon">
                <FaFacebookF />
            </span>
            <span className="bannerIcon">
                <FaTwitter />
            </span>
            <span className="bannerIcon">
                <FaLinkedinIn />
            </span>
        </div>
      </div>
      <div className="w-full h-full">
        <h3 className="text-xl uppercase text-designColor tracking-wide">Quick Link</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">About <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Portfolio <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Services <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Blog <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Contact <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
        </ul>
      </div>
      <div className="w-full h-full">
      <h3 className="text-xl uppercase text-designColor tracking-wide">resources</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Authentication <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">System Status <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Terms of Service <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Pricing <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Over Right <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
        </ul>
      </div>
      <div className="w-full h-full">
      <h3 className="text-xl uppercase text-designColor tracking-wide">developers</h3>
        <ul className="flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden">
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Documentation <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Authentication <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">API Reference <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Support <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
            <li className="">
                <span className="w-full text-lg hover:text-designColor duration-300 cursor-pointer relative group">Open Source <span className="absolute h-[1px] w-full inline-flex bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-300"></span> </span>
            </li>
        </ul>
      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;
