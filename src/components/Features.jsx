import React from "react";
import headphones2 from "../assets/headphones2.png";
import headphones3 from "../assets/headphones3.png";

import FeatureBox from "./FeatureBox";

const Features = () => {
  const productFeatures = [
    {
      id: 1,
      feature: "Immersive 360-Degree Surround Sound",
    },
    {
      id: 2,
      feature: "Adaptive Noise Cancellation",
    },
    {
      id: 3,
      feature: "Gesture-Based Controls",
    },
    {
      id: 4,
      feature: "Biometric Monitoring",
    },
    {
      id: 5,
      feature: "Augmented Reality (AR) Integration",
    },
    {
      id: 6,
      feature: "Long-lasting Battery Life",
    },
  ];

  return (
    <div className=" bg-[#000530] grid grid-cols-2 sm:grid-cols-1 grid-rows-2 pt-20">
      <div className="flex p-4 overflow-hidden">
        <img src={headphones2} alt="" className=" object-contain" />
      </div>
      <div className="flex flex-col items-center justify-evenly">
        {productFeatures.map(
          (p) => p.id <= 3 && <FeatureBox key={p.id} text={p.feature} />
        )}
      </div>

      <div className="flex gap-10 flex-col items-center justify-evenly">
        {productFeatures.map(
          (p) => p.id > 3 && <FeatureBox key={p.id} text={p.feature} />
        )}
      </div>
      <div className="flex p-4 overflow-hidden">
        <img src={headphones3} alt="" className=" object-contain" />
      </div>
    </div>
  );
};

export default Features;
