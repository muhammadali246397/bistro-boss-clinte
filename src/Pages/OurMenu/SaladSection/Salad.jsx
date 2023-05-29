import React from 'react';
import CommonCover from '../../Shared/CommonCover/CommonCover';
import salad from '../../../assets/menu/salad-bg.jpg'
import UseMenu from '../../Shared/CoustomHooks/UseMenu';
import PopularMenu from '../../Shared/PopularMenu/PopularMenu';

const Salad = () => {
    const [menu] = UseMenu()
    const salads = menu.filter(items => items.category === 'salad')
    return (
        <div>
            <CommonCover 
            bannar={salad}
            header={'salads'}
            title={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
            ></CommonCover>
             <div className='my-20'>
                <div className='grid md:grid-cols-2 gap-10'>
                    {
                        salads.map(item => <PopularMenu
                            key={item._id}
                            items={item}
                        ></PopularMenu>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Salad;