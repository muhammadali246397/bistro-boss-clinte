import React from 'react';
import CommonCover from '../../Shared/CommonCover/CommonCover';
import pizza from '../../../assets/menu/pizza-bg.jpg'
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import { Link } from 'react-router-dom';

const Pizza = () => {
    const [menu] = UseMenu();
    const pizzas = menu.filter(items => items.category === 'pizza')
    return (
        <div className='my-20'>
            <CommonCover
            bannar={pizza}
            header={'pizzas'}
            title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></CommonCover>
             <div className='my-20'>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        pizzas.map(item => <PopularMenu
                            key={item._id}
                            items={item}
                        ></PopularMenu>)
                    }
                </div>
                <div className='text-center my-10'>
                    <Link to='/ourshop'> <button className="btn btn-outline border-x-0 border-t-0  border-b-4 text-center">view all menu</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Pizza;