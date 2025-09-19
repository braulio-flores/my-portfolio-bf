import Image from "next/image";
import React from "react";
import MyCards from "@/components/modales/MyCards";

const MyName = () => {
  return (
    <>
      <div className="text-lg sm:text-xl text-center sm:text-left">
        Happy Welcome!
      </div>
      <h1 className="text-2xl sm:text-6xl lg:text-9xl font-semibold text-center sm:text-left leading-[1.1]">
        Braulio Flores
      </h1>
      <h1 className="text-sm sm:text-base lg:text-2xl font-semibold text-center sm:text-left leading-[1.1]">
        Full Stack Web Developer | JavaScript | React | Spring Boot | Python
      </h1>
      <MyCards />
    </>
  );
};

export default MyName;
