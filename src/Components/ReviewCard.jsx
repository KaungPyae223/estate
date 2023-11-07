import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";

const ReviewCard = () => {
  return (
    <div>
      <div className={"bg-white p-3 rounded-lg mt-12 CardShadow mb-3"}>
        <div
          className={
            "flex justify-between flex-col-reverse gap-5 md:flex-row  items-start"
          }
        >
          <div>
            <p className={"font-medium text-xl"}>Alexa</p>
            <p
              className={
                "text-xs text-orange-400 flex justify-start items-center gap-1 "
              }
            >
              <CiLocationOn className={"text-sm font-bold"} />
              No.48 down town New York
            </p>
          </div>
          <img
            src={"public/Image/Alexa.jpg"}
            className={
              "w-[75px] h-[75px] rounded-[45px] mx-auto md:mx-0 -mt-12"
            }
          />
        </div>
        <BiSolidQuoteAltLeft className={"mt-3 text-lg text-green-700"} />
        <p className={"text-sm text-neutral-700  text-justify"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at
          dolorem id laboriosam nobis omnis pariatur quaerat recusandae
          repudiandae similique!
        </p>
        <BiSolidQuoteAltRight
          className={"mb-3 text-lg text-green-700 ms-auto"}
        />
        <div className={"flex justify-center gap-3 text-yellow-500 mb-2"}>
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
          <BsStarFill />
        </div>
        <p className={"text-xs text-center"}>12 October 2023</p>
      </div>
    </div>
  );
};

export default ReviewCard;
