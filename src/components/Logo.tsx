import React from "react";
import { Link } from "react-router-dom";
import useStore from "../utils/store";

type Props = {};

const Logo = (props: Props) => {
  const { appdetails } = useStore();
  return (
    <Link to="/" className="flex items-center">
      <img src={appdetails.logo} alt="" className="h-[50px] w-[50px]" />
      <p className="text-primary font-[500] font-salsa text-xl">
        {appdetails.name}
      </p>
    </Link>
  );
};

export default Logo;
