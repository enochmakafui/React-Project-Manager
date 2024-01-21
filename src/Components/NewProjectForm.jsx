import React from "react";

const NewProjectForm = () => {
  return (
    <>
      <form className="flex flex-col pt-36 mr-16">
        <div className="flex justify-end mb-3">
          <button className="text-amber-500 mr-8">Cancel</button>
          <button className="bg-slate-950 rounded-md px-3 py-2 w-24 text-gray-300 hover:bg-slate-900 ">
            Save
          </button>
        </div>
        <label htmlFor="title" className="uppercase mb-2 font-bold">title</label>
        <input type="text" className="mb-5"/>
        <label html="description" className="uppercase mb-2 font-bold">description</label>
        <input type="text" className="py-4 mb-5"/>
        <label htmlFor="date" className="uppercase mb-2 font-bold">due date</label>
        <input type="date" />
      </form>
    </>
  );
};

export default NewProjectForm;
