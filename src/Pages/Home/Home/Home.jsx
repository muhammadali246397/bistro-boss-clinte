import React from 'react';
import Bannar from '../Bannar/Bannar';
import Category from '../Category/Category';
import Blogs from '../Blogs/Blogs';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Recomends from '../Recomends/Recomends';
import Featured from '../Featured/Featured';
import BestMenu from '../BestMenu/BestMenu';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Home</title>
            </Helmet>
            <Bannar></Bannar>
            <Category></Category>
            <Blogs></Blogs>
            <Menu></Menu>
            <Contact></Contact>
            <Recomends></Recomends>
            <BestMenu></BestMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;