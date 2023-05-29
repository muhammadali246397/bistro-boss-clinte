import React from 'react';
import bannar from '../../../assets/menu/banner3.jpg'
import CommonCover from '../../Shared/CommonCover/CommonCover';

const Cover = () => {
    return (
       <CommonCover
       bannar={bannar}
       header={'our menu'}
       title={'would you like to try a dish?'}
       ></CommonCover>
    );
};

export default Cover;