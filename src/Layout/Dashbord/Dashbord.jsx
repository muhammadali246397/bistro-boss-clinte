import React from 'react';
import { FaBars, FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart, FaStackExchange, FaStar, FaWallet } from 'react-icons/fa';

import { NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-200">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-60 h-full bg-[#D1A054] text-base-content">
                    {/* Sidebar content here */}
                    <li><NavLink to='/dashbord/home'><FaHome></FaHome> USER HOME</NavLink></li>
                    <li><NavLink to='/dashbord/reservation'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                    <li><NavLink to='/dashbord/history'><FaWallet></FaWallet> PAYMENT HISTORY </NavLink></li>
                    <li><NavLink to='/dashbord/mycart'><FaShoppingCart></FaShoppingCart> MY CART</NavLink></li>
                    <li><NavLink to='/dashbord/review'><FaStar></FaStar> ADD REVIEW</NavLink></li>
                    <li><NavLink to='/dashbord/booking'><FaStackExchange></FaStackExchange> MY BOOKING</NavLink></li>
                    <div className="divider bg-white h-0.5"></div> 
                    <li><NavLink to='/'><FaHome></FaHome> HOME</NavLink></li>
                    <li><NavLink to='/ourmenu'><FaBars></FaBars> MENU</NavLink></li>
                    <li><NavLink to='/ourshop'><FaShoppingBag></FaShoppingBag> SHOP</NavLink></li>
                    <li><NavLink to='/'><FaMailBulk></FaMailBulk> CONTACT</NavLink></li>
                </ul>

            </div>
        </div>

    );
};

export default Dashbord;