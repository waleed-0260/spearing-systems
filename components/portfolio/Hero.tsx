import React from "react";
import Header from "../home/Header";
const Hero = () => {
  return (
    <>
      <Header />
      <div
  className="w-full flex flex-col items-center justify-center bg-cover h-[39rem] overflow-hidden relative"
>
  <div
    className="w-full h-full flex flex-col items-center justify-center bg-cover bg-center"
    style={{ backgroundImage: `url('/images/aboutBanner.png')` }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <p className="font-bold text-3xl text-white heading relative">PORTFOLIO</p>
  </div>
</div>

    </>
  );
};

export default Hero;
