import React from "react";
import headphones1 from "../assets/headphones1.png";
const Home = () => {
  return (
    <div
      name="Home"
      className="pt-20 sm:grid-cols-1 h-screen w-screen grid grid-rows-2 grid-cols-2  bg-[#000530]"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[#67CC95] p-3  pl-4 pr-4 flex items-center justify-center rounded-md">
          <p className="text-white">New!</p>
        </div>
        <h2 className="text-6xl text-white">
          VoxAura <br /> FuturaSound
        </h2>
      </div>
      <div className="flex items-center justify-center sm:overflow-hidden sm:p-10 ">
        <img src={headphones1} alt="headphones" />
      </div>
      <div className="w-[80%] col-span-2 md:col-span-1    self-center justify-self-center h-[2px] bg-white"></div>
    </div>
  );
};

export default Home;
