import React from "react";

const PropertiesByLocationCard = () => {
  return (
    <div className={"h-[250px] rounded overflow-hidden relative cardbody"}>
      <img
        src={"../public/Image/Dubai.jpg"}
        className={"h-[250px] w-full object-cover"}
      />

      <div className={"absolute bottom-0 w-full pb-2 bg-[#00000087]"}>
        <p className={" text-center text-lg text-white font-bold"}>Down Town</p>
        <p className={"text-center text-white text-xs"}>20 Properties</p>
      </div>
      <div
        className={
          "h-full overflow-y-scroll bg-[#000000ad] absolute top-[100%] duration-500 left-0 cardcontent"
        }
      >
        <div className={"p-3 text-white w-full "}>
          <p className={"text-xl"}>Abu Dhabi</p>
          <p className={"text-xs my-2"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro,
            voluptas?
          </p>
          <ul className={"text-xs"}>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
          </ul>
          <p className={"text-xs my-2"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Accusantium aperiam deserunt doloribus et, excepturi incidunt
            mollitia necessitatibus neque nobis nulla, quae quam quasi
            recusandae saepe temporibus tenetur totam veniam voluptate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PropertiesByLocationCard;
