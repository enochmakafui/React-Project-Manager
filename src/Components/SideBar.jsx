import React from "react";
import Button from "./Button";

const SideBar = () => {
  return (
    <div
      className="bg-black h-screen  ml-3 rounded-md text-white flex  flex-col  w-4/5  
  "
    >
      <h1 className="text-center text-3xl font-bold my-16 text-gray-400">Your Projects</h1>
      <Button>+ Add Projects</Button>
    </div>
  );
};

export default SideBar;
