import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className=" bg-[#000530] items-center justify-center flex pt-20 h-screen w-screen flex-col"
    >
      <h2 className="text-white text-4xl pb-10">About</h2>
      <div className="w-[80%] col-span-2 md:col-span-1    self-center justify-self-center h-[2px] bg-white"></div>
      <p className="flex pb-10 text-white p-20 pt-25 pb-25">
        InfinityBeat is not just a headphone brand; it's a revolution in sound.
        We're here to take your auditory experience to new heights. Our mission
        is simple: to craft headphones that transport you to a world of infinite
        beats and unparalleled audio quality. Welcome to the future of sound.
      </p>
      <div className="w-[80%] col-span-2 md:col-span-1 mt-10   self-center justify-self-center h-[2px] bg-white"></div>
    </div>
  );
};

export default About;
