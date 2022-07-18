import React from 'react';
import "./DashboardLayout.css"

import { Link, NavLink, Outlet } from 'react-router-dom';
import Sidebar from '../../components/DashboardPartials/Sidebar/Sidebar';
import DashboardHeader from '../../components/DashboardPartials/DashboardHeader/DashboardHeader';

const DashboardLayout = () => {
    return (
        <>
            <div class="drawer drawer-mobile">

                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />


                <div class="drawer-content flex flex-col bg-[#f5f5f5]">
                    <DashboardHeader />


                    <div className="p-2 md:p-5 ">
                        <Outlet />
                    </div>


                </div>

                <Sidebar />


            </div>



        </>

    );
};

export default DashboardLayout;