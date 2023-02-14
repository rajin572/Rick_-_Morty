import React from "react";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className=" bg-[#191D29] min-h-screen text-white overflow-hidden w-full">
      <Outlet />
    </div>
  );
};

export default Main;
