import React from "react";

const AgentCard = () => {
  return (
    <div>
      <div className={"max-h-[180px] relative mb-8 cardbody"}>
        <img
          src={"../public/Image/Alexa.jpg"}
          className={"w-full object-cover max-h-[180px]"}
        />
        <div className={"w-full h-full absolute top-0 left-0 overflow-hidden"}>
          <div
            className={
              "w-full h-full bg-white absolute top-[100%] left-0 duration-500 overflow-y-scroll pb-6 cardcontent"
            }
          >
            <div className={"min-h-full p-2"}>
              <p className={"font-medium mb-2"}>Alexa Developer</p>
              <p className={"text-xs"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam, architecto cumque deleniti doloremque doloribus magnam
                odit optio possimus reiciendis rerum sequi sint tempore ut
                voluptas.{" "}
              </p>
            </div>
          </div>
        </div>

        <div
          className={
            "w-full flex justify-center absolute bottom-0 left-0 -mb-6"
          }
        >
          <div className={"bg-white rounded p-1 w-4/5 z-10 CardShadow"}>
            <p className={"text-center font-medium text-sm"}>Alexa</p>
            <p className={"text-xs text-center"}>Developer Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
