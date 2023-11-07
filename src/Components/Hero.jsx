import React, { useEffect } from "react";
import Atropos from "atropos/react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import ScrollReveal from "scrollreveal";

const Hero = () => {
  useEffect(() => {
    const str = ScrollReveal({ distance: "50px" });
    str.reveal(".Text-Up", { delay: 50, interval: 300, origin: "bottom" });
    str.reveal(".Text-Left", { delay: 50, interval: 300, origin: "right" });
  }, []);

  return (
    <Atropos>
      <div
        data-atropos-offset="0"
        className={
          "bg-[url('public/Image/Hero.jpg')] mb-9 h-[90vh] bg-center bg-cover flex justify-center flex-wrap p-12 text-white"
        }
      >
        <div
          data-atropos-offset="3"
          className={"self-center backdrop-blur-sm bg-black/30 rounded-xl py-5"}
        >
          <p className={"Text-Up text-5xl font-medium mb-5 text-center"}>
            Welcome from ESTATE Agent
          </p>

          <p className={"Text-Up w-4/5 text-justify mx-auto"}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            amet, debitis dignissimos excepturi facilis harum incidunt itaque
            labore, nisi officiis, quam quisquam repudiandae rerum saepe vero! A
            facere incidunt maxime modi quos recusandae sit vel.
          </p>
        </div>
        <div
          data-atropos-offset="0"
          className={"Text-Up flex flex-row self-end gap-3"}
        >
          <FaSquareFacebook data-atropos-offset="12" className={"text-3xl"} />
          <FaSquareInstagram data-atropos-offset="12" className={"text-3xl"} />
          <FaSquareXTwitter data-atropos-offset="12" className={"text-3xl"} />
        </div>
      </div>
    </Atropos>
  );
};

export default Hero;
