import React, { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import ScrollReveal from "scrollreveal";

const Intro = () => {
  useEffect(() => {
    const str = ScrollReveal({ distance: "50px" });
    str.reveal(".Text-Up", { delay: 800, interval: 300, origin: "bottom" });
    str.reveal(".Text-Left", { delay: 400, interval: 300, origin: "right" });
    str.reveal(".Text-Left1", { delay: 1300, interval: 300, origin: "right" });
    str.reveal(".Text-Down", { delay: 800, interval: 300, origin: "top" });

    str.reveal(".Text-Right", { delay: 50, interval: 200, origin: "left" });
  }, []);
  return (
    <div
      className={
        "mb-5 mt-24 mx-3 lg:mx-0 grid grid-cols-1 md:grid-cols-3 gap-12 "
      }
    >
      <div className={"col-span-full md:col-span-1"}>
        <div className={"relative h-[350px] w-[300px] mx-auto"}>
          <img
            src={"public/Image/Home1.jpg"}
            className={
              "Text-Right absolute w-2/3 max-h-[280px] max-w-[200px] rounded-lg mt-0"
            }
          />

          <img
            src={"public/Image/Home2.jpg"}
            className={
              "Text-Left w-2/3 max-h-[280px] max-w-[200px] rounded-[16px] absolute border-8 border-white left-24 top-24"
            }
          />

          <div
            className={
              "Text-Down py-2 px-3  rounded-lg text-justify bg-neutral-200 absolute w-[200px] top-16 left-14"
            }
          >
            <div
              className={
                "flex justify-center items-center absolute bg-[#730909BB] text-white text-xl -top-4 -left-4 w-[35px] h-[35px] rounded-[30px]"
              }
            >
              <FaHome />
            </div>
            <p className={"font-bold"}>
              We are Helping people to find their Home
            </p>
          </div>
        </div>
      </div>
      <div className={"col-span-full md:col-span-2"}>
        <p className={"Text-Up text-4xl font-bold mb-2"}>
          With Us Help You Find Your Dream Home
        </p>
        <p className={"mb-2 Text-Up text-sm"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          asperiores, beatae dolore ex natus perspiciatis quos recusandae!
          Numquam reiciendis, repudiandae!
        </p>
        <div className={"flex flex-col align-top gap-5"}>
          <div className={"IntroCounterContainer Text-Left1"}>
            <p className={"text-3xl text-blue-600"}>25K+</p>
            <p className={"text-neutral-500 text-sm"}>
              Happy Customers with our services
            </p>
          </div>
          <div className={"IntroCounterContainer Text-Left1"}>
            <p className={"text-3xl text-blue-600"}>150K+</p>
            <p className={"text-neutral-500 text-sm"}>
              The best properties we provide
            </p>
          </div>
          <div className={"IntroCounterContainer Text-Left1"}>
            <p className={"text-3xl text-blue-600"}>280K+</p>
            <p className={"text-neutral-500 text-sm"}>
              Companies affiliated with us
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
