import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthPorvider';
import { FaShoppingCart } from 'react-icons/fa';
import Usequery from '../CoustomHooks/useQuery';




const Navigation = () => {
        
        const { user, LogOut,loading, } = useContext(AuthContext)
        const [cart] = Usequery()
        
 

  const handleLogout = () => {
    LogOut();
  }

  const nabitems = <>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/ourmenu">Our Menu</Link></li>
    <li><Link to="/ourshop">Our Shop</Link></li>
    <li><Link to="/signup">SignUp</Link></li>
    <li><Link to='/dashbord/mycart'><button className="btn">
      <FaShoppingCart></FaShoppingCart>
      <div className="badge badge-secondary mx-2">{cart.length || 0}</div>
    </button></Link></li>
    {user ? <>
      <button onClick={handleLogout} className='btn btn-warning'>Log Out</button>
    </> : <>
      <li><Link to="/login">Login</Link></li>
    </>}
  </>


  return (
    <div>
      <div className="navbar bg-black bg-opacity-30 text-white fixed z-10 max-w-screen-xl mx-auto ;">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {nabitems}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {nabitems}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Get started</a>
        </div>
      </div>
    </div>
  );
};

export default Navigation;