import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanInfo = () => {
  const { van } = useOutletContext();

  return (
    <section className="flex flex-col gap-3 tracking-wide">
      <h2>
        {" "}
        <span className="font-bold text-lg">Name :</span> {van.name}
      </h2>
      <h2>
        <span className="font-bold text-lg">Category :</span> {van.type}
      </h2>
      <h2>
        <span className="font-bold text-lg">Description :</span>{" "}
        {van.description}
      </h2>
      <h2>
        <span className="font-bold text-lg">Visibility :</span> Public
      </h2>
    </section>
  );
};

export default HostVanInfo;
