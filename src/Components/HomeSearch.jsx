import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const HomeSearch = () => {
  const [type, setType] = useState("Buy");

  const ChangeType = (ButtonType) => {
    setType(ButtonType);
  };

  return (
    <div className={"px-4 lg:px-0  HeroSearch"}>
      <div className={"CardShadow rounded-2xl px-3 flex w-fit mx-auto gap-3"}>
        <button
          onClick={() => ChangeType("Buy")}
          className={`px-3 py-2 ${type === "Buy" ? "ActiveBuyRent" : null}`}
        >
          Rent
        </button>
        <button
          onClick={() => ChangeType("Rent")}
          className={`px-3 py-2 ${type === "Rent" ? "ActiveBuyRent" : null}`}
        >
          Buy
        </button>
      </div>
      <div className={"CardShadow mb-9 flex flex-col py-2 rounded-2xl"}>
        <div className={"flex w-full flex-col sm:flex-row"}>
          <div className={"p-3.5 w-full sm:w-1/3"}>
            <label htmlFor={"Location"} className={"font-bold"}>
              Location
            </label>
            <input
              id={"Location"}
              type={"text"}
              className={"Input mt-2"}
              placeholder={"Where you want live"}
            />
          </div>
          <div className={"sm:w-1/3 w-full p-3.5"}>
            <label htmlFor={"Property"} className={"font-bold"}>
              Property Type
            </label>
            <select
              id={"Property"}
              className={"Input mt-2"}
              placeholder={"Deluxe"}
            >
              <option>Deluxe</option>
            </select>
          </div>
          <div className={"sm:w-1/3 w-full p-3.5 flex gap-3"}>
            <div className={"w-full"}>
              <label htmlFor={"Price"} className={"font-bold"}>
                Average Price
              </label>
              <select
                id={"Price"}
                className={"Input mt-2"}
                placeholder={"Deluxe"}
              >
                <option>0 - 100000</option>
              </select>
            </div>
            <button className={"self-end p-3 rounded-lg bg-amber-300"}>
              <AiOutlineSearch className={"text-2xl"} />
            </button>
          </div>
        </div>

        <div className={"flex w-full px-3.5 flex-wrap justify-between gap-2"}>
          <div className={"flex items-center gap-2"}>
            <input
              type={"checkbox"}
              id={"Check"}
              className={"text-amber-600 rounded"}
            />
            <label htmlFor={"Check"} className={"text-sm"}>
              Show Commercial Only
            </label>
          </div>
          <div>
            <select
              className={
                "text-sm border-none focus:outline-none focus:border-none focus:ring-0"
              }
            >
              <option className={"text-sm"}>Show Some Search Options</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSearch;
