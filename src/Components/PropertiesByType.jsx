import React, {useEffect} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {BsHouses,BsHouse} from 'react-icons/bs'
import {HiOutlineBuildingOffice2} from 'react-icons/hi2'
import {MdOutlineVilla} from 'react-icons/md'
import {BiBuildingHouse} from 'react-icons/bi'
import scrollreveal from "scrollreveal";
import ScrollReveal from "scrollreveal";
const PropertiesByType = () => {
    useEffect(()=> {
        const str = ScrollReveal({distance:'50px'})
        str.reveal('.Text-Left2',{ delay: 300,interval: 200,origin: 'right'});
        str.reveal('.Text-Right2',{ delay: 300,interval: 200,origin: 'left'});
        str.reveal('.Text-Down2',{ delay: 300,interval: 200,origin: 'top'});

    },[])
    return (
        <div className={"md:grid grid-cols-3 mx-3 lg:mx-0 gap-3 py-12"}>
            <div className={" Text-Right2 flex items-center md:items-start gap-1 flex-col mb-2"}>
                <p className={"text-3xl font-bold"}>Available Properties</p>
                <button
                    className={"my-4 bg-yellow-400 text-white py-2 px-3 gap-3 rounded-lg flex flex-row justify-between"}>5200+
                    Available Properties
                </button>
            </div>
            <div className={"col-span-2 Text-Left2 flex items-center justify-center gap-4"}>
                <div>
                    <div className={"Indicator Prev1"}>
                        <AiOutlineArrowLeft/>
                    </div>
                </div>


                <Swiper
                    modules={[Navigation]}
                    spaceBetween={50}
                    slidesPerView={4}
                    loop={true}
                    navigation={{
                        nextEl: '.Next1',
                        prevEl: '.Prev1'
                    }}
                >
                    <SwiperSlide>
                        <div className={"Text-Down2 flex flex-col gap-3 items-center"}>
                            <BsHouses className={"text-3xl"}/>
                            <p className={"font-medium"}>House</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"Text-Down2 flex flex-col gap-3 items-center"}>
                            <HiOutlineBuildingOffice2 className={"text-3xl"}/>
                            <p className={"font-medium"}>Office</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"Text-Down2 flex flex-col gap-3 items-center"}>
                            <MdOutlineVilla className={"text-3xl"}/>
                            <p className={"font-medium"}>Villa</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"Text-Down2 flex flex-col gap-3 items-center"}>
                            <BsHouse className={"text-3xl"}/>
                            <p className={"font-medium"}>Apartment</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"flex flex-col gap-3 items-center"}>
                            <BiBuildingHouse className={"text-3xl"}/>
                            <p className={"font-medium"}>Penthouse</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className={"flex flex-col gap-3 items-center"}>
                            <BsHouses className={"text-3xl"}/>
                            <p className={"font-medium"}>Manson</p>
                        </div>
                    </SwiperSlide>

                </Swiper>
                <div>
                    <div className={"Indicator Next1"}>
                        <AiOutlineArrowRight/>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertiesByType;