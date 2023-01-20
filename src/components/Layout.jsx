import React from "react";
import { Outlet } from "react-router-dom";
import Navs from "./Navs";

const Layout = ({ isAuth, signUserOut }) => {
  return (
    <>
      <Navs isAuth={isAuth} signUserOut={signUserOut} />
      <Outlet />
    </>
  );
};

export default Layout;
