import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type Props = {
  children: React.ReactNode;
};

const BasicLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <div className="footer">{children}</div>
      <Footer />
    </div>
  );
};

export default BasicLayout;
