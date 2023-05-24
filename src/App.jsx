import React from "react";
import {
  Home,
  About,
  Vans,
  VanDetail,
  Dashboard,
  Income,
  Reviews,
  HostVans,
  HostVanDetail,
  HostVanPhotos,
  HostVanPricing,
  HostVanInfo,
} from "./pages";
import { HostLayout, Layout, Navbar } from "./components";

import { Outlet, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-amber-100">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          {/* nested route */}
          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />

            {/* <Route path="vans" element={<Outlet />}></Route> */}
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default App;
