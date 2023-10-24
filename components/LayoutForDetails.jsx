import FooterDetails from "@/sections/FooterDetails";
import NavbarDetails from "@/sections/NavbarDetails";
import React from "react";

const LayoutForDetails = ({ children }) => {
  return (
    <>
      <NavbarDetails />
      {children}
      <FooterDetails />
    </>
  );
};

export default LayoutForDetails;
