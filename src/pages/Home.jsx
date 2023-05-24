import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className=" bg-gray-800 w-full flex justify-center items-center">
      <div className="p-5 w-[90%] lg:w-[80%] mx-auto text-white -mt-20 tracking-wide">
        <h2 className="text-4xl font-bold w-[90%] lg:w-[40%]">
          You got the travel plans, we got the travel vans.
        </h2>
        <p className="text-gray-300 tracking-wider mt-3 lg:w-[50%] mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          assumenda expedita repellendus excepturi minus numquam mollitia sed
          dolor nulla vero.
        </p>
        <div className="md:w-fit">
          <Link
            to={"/vans"}
            className=" w-full md:w-52 mx-auto block bg-orange-500 text-center rounded py-2 font-bold"
          >
            Find your van
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
