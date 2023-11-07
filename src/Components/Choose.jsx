import React from "react";

const Choose = ({ background, title, icon }) => {
  return (
    <div
      className={
        "border border-blue-500 py-4 my-2 bg-sky-100 rounded-lg flex flex-col items-center"
      }
    >
      <div
        className={`mb-4 w-[50px] h-[50px] rounded-[25px] ${background} text-2xl flex items-center justify-center`}
      >
        {icon}
      </div>
      <p className={"font-bold text-lg mb-2"}>{title}</p>
      <p className={"text-xs text-neutral-500 text-center mx-4"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default Choose;
