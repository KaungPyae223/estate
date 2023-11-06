import React from 'react';
import NavBar from "./Components/NavBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer.jsx";

const App = () => {
    return (
        <>
            <div>
                <NavBar></NavBar>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                </Routes>

            </div>
        </>

    );
};

export default App;
