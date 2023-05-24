import React from "react";
import { Link } from "react-router-dom";

const Card = ({ van }) => {
  return (
    <Link to={`/vans/${van.id}`}>
      <div className="p-3 shadow border rounded group overflow-hidden bg-amber-50">
        <div className=" w-[250px] h-48 overflow-hidden rounded ">
          <img
            src={van.image}
            alt=""
            className="w-full group-hover:scale-[1.2] duration-200"
          />
        </div>
        <div className=" flex flex-col gap-2 items-center mt-3">
          <h2 className="text-lg font-bold"> {van.name} </h2>
          <p> ${van.price} / day </p>
        </div>
        <div
          className={` ${
            van.type === "simple"
              ? "bg-orange-600"
              : van.type === "luxury"
              ? "bg-blue-500"
              : "bg-green-800"
          } text-center py-1 rounded capitalize text-white  mt-3`}
        >
          {" "}
          {van.type}{" "}
        </div>
      </div>
    </Link>
  );
};

export default Card;
