import React, { useState } from "react";
import Button from "./Button";

const SideBar = (props) => {
  const [showAddProject, setShowAddProject] = useState(false);

  const showAddProjectHandler = () => {
    setShowAddProject(!showAddProject);
    props.showPage();
   
  };

  return (
    <div className="bg-black h-screen   rounded-md text-white flex  flex-col  w-4/5  ">
      <h1 className="text-center text-3xl font-bold my-16 text-gray-400">
        Your Projects
      </h1>
      <Button onClick={showAddProjectHandler}>+ Add Project</Button>
    </div>
  );
};

export default SideBar;
