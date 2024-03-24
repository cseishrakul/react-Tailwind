import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Part One */}
      <div className="">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005-2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Diploma in Computer Technology"
            subTitle="Sylhet Polytechnic Institute"
            result="3.31/4"
            des="I completed my diploma in computer technology from this institute in 2021"
          />

          <ResumeCard
            title="Secondary School Certificate"
            subTitle="Blue Bird School & College"
            result="4.86/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>

      {/* Part Two */}
      <div className="">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010-2022</p>
          <h2 className="text-3xl lgl:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 py-mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Laravel Developer"
            subTitle="EnuvaIT - (2022-2023)"
            result="Bangladesh"
            des="i worked as laravel developer in this company.Beside this i also worked as a wordpress theme developer in this company"
          />

          <ResumeCard
            title="Wordpress Theme Developer"
            subTitle="Future Lab Institute(2021-2022)"
            result="Bangladesh"
            des="I worked as a wordpress theme developer in this company"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
