import React from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Navigation, Scrollbar} from "swiper/modules";
import PropertiesCard from "./PropertiesCard.jsx";
import AgentCard from "./AgentCard.jsx";

const OurAgent = () => {
    return (
        <div className={"mx-3 lg:mx-0"}>
            <p className={"text-3xl font-bold"}>Featured Properties</p>
            <p className={"text-xs"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, praesentium!</p>

            <div className={"flex justify-end gap-3 mt-3"}>
                <div className={"Indicator Prev4"}>
                    <AiOutlineArrowLeft />
                </div>
                <div className={"Indicator Next4"}>
                    <AiOutlineArrowRight/>
                </div>
            </div>
            <Swiper
                className={"my-5"}
                modules={[Navigation, Scrollbar, A11y]}
                breakpoints={{
                    350: {
                        slidesPerView:2,
                        spaceBetween:5
                    },
                    450:{
                        slidesPerView:3,
                        spaceBetween:10
                    },
                    640:{
                        slidesPerView:4,
                        spaceBetween:15
                    },
                    1024: {
                        slidesPerView:5,
                        spaceBetween:20
                    }
                }}

                navigation ={{
                    nextEl: '.Next4',
                    prevEl: '.Prev4'
                }}
            >
                <SwiperSlide><div className={"Text-Up1"}><AgentCard/></div></SwiperSlide>
                <SwiperSlide><div className={"Text-Up1"}><AgentCard/></div></SwiperSlide>
                <SwiperSlide><div className={"Text-Up1"}><AgentCard/></div></SwiperSlide>
                <SwiperSlide><div className={"Text-Up1"}><AgentCard/></div></SwiperSlide>
                <SwiperSlide><div className={"Text-Up1"}><AgentCard/></div></SwiperSlide>
                <SwiperSlide><div><AgentCard/></div></SwiperSlide>
                <SwiperSlide><div><AgentCard/></div></SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OurAgent;