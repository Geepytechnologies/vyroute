import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { FaChartBar, FaShippingFast, FaTruck } from "react-icons/fa";
import { FaPeopleGroup, FaUser } from "react-icons/fa6";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";

type Props = {};

const DashboardMenu = (props: Props) => {
  const [currentPage, setCurrentPage] = useState("");

  const location = useLocation();

  useEffect(() => {
    setCurrentPage(location.pathname);
  }, [location]);

  return (
    <div className="bg-dark min-h-screen min-w-[250px] font-popp">
      <Logo />
      <div className="w-full flex justify-center">
        <div className="w-[90%]">
          <Link
            to="/admin"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <RxDashboard />
            <p>Dashboard</p>
          </Link>
          <Link
            to="/admin/vehicles"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/vehicles"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <FaTruck />
            <p>Vehicles</p>
          </Link>

          <Link
            to="/admin/transporters"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/transporters"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <FaPeopleGroup />
            <p>Transporters</p>
          </Link>
          <Link
            to="/admin/customers"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/customers"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <FaUser />
            <p>Customers</p>
          </Link>
          <Link
            to="/admin/shipments"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/shipments"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <FaShippingFast />
            <p>Shipments</p>
          </Link>
          <Link
            to="/admin/invoices"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/invoices"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <LiaFileInvoiceSolid />
            <p>Invoices</p>
          </Link>
          <Link
            to="/admin/payments"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/payments"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <MdOutlinePayment />
            <p>Payments</p>
          </Link>
          <Link
            to="/admin/analytics"
            className={`flex gap-2 my-2 items-center rounded-xl   p-2  ${
              currentPage === "/admin/analytics"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <FaChartBar />
            <p>Analytics</p>
          </Link>
          <Link
            to="/admin/settings"
            className={`flex gap-2 my-2 items-center rounded-xl  p-2  ${
              currentPage === "/admin/settings"
                ? "bg-primary text-dark drop-shadow-lg"
                : " hover:text-[black] hover:bg-offset text-offset"
            }`}
          >
            <IoMdSettings />
            <p>Settings</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardMenu;
