import React from 'react';
import Choose from "./Choose.jsx";
import {GiReceiveMoney} from "react-icons/gi"
import {FaHandshakeAngle} from "react-icons/fa6"
import {BsHouses} from "react-icons/bs"
const WhyChooseUs = () => {
    return (
        <div className={"my-12 mx-3 lg:mx-0"}>
            <p className={"text-2xl mb-2 text-center font-bold"}>Why Choose Us</p>
            <p className={"my-5 text-sm mx-auto w-2/3 text-center"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio enim esse excepturi, laborum</p>
            <div className={"flex gap-2 flex-col sm:flex-row"}>
                <div className={"w-100 sm:w-1/3 py-0 sm:py-2"}>
                    <Choose background={"bg-white"} title={"Range Of Properties"} icon={<GiReceiveMoney/>}/>

                </div>
                <div className={"w-100 sm:w-1/3 py-0 sm:py-2"}>
                    <Choose background={"bg-blue-500"} title={"Trusted By Thousands"} icon={<FaHandshakeAngle/>}/>

                </div>
                <div className={"w-100 sm:w-1/3 py-0 sm:py-2"}>
                    <Choose background={"bg-white"} title={"Financing Make Easy"} icon={<BsHouses/>}/>

                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;