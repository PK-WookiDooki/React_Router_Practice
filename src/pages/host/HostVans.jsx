import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HostVans = () => {
  const [listedVans, setListedVans] = useState([]);

  useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setListedVans(data.vans));
  }, []);

  return (
    <div className="py-3 mx-auto">
      <h2 className="text-2xl font-bold mb-3 text-center">Your Listed Vans</h2>
      {listedVans.length > 0 ? (
        <div className="flex flex-col gap-5 md:flex-row items-stretch mt-5 flex-wrap justify-center">
          {listedVans.map((van) => {
            return (
              <Link
                to={`/host/vans/${van.id}`}
                key={van.id}
                className=" inline-block "
              >
                <div className="w-full md:w-[400px] h-40 flex items-center p-3 bg-amber-50 rounded gap-5 group hover:shadow-md duration-150 border">
                  <div className="w-40 overflow-hidden">
                    <img
                      src={van.image}
                      alt=""
                      className="rounded group-hover:scale-[1.2] duration-200"
                    />
                  </div>
                  <div className="">
                    <h2 className="text-xl font-bold mb-2"> {van.name} </h2>
                    <p> ${van.price}/day </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <p className="text-lg font-bold text-center">
          {" "}
          Loading . . . Please wait a second!
        </p>
      )}
    </div>
  );
};

export default HostVans;
