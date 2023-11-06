import React, {useEffect, useState} from 'react';
import Hero from "../Components/Hero.jsx";
import HomeSearch from "../Components/HomeSearch.jsx";
import Intro from "../Components/Intro.jsx";
import Properties from "../Components/Properties.jsx";
import PropertiesByType from "../Components/PropertiesByType.jsx";
import PropertiesByLocation from "../Components/PropertiesByLocation.jsx";
import WhyChooseUs from "../Components/WhyChooseUs.jsx";
import OurAgent from "../Components/OurAgent.jsx";
import Review from "../Components/Review.jsx";
import Footer from "../Components/Footer.jsx";
import NavBar from "../Components/NavBar.jsx";

const Home = () => {

    return (
        <>
            <div className={"w-full lg:w-4/5  mx-auto"}>

                <Hero/>
                <HomeSearch/>
                <Intro/>
                <Properties/>
                <PropertiesByType/>
                <PropertiesByLocation/>
                <WhyChooseUs/>
                <OurAgent/>
                <Review/>
            </div>
            <Footer/>
        </>
    );
};

export default Home;