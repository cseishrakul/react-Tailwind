import React from "react";
import LeftBanner from "./LeftBanner";
import RightBanner from "./RightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-10 pb-20 flex flex-col gap-10 lgl:gap-0 lgl:flex-row items-center border-b-[1px] border-b-black font-titleFont"
    >
      {/* Left Banner */}
      <LeftBanner />
      {/* Left Banner */}

      {/* RightBanner */}
      <RightBanner />
      {/* RightBanner */}
      
    </section>
  );
};

export default Banner;
