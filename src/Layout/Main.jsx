import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from '../Pages/Shared/Navigation/Navigation';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    const location = useLocation();
    const noheaderfooter = location.pathname.includes('login')
    const signup = location.pathname.includes('signup')
    return (
        <div>
            { noheaderfooter || signup || <Navigation></Navigation>}
            <Outlet></Outlet>
            {noheaderfooter || signup || <Footer></Footer>}
        </div>
    );
};

export default Main;