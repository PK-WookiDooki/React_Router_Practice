import React, { useEffect, useState } from "react";
import { Card } from "../components";

const Vans = () => {
  const [vans, setVans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((json) => setVans(json.vans));
    setIsLoading(false);
  }, []);
  //   console.log({ vans });

  if (isLoading) {
    return (
      <p className="text-center tracking-wider">
        {" "}
        Loading . . . Please wait a second!{" "}
      </p>
    );
  } else {
    return (
      <div className=" min-h-screen bg-amber-100 w-[90%] lg:w-[80%] mx-auto py-5 overflow-y-auto ">
        <h2 className="text-2xl font-bold text-center">
          Explore our van options
        </h2>
        <div className=" flex flex-row flex-wrap justify-center items-stretch gap-5 mt-5">
          {vans.map((van) => {
            return <Card key={van.id} van={van} />;
          })}
        </div>
      </div>
    );
  }
};

export default Vans;
