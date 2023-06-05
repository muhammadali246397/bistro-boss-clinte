import React from 'react';

const Title = ({subHeading,heading}) => {
    return (
        <div className='w-2/5 mx-auto my-10 text-center'>
            <p className=' text-[#D99904] italic mb-2'>{subHeading}</p>
            <h3 className='uppercase border-y-4 text-3xl py-2 text-[#151515]'>{heading}</h3>
        </div>
    );
};

export default Title;