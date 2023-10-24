import { Footer, Navbar } from "@/sections";
import React from "react";

const LayoutForAll = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LayoutForAll;
