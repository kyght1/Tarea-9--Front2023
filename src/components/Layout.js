/*Layout*/
import React from "react";
import HeaderReact from "./HeaderReact";
import NavReact from "./NavReact";
import AsideReact from "./AsideReact";
import PilaresReact from "./PilaresReact";
import FooterReact from "./FooterReact";
import HeadReact from "./HeadReact";
import MainReact from "./MainReact";
export const Layout = () => {
  return (
    <>
    <div className="layout">
      <HeadReact/>
      <HeaderReact/>
      <NavReact/>
      <AsideReact/>
      <MainReact/>
      
      <PilaresReact/>
      <FooterReact/>
     </div>
    </>
  );
};
