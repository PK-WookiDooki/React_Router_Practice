import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPhotos = () => {
  const { van } = useOutletContext();
  return (
    <div>
      <img src={van.image} alt="" className=" h-36 " />
    </div>
  );
};

export default HostVanPhotos;
