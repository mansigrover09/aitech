import React from 'react';
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom';

import vendorDashboardRoutes from './DashboardRoutes';
import logo from '../../../assets/images/logo.png';

const Sidebar = () => {

  // console.log(vendorDashboardRoutes)
  return (


    <div class="drawer-side shadow-xl overflow-x-hidden">
      <label for="my-drawer-2" class="drawer-overlay"></label>
      <ul class="menu w-60 bg-base-100 text-base-content">

        <div className="text-xl text-center py-4 border-b flex justify-center">
          <Link to="/dashboard/">
            <img src={logo} className="w-28 text-center" alt="" />
          </Link>
        </div>


        {
          vendorDashboardRoutes.map((menu, i) => {
            if (menu?.submenu) {
              return (
                <div key={i} className="hover:text-primary collapse collapse-arrow">

                  <input type="checkbox" class="peer" />

                  <span class="collapse-title flex items-center">
                    {menu.icon}
                    <span className="pl-3">{menu.title}</span>
                  </span>

                  <div class="collapse-content p-0 text-primary-content peer-checked:bg-gray-200 peer-checked:text-secondary-content">
                    <ul class="w-full rounded-none">
                      {
                        menu.submenu.map((submenu, i) => {
                          return (
                            <li>
                              <NavLink to={submenu.path}>
                                {submenu.title}</NavLink>
                            </li>

                          )
                        })
                      }




                    </ul>
                  </div>


                </div>
              )

            }
            else {

              return (
                <li key={i}>

                  <NavLink className="hover:text-black" to={menu.path}>
                    {menu.icon}
                    {menu.title}
                  </NavLink>
                </li>
              )

            }
          })
        }



      </ul>

    </div>

  );
};

export default Sidebar;