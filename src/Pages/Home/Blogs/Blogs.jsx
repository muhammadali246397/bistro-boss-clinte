import React from 'react';
import img from '../../../assets/home/chef-service.jpg'

const Blogs = () => {
    return (
        <div style={{backgroundImage:`url(${img})`,height:'512px',backgroundAttachment:'fixed',zIndex:'1',backgroundBlendMode:'darken'}} className='my-20 flex justify-center items-center '>
            <div className='w-3/4 mx-auto bg-white bg-opacity-70 px-28 py-24 '>
            <h3 className='text-center uppercase text-4xl my-4'>bistro boss</h3>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus facere fuga maxime ad eaque commodi reiciendis animi quibusdam! Facilis deserunt fugiat ratione, cupiditate at asperiores dicta vitae perspiciatis tempore repellendus!</p>
            </div>
        </div>
    );
};

export default Blogs;