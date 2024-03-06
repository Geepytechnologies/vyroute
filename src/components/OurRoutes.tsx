import React from "react";
import Slider from "./Slider";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

type Props = {};

const OurRoutes = (props: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div>
        <p className="font-popp text-black font-[500] text-3xl">
          Best Trip prices
        </p>
        <p>Explore efficient transport services at best fares</p>
        <div className="flex gap-2 text-white">
          <div className="bg-black rounded-full p-2">
            <FaLongArrowAltLeft className="" />
          </div>
          <div className="bg-black rounded-full p-2">
            <FaLongArrowAltRight className="" />
          </div>
        </div>
      </div>
      <div>
        <Slider />
      </div>
    </div>
  );
};

export default OurRoutes;
