import React from "react";

const FeatureBox = ({ text }) => {
  return (
    <div className="flex p-4 rounded-md bg-[#EEEEEE] ">
      <p className="text-black">{text}</p>
    </div>
  );
};

export default FeatureBox;
