import React from 'react';
import { Helmet } from 'react-helmet-async';
import Shopbanner from '../Shopbanner/Shopbanner';
import ShowProducts from '../ShowProduct/ShowProducts';
import 'react-tabs/style/react-tabs.css';

const ShopMainPage = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Our Shop</title>
            </Helmet>
            <Shopbanner></Shopbanner>
            <ShowProducts></ShowProducts>
        </div>
    );
};

export default ShopMainPage;