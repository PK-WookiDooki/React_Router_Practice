import React from "react";
import { DBNavbar } from "..";
import { Outlet } from "react-router-dom";

const HostLayout = () => {
  return (
    <div className=" w-[90%] lg:w-[80%] mx-auto">
      <DBNavbar />
      <Outlet />
    </div>
  );
};

export default HostLayout;
