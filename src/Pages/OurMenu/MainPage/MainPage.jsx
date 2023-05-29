import React from 'react';
import Cover from '../MenuCover/Cover';
import { Helmet } from 'react-helmet-async';
import Offer from '../Offer/Offer';
import Dessert from '../DessertsSection/Dessert';
import Pizza from '../PizzaSection/Pizza';

const MainPage = () => {
    return (
      <>
        <Helmet>
            <title>Bistro Boss | Our Menu</title>
        </Helmet>
        <div>
           <Cover></Cover>
           <Offer></Offer>
           <Dessert></Dessert>
           <Pizza></Pizza>
        </div>
      </>
    );
};

export default MainPage;