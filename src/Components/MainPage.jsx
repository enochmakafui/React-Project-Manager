import React from "react";
import Logo from "./Logo";
import Button from "./Button";

const MainPage = () => {
  return (
    <div className=" -ml-20 flex items-center flex-col pt-36 ">
      <Logo />
      <h2 className="my-5 text-amber-900 font-bold text-2xl">
        No Project Selected{" "}
      </h2>
      <p className="text-amber-900 mb-7">
        Edit a project or get started with a new one{" "}
      </p>
      <Button>Create new project</Button>
    </div>
  );
};

export default MainPage;
