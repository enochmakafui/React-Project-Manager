import React from "react";

const Button = (props) => {
    
  return (
    <button
      className={`bg-slate-950 rounded-md px-3 py-2 w-40 mx-auto text-gray-300 hover:bg-slate-900 `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );    
};

export default Button;
