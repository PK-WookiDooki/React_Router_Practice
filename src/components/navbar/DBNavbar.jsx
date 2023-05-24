import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

const DBNavbar = () => {
  const [isActive, setIsActive] = useState("");

  return (
    <div className=" sticky top-16 bg-amber-100 z-[5]">
      <nav className="flex flex-row items-center gap-5 py-5 justify-center">
        <NavLink
          // onClick={() => setIsActive("Dashboard")}
          end
          className={` nav-link ${
            isActive === "Dashboard" ? "text-red-600" : ""
          } border-b border-transparent duration-150 hover:border-black `}
          to={"."}
        >
          Dashboard
        </NavLink>
        <NavLink
          // onClick={() => setIsActive("Income")}
          className={` nav-link ${
            isActive === "Income" ? "text-red-600" : ""
          } border-b border-transparent duration-150 hover:border-black `}
          to={"income"}
        >
          Income
        </NavLink>
        <NavLink
          // onClick={() => setIsActive("Vans")}
          className={` nav-link ${
            isActive === "Vans" ? "text-red-600" : ""
          } border-b border-transparent duration-150 hover:border-black `}
          to={"vans"}
        >
          Vans
        </NavLink>
        <NavLink
          // onClick={() => setIsActive("Reviews")}
          className={` nav-link ${
            isActive === "Reviews" ? "text-red-600" : ""
          } border-b border-transparent duration-150 hover:border-black `}
          to={"reviews"}
        >
          Reviews
        </NavLink>
      </nav>
    </div>
  );
};

export default DBNavbar;
