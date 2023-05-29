import React from 'react';

const PopularMenu = ({ items }) => {
    const { recipe, name, image, price } = items
    return (
        <div>
            <div className='flex space-x-2 items-center'>
                <img style={{ borderRadius: '0px 200px 200px 200px' }} className='w-32' src={image} alt="" />
                <div>
                    <h4 className='text-xl uppercase'>{name}-------------------</h4>
                    <p >{recipe}</p>
                </div>
                <p className='text-[#BB8506]'>${price}</p>
            </div>
            
        </div>
    );
};

export default PopularMenu;