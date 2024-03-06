import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";

type Props = {};

const Header = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="h-[90px] bg-[#00222f] flex items-center px-2 justify-between">
      <Logo />
      {/* :::Navigation::: */}
      <div className="text-white font-rob hidden md:flex gap-8">
        <Link to={"/"}>Home</Link>
        <Link to={"/"}>Terminals</Link>
        <Link to={"/"}>Hire</Link>
        <Link to={"/"}>FAQ</Link>
      </div>
      <button
        onClick={() => navigate("/login")}
        className="hidden md:flex text-white border border-white rounded-md px-3 py-2 font-[500]"
      >
        SignIn
      </button>
      <IoMenuOutline className="text-white flex md:hidden border border-white text-[25px] rounded-sm" />
    </div>
  );
};

export default Header;
