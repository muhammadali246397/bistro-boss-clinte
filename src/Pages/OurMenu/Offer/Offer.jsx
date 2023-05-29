import React from 'react';
import Title from '../../Shared/TitleComponent/Title';
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';

const Offer = () => {
    const [menu] = UseMenu();
    const offerMenu = menu.filter(items => items.category === 'offered')
    return (
        <div className='my-20'>
            <Title
                subHeading={`-----Don't miss-----`}
                heading={`today's offer`}
            ></Title>

            <div className='grid md:grid-cols-2 gap-10'>
                {
                    offerMenu.map(item => <PopularMenu
                        key={item._id}
                        items={item}
                    ></PopularMenu>)
                }
            </div>
            <div className='text-center my-10'>
                <button className="btn btn-outline border-x-0 border-t-0  border-b-4 text-center">ORDER YOUR FAVOURITE FOOD</button>
            </div>
        </div>

    );
};

export default Offer;