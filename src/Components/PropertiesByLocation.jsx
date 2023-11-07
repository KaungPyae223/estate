import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Scrollbar } from "swiper/modules";
import PropertiesByLocationCard from "./PropertiesByLocationCard.jsx";

const PropertiesByLocation = () => {
  return (
    <div className={"mx-3 lg:mx-0"}>
      <div className={"flex items-center justify-between gap-4"}>
        <p className={"font-bold text-3xl"}>
          Find Properties in These Locations
        </p>
        <div
          className={
            "border border-sky-500 rounded-lg flex flex-row items-center px-2"
          }
        >
          <HiLocationMarker />
          <select className={"border-none ring-0 focus:ring-0 text-sm"}>
            <option>Dubai</option>
          </select>
        </div>
      </div>
      <div className={"flex justify-between items-center gap-3 mx-auto mt-6"}>
        <p
          className={
            "px-2 rounded-sm bg-gradient-to-r from-neutral-300 to-white"
          }
        >
          Properties for rent
        </p>
        <div className={"flex gap-3"}>
          <div className={"Indicator Prev2"}>
            <AiOutlineArrowLeft />
          </div>
          <div className={"Indicator Next2"}>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <Swiper
        className={"my-5"}
        modules={[Navigation, Scrollbar, A11y]}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".Next2",
          prevEl: ".Prev2",
        }}
      >
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
      </Swiper>
      <div className={"flex justify-between items-center gap-3 mx-auto mt-6"}>
        <p
          className={
            "px-2 rounded-sm bg-gradient-to-r from-neutral-300 to-white"
          }
        >
          Properties for sale
        </p>
        <div className={"flex gap-3"}>
          <div className={"Indicator Prev3"}>
            <AiOutlineArrowLeft />
          </div>
          <div className={"Indicator Next3"}>
            <AiOutlineArrowRight />
          </div>
        </div>
      </div>
      <Swiper
        className={"my-5"}
        modules={[Navigation, Scrollbar, A11y]}
        breakpoints={{
          350: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          450: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".Next3",
          prevEl: ".Prev3",
        }}
      >
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={"Text-Up1"}>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <PropertiesByLocationCard />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PropertiesByLocation;
