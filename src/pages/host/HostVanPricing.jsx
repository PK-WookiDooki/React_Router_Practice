import React from "react";
import { useOutletContext } from "react-router-dom";

const HostVanPricing = () => {
  const { van } = useOutletContext();

  return (
    <div>
      <span className="text-lg font-bold">${van.price} </span>/day
    </div>
  );
};

export default HostVanPricing;
