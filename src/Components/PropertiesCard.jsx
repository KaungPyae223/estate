import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaBathSolid, LiaBedSolid, LiaCarSideSolid } from "react-icons/lia";
import { BiArea } from "react-icons/bi";

const PropertiesCard = () => {
  return (
    <div className={"p-1.5 rounded-[0.75rem] bg-pink-100"}>
      <div className={"rounded-lg relative"}>
        <img
          src={"../public/Image/Interior.jpg"}
          className={"top-0 left-0 rounded-lg"}
        />
        <p
          className={
            "bg-[#00000066] text-white w-fit px-3 py-1 rounded-lg absolute top-3 right-3 text-sm"
          }
        >
          FOR SALE
        </p>
        <div
          className={
            "flex w-full text-white justify-between p-3 align-middle text-lg absolute bottom-0 left-0"
          }
        >
          <p>5000 $</p>
          <AiOutlineHeart className={"text-xl"} />
        </div>
      </div>
      <p className={"text-xl font-medium my-2"}>Gardenia Villa - Soba</p>
      <p className={"text-sm"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur,
        delectus!
      </p>
      <div className={"w-full flex justify-around align-middle my-3 gap-3"}>
        <div className={"flex flex-col items-center gap-2"}>
          <LiaBedSolid className={"text-3xl"} />
          <p>3</p>
        </div>
        <div className={"flex flex-col items-center gap-2"}>
          <LiaBathSolid className={"text-3xl"} />
          <p>4</p>
        </div>
        <div className={"flex flex-col items-center gap-2"}>
          <LiaCarSideSolid className={"text-3xl"} />
          <p>3</p>
        </div>
        <div className={"flex flex-col items-center gap-2"}>
          <BiArea className={"text-3xl"} />
          <p>3200 sqft</p>
        </div>
      </div>
      <button
        className={
          "bg-neutral-700 text-white py-1.5 rounded-lg mt-5 mb-2 w-4/5 mx-auto block px-5"
        }
      >
        Read More
      </button>
    </div>
  );
};

export default PropertiesCard;
