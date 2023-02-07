import React from 'react';
import {SideBar} from "../componets/sidebar/SideBar";
import './MainLayout.styles.css'
import {Outlet} from "react-router-dom";
export const MainLayout = () => {
    return (
        <div className="main-container">

            <SideBar/>
            <Outlet/>

        </div>
    );
};

