import Image from "next/image";
import React from "react";
import MyCards from "@/components/modales/MyCards";

import myjsonscreen from "../../../assets/code.png";

const MyName = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-12 mt-2 mb-4 min-h-[10px]">
        <div className="flex-[1] sm:flex-[1] flex flex-col self-center h-full justify-center">
          <div className="text-lg sm:text-xl text-center sm:text-left">
            Happy Welcome!
          </div>
          <h1 className="text-2xl sm:text-6xl lg:text-8xl font-semibold text-center sm:text-left leading-[1.1] mb-4">
            Braulio Flores
          </h1>
          <h1 className="text-sm sm:text-base lg:text-2xl font-semibold text-center sm:text-left leading-[1.1]">
            Full Stack Web Developer
          </h1>
        </div>
        <Image
          src={myjsonscreen}
          className="mx-auto sm:mx-0 rounded-2xl flex-[3] w-[250px]"
          alt="Braulio Flores"
        />
      </div>
      <MyCards />
    </>
  );
};

export default MyName;
