import React from "react";
import { Outlet } from "react-router-dom";
import TheNavBar from "../components/TheNavBar";

const GuestLayout = () => {
  return (
    <div>
      <TheNavBar />
      <Outlet />
    </div>
  );
};

export default GuestLayout;
