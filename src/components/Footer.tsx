import React from "react";
import Logo from "./Logo";
import { AiOutlineCopyright } from "react-icons/ai";
import useStore from "../utils/store";

type Props = {};

const Footer = (props: Props) => {
  const { appdetails } = useStore();
  const year = new Date().getFullYear();
  return (
    <div className="h-[200px] bg-offset">
      <div className="bg-offsetdarker h-[1px]"></div>
      <div className="flex  items-center justify-center p-5 gap-2 text-textdark">
        <AiOutlineCopyright />
        <p className="text-[12px] lg:text-[14px]">
          {year} | {appdetails.name}
        </p>
      </div>
    </div>
  );
};

export default Footer;
