import React from 'react';
import CommonCover from '../../Shared/CommonCover/CommonCover';
import img from '../../../assets/shop/banner2.jpg';

const Shopbanner = () => {
    return (
        <div>
            <CommonCover 
            bannar={img}
            header={"Our Shop"}
            title={'whould you like to try a dish?'}
            > </CommonCover>
        </div>
    );
};

export default Shopbanner;