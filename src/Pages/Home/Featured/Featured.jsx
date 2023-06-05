import React, { useEffect, useState } from 'react';
import Title from '../../Shared/TitleComponent/Title';
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rating } from '@smastrom/react-rating';

const Featured = () => {
    const [fetaurers, setFetaures] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/review')
            .then(res => res.json())
            .then(data => setFetaures(data))
    }, [])

    return (
        <section className='my-20'>
            <Title
                subHeading={'-----What our clinte say-----'}
                heading={'TESTIMONIALS'}
            ></Title>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    fetaurers.map(fea => <SwiperSlide
                        key={fea._id}
                    >
                        <div className='flex flex-col text-center px-12'>
                            <Rating
                            className='mx-auto mb-14'
                                style={{ maxWidth: 180 }}
                                value={fea.rating}
                                readOnly
                            />
                            <p>{fea.details}</p>
                            <p className='text-xl mt-4 text-[#CD9003]'>{fea.name}</p>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>


        </section>
    );
};

export default Featured;