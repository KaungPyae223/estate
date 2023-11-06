import React from 'react';
import {FaXTwitter,FaFacebookF,FaLinkedinIn} from 'react-icons/fa6';
const Footer = () => {
    return (
        <div className={"w-full bg-sky-100"}>
            <div className={"md:w-4/5 w-full mx-auto p-5 flex items-start flex-wrap"}>
                <div className={"md:w-1/3 w-full"}>
                    <p className={"font-medium"}>Address</p>
                    <p className={"text-sm text-neutral-500 mb-2"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Atque, nulla, sunt! Ad atque labore nesciunt!</p>
                    <p className={" font-medium"}>Email</p>
                    <p className={"text-sm text-neutral-500 mb-2"}>Info@RealEstate.com</p>
                    <p className={" font-medium"}>Phone</p>
                    <p className={"text-sm text-neutral-500 mb-2"}>+132-1111-3333-2222</p>

                </div>
                <div className={"flex md:w-2/3 w-full md:justify-around flex-wrap gap-12 justify-between"}>
                    <div>
                        <p className={"font-bold mb-4 text-lg"}>List by Categories</p>
                        <ul className={"space-y-2"}>
                            <li>House</li>
                            <li>Villa</li>
                            <li>Apartment</li>
                            <li>Office</li>
                        </ul>
                    </div>
                    <div>
                        <p className={"font-bold mb-4 text-lg"}>Quick Links</p>
                        <ul className={"space-y-2"}>
                            <li>Community Guides</li>
                            <li>Terms and Conditions</li>
                            <li>Privacy Policies</li>
                            <li>Agents</li>
                        </ul>
                    </div>
                    <div>
                        <p className={"font-bold mb-4 text-lg"}>Follow Us On</p>
                        <div className={"flex flex-row gap-5"}>
                            <div className={"w-[30px] h-[30px] flex justify-around items-center bg-sky-300 rounded-3xl"}>
                                <FaXTwitter/>
                            </div>
                            <div className={"w-[30px] h-[30px] flex justify-around items-center bg-sky-300 rounded-3xl"}>
                                <FaFacebookF/>
                            </div>
                            <div className={"w-[30px] h-[30px] flex justify-around items-center bg-sky-300 rounded-3xl"}>
                                <FaLinkedinIn/>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <hr/>
            <div className={"md:w-4/5 w-full mx-auto p-5 flex flex-wrap gap-3 justify-between"}>
                <p className={"text-blue-800 font-bold text-2xl text-center w-full sm:w-fit"}>ESTATE</p>
                <p className={"text-center w-full sm:w-fit"}>© 2023 ESTATE All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;