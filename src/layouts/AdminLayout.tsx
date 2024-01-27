import React from "react";
import DashboardMenu from "../components/DashboardMenu";
import { FaBell } from "react-icons/fa";

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => {
  return (
    <div className="flex">
      <DashboardMenu />
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-end pr-3 gap-5 h-[50px] w-full bg-dark">
          <div className="relative">
            <FaBell className="text-white" />
            <div className="bg-red-500 h-[8px] absolute -top-[4px] right-0 w-[8px] rounded-full  "></div>
          </div>
          <img
            className="h-[30px] w-[30px] border-[2px] border-white rounded-full"
            src="/user.jpg"
            alt=""
          />
        </div>
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;
