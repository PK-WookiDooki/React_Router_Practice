import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import "./hostNav.css";

const HostVanDetail = () => {
  const { id } = useParams();
  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans[0]));
  }, []);

  if (!van) {
    return (
      <p className="text-lg font-bold text-center">
        {" "}
        Loading . . . Please wait a second!
      </p>
    );
  }

  return (
    <div className="">
      <div className="p-3 bg-amber-50 lg:w-[500px] mx-auto">
        <Link
          to={".."}
          relative="path"
          className="border-b border-transparent hover:text-blue-600 hover:border-blue-600 duration-150 py-1"
        >
          &larr; Back to all vans
        </Link>

        <div className="flex flex-row gap-5 items-center  mt-8">
          <div className=" h-40 w-52 rounded">
            <img
              src={van.image}
              alt=""
              className="rounded object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <p
              className={` ${
                van.type === "simple"
                  ? "bg-orange-600"
                  : van.type === "luxury"
                  ? "bg-blue-500"
                  : "bg-green-800"
              } text-center py-1 rounded capitalize text-white w-fit px-5 mt-3`}
            >
              {" "}
              {van.type}{" "}
            </p>
            <h2 className="text-xl font-bold "> {van.name} </h2>
            <p>
              {" "}
              <span className="font-medium">${van.price}</span>/day{" "}
            </p>
          </div>
        </div>

        <nav className="flex flex-row items-center gap-5  py-5 tracking-wide">
          <NavLink
            className={` detail-link border-b border-transparent hover:border-black`}
            to={"."}
            end
          >
            {" "}
            Details{" "}
          </NavLink>
          <NavLink
            className={` detail-link border-b border-transparent hover:border-black`}
            to={"pricing"}
          >
            {" "}
            Pricing{" "}
          </NavLink>
          <NavLink
            className={` detail-link border-b border-transparent hover:border-black`}
            to={"photos"}
          >
            {" "}
            Photos{" "}
          </NavLink>
        </nav>

        <Outlet context={{ van }} />
      </div>
    </div>
  );
};

export default HostVanDetail;
