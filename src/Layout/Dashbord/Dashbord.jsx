import React from 'react';
import { FaBars, FaCalendarAlt, FaHome, FaMailBulk, FaShoppingBag, FaShoppingCart, FaStackExchange, FaStar, FaWallet } from 'react-icons/fa';

import { NavLink, Outlet } from 'react-router-dom';

const Dashbord = () => {
    const admin = true;
    return (
        <div className="drawer drawer-mobile ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-base-200">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button md:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-64 h-full bg-[#D1A054] text-base-content">
                    <h1 className='uppercase font-extrabold text-2xl tracking-[5px]'>bistro boss</h1>
                    <p className='uppercase font-semibold text-xl tracking-[12px] mb-10'>resturant</p>
                    {/* Sidebar content here */}
                    {admin ? <>
                        <li><NavLink to='/dashbord/adminhome'><FaHome></FaHome> ADMIN HOME</NavLink></li>
                    <li><NavLink to='/dashbord/additem'><FaCalendarAlt></FaCalendarAlt> ADD ITEMS</NavLink></li>
                    <li><NavLink to='/dashbord/manageitem'><FaWallet></FaWallet> MANAGE ITEMS</NavLink></li>
                    <li><NavLink to='/dashbord/booking'><FaShoppingCart></FaShoppingCart> MANAGE BOOKINGS</NavLink></li>
                    <li><NavLink to='/dashbord/user'><FaStar></FaStar> ALL USERS</NavLink></li>
                    
                    </>:<>
                    <li><NavLink to='/dashbord/home'><FaHome></FaHome> USER HOME</NavLink></li>
                    <li><NavLink to='/dashbord/reservation'><FaCalendarAlt></FaCalendarAlt> RESERVATION</NavLink></li>
                    <li><NavLink to='/dashbord/history'><FaWallet></FaWallet> PAYMENT HISTORY </NavLink></li>
                    <li><NavLink to='/dashbord/mycart'><FaShoppingCart></FaShoppingCart> MY CART</NavLink></li>
                    <li><NavLink to='/dashbord/review'><FaStar></FaStar> ADD REVIEW</NavLink></li>
                    <li><NavLink to='/dashbord/booking'><FaStackExchange></FaStackExchange> MY BOOKING</NavLink></li>
                    </>}
                    
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