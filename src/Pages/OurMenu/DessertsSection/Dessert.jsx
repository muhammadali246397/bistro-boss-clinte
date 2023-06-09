import React from 'react';
import Cover from '../MenuCover/Cover';
import img from '../../../assets/menu/dessert-bg.jpeg'
import CommonCover from '../../Shared/CommonCover/CommonCover';
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import { Link } from 'react-router-dom';

const Dessert = () => {
    const [menu] = UseMenu();
    const desserts = menu.filter(items => items.category === 'dessert')
  
   
    
    return (
        <div>
            <CommonCover
                bannar={img}
                header={'desserts'}
                title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></CommonCover>

            <div className='my-20'>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        desserts.map(item => <PopularMenu
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

export default Dessert;