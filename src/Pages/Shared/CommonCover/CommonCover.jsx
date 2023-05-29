import React from 'react';
import { Parallax } from 'react-parallax';


const CommonCover = ({ bannar, title, header }) => {
    return (
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bannar}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className='h-[600px] flex justify-center items-center' >

                <div className="w-2/3 py-16 bg-opacity-50 bg-black px-28 text-center">
                    <h1 className="mb-5 text-7xl font-semibold uppercase text-white">{header}</h1>
                    <p className="mb-5 text-white uppercase">{title}</p>
                </div>

            </div>
        </Parallax>

    );
};

export default CommonCover;