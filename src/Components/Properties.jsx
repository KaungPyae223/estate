import React, { useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import PropertiesCard from "./PropertiesCard.jsx";
import ScrollReveal from "scrollreveal";

const Properties = ({ Slide }) => {
  useEffect(() => {
    const str = ScrollReveal({ distance: "50px" });
    str.reveal(".Text-Up1", { delay: 300, interval: 200, origin: "bottom" });
  }, []);

  return (
    <div className={"mt-24 mx-3 lg:mx-0"}>
      <p className={"text-3xl font-bold"}>Featured Properties</p>
      <div className={"flex justify-end gap-3 mx-auto"}>
        <div className={"Indicator Prev"}>
          <AiOutlineArrowLeft />
        </div>
        <div className={"Indicator Next"}>
          <AiOutlineArrowRight />
        </div>
      </div>
      <Swiper
        className={"my-5"}
        modules={[Navigation, Scrollbar, A11y]}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".Next",
          prevEl: ".Prev",
        }}
      >
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Properties;
