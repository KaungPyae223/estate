import React from 'react';

const NavBar = () => {
    return (
        <div className={"w-full lg:w-4/5 overflow-hidden flex justify-between items-center p-3 border-red-600 border-b-2 mx-auto"}>
            <h1 className={"text-3xl font-heading"}>ESTATE</h1>
            <div className={"md:flex gap-3 items-center hidden"}>
                <a href={"#"} className={"NavLink active"}>Home</a>
                <a href={"#"} className={"NavLink"}>About</a>
                <a href={"#"} className={"NavLink"}>Info</a>
                <a href={"#"} className={"NavLink"}>Content</a>


            </div>
        </div>
    );
};

export default NavBar;