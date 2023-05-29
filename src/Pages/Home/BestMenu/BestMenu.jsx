import React from 'react';
import img from '../../../assets/home/featured.jpg'


const BestMenu = () => {
    return (
        <div style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundAttachment: 'fixed', zIndex: '1' }} className='my-20 backdrop-blur-sm'>

            <div className='bg-black w-full py-20 bg-opacity-40 '>
                <div className='w-1/4 mx-auto my-10 text-center'>
                    <p className=' text-[#D99904] italic mb-2'>-----Check It Out-----</p>
                    <h3 className='uppercase border-y-4 text-3xl py-2 text-white'>from our menu</h3>
                </div>

                


                <div className='flex px-10 py-10'>
                    <div className=''>
                        <img className='w-2/3 mx-auto' src={img} alt="" />
                    </div>
                    <div className='text-white'>
                        <p>March 20, 2023</p>
                        <h4 className='uppercase text-xl'>Where can i get some?</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum necessitatibus consequatur dolore ipsa recusandae, tempore doloribus labore laudantium sunt harum! Enim repellendus quidem libero temporibus vitae reprehenderit molestiae, nostrum rerum!</p>
                        <button className="btn btn-outline border-x-0 border-t-0 text-white mt-4 border-b-4 text-center">read more</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BestMenu;