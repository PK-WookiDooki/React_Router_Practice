import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <section className=" sticky top-0 border-b bg-amber-100 border-gray-400 shadow z-10">
      <div className="py-5 w-[90%] lg:w-[80%] mx-auto  flex flex-row justify-between items-center">
        <Link
          // onClick={() => setIsActive("")}
          to={"/"}
          className=" uppercase text-xl font-bold"
        >
          #VanLife
        </Link>
        <nav className="flex items-center gap-5 font-medium">
          <NavLink
            // onClick={() => setIsActive("About")}
            to={"/about"}
            className={` nav-link ${
              isActive === "About" ? "text-red-600" : ""
            } border-b border-transparent duration-150 hover:border-black `}
          >
            About
          </NavLink>
          <NavLink
            // onClick={() => setIsActive("Host")}
            to={"/host"}
            className={` nav-link ${
              isActive === "Host" ? "text-red-600" : ""
            } border-b border-transparent duration-150 hover:border-black `}
          >
            Host
          </NavLink>
          <NavLink
            // onClick={() => setIsActive("Vans")}
            to={"/vans"}
            className={` nav-link ${
              isActive === "Vans" ? "text-red-600" : ""
            } border-b border-transparent duration-150 hover:border-black `}
          >
            Vans
          </NavLink>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
