import React from 'react';
import CommonCover from '../../Shared/CommonCover/CommonCover';
import img from '../../../assets/menu/soup-bg.jpg'
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';
import { Link } from 'react-router-dom';

const Soup = () => {
    const [menu] = UseMenu()
    const soup = menu.filter(items => items.category === 'soup')
    return (
        <div>
            <CommonCover
                bannar={img}
                header={'soups'}
                title={'LOREM IPSUM HAS BEEN THE INDUSTRY’S STANDARD DUMMY TEXT EVER SINCE THE 1500S, WHEN AN UNKNOWN PRINTER TOOK A GALLEY OF TYPE AND SCRAMBLED IT TO MAKE A TYPE SPECIMEN BOOK.'}
            ></CommonCover>
            <div className='my-20'>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        soup.map(item => <PopularMenu
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

export default Soup;