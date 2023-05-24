import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VanDetail = () => {
  const id = useParams();
  const [van, setVan] = useState(null);
  const [isLoading, setIsLoadin] = useState(true);

  useEffect(() => {
    fetch(`/api/vans/${id.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
    setIsLoadin(false);
  }, [id]);

  //   console.log(van);

  // if (isLoading) {
  //   return (
  //     <p className="text-center tracking-wider">
  //       {" "}
  //       Loading . . . Please wait a second!{" "}
  //     </p>
  //   );
  // }

  return (
    <div className="w-[90%] lg:w-[80%] mx-auto py-5 my-auto min-h-screen">
      {van ? (
        <div className="flex flex-col lg:flex-row gap-5 justify-center items-center bg-amber-50">
          <div className=" overflow-hidden rounded w-full ">
            <img
              src={van.image}
              alt=""
              className="h-full object-cover group-hover:scale-[1.2] duration-200"
            />
          </div>
          <div className="p-10 flex flex-col gap-4">
            <div
              className={` ${
                van.type === "simple"
                  ? "bg-orange-600"
                  : van.type === "luxury"
                  ? "bg-blue-500"
                  : "bg-green-800"
              } text-center py-1 rounded capitalize text-white  mt-5 px-5 w-fit`}
            >
              {" "}
              {van.type}{" "}
            </div>
            <div className=" flex flex-row flex-wrap justify-between items-center mt-3">
              <h2 className="text-2xl font-bold"> {van.name} </h2>
              <p className="font-medium"> ${van.price} / day </p>
            </div>
            <p className="mt-3 tracking-wider"> {van.description} </p>
            <div className="mt-5">
              <Link
                to={"/vans"}
                className=" text-white bg-black px-5 py-2 capitalize rounded "
              >
                {" "}
                Back to Vans{" "}
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center tracking-wider tex-2xl font-bold">
          Loading . . . Please wait a second!
        </p>
      )}
    </div>
  );
};

export default VanDetail;
