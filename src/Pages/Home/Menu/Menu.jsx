import React, { useEffect, useState } from 'react';
import Title from '../../Shared/TitleComponent/Title';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import UseMenu from '../../Shared/CoustomHooks/UseMenu';

const Menu = () => {
    const [menu] = UseMenu()
    const popularItems = menu.filter(da => da.category === 'popular');
    return (
        <div className='my-20'>
            <Title
                subHeading={'-----Check it out-----'}
                heading={'from our menu'}
            ></Title>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popularItems.map(item => <PopularMenu
                    key={item._id}
                    items={item}
                    ></PopularMenu>)
                }
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-outline border-x-0 border-t-0  border-b-4 text-center">view all menu</button>
            </div>
        </div>
    );
};

export default Menu;