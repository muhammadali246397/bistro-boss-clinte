import React from 'react';
import Cover from '../MenuCover/Cover';
import { Helmet } from 'react-helmet-async';
import Offer from '../Offer/Offer';

const MainPage = () => {
    return (
      <>
        <Helmet>
            <title>Bistro Boss | Our Menu</title>
        </Helmet>
        <div>
           <Cover></Cover>
           <Offer></Offer>
        </div>
      </>
    );
};

export default MainPage;