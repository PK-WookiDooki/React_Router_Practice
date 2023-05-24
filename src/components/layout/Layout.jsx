import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "..";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
