import React from "react";

type Props = {};

const Logo = (props: Props) => {
  return (
    <div>
      <img src="/vyroute-logo2.png" alt="" className="h-[50px] w-[50px]" />
      <p className="text-primary font-[500] font-salsa text-xl">Vyroute</p>
    </div>
  );
};

export default Logo;
