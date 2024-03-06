import React from "react";
import { FaRoadCircleCheck } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { IoCarSportSharp, IoLocation } from "react-icons/io5";

type Props = {};

const Values = (props: Props) => {
  return (
    <div>
      <div className="flex items-center py-6 pl-4 gap-4">
        <div className="flex flex-col items-center">
          <div className="bg-[#6ba4b8] h-[60px] w-[60px] flex items-center justify-center rounded-full">
            <FaRoadCircleCheck className="text-[50px] text-primary" />
          </div>
          <h2 className="font-[500]">Safety First</h2>
          <h3>
            Our experienced staff and professionally trained drivers ensure your
            safety at all times.
          </h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#6ba4b8] h-[60px] w-[60px] flex items-center justify-center rounded-full">
            <IoIosPricetags className="text-[50px] text-primary" />
          </div>
          <h2 className="font-[500]">Affordable Prices</h2>
          <h3>We offer you the best service for your budget.</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#6ba4b8] h-[60px] w-[60px] flex items-center justify-center rounded-full">
            <IoCarSportSharp className="text-[50px] text-primary" />
          </div>
          <h2 className="font-[500]">Comfort</h2>
          <h3>We offer you the best comfort for your journey.</h3>
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#6ba4b8] h-[60px] w-[60px] flex items-center justify-center rounded-full">
            <IoLocation className="text-[50px] text-primary" />
          </div>
          <h2 className="font-[500]">Nationwide service</h2>
          <h3>We provide transportation services across West Africa.</h3>
        </div>
      </div>
    </div>
  );
};

export default Values;
