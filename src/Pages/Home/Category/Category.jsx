import React from 'react';
import Title from '../../Shared/TitleComponent/Title';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <section className='my-20'>
            <Title
                subHeading={"----- from 11.00am to 10.00pm-----"}
                heading={'order online'}
            ></Title>
            <>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                    <div className='relative'>
                        <img src={slide1} alt=""
                        />
                       <p
                         style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '46%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            textShadow:'1px 1px 1px black'
                          }}
                       className='uppercase text-xl text-white text-center '>salads</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='relative'>
                        <img src={slide2} alt=""
                        />
                       <p
                         style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '46%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            textShadow:'1px 1px 1px black'
                          }}
                       className='uppercase text-xl text-white text-center '>pizzas</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                  
                    <div className='relative'>
                        <img src={slide3} alt=""
                        />
                       <p
                         style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '46%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            textShadow:'1px 1px 1px black'
                          }}
                       className='uppercase text-xl text-white text-center '>soups</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='relative'>
                        <img src={slide4} alt=""
                        />
                       <p
                         style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '46%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            textShadow:'1px 1px 1px black'
                          }}
                       className='uppercase text-xl text-white text-center '>desserts</p>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className='relative'>
                        <img src={slide5} alt=""
                        />
                       <p
                         style={{
                            position: 'absolute',
                            bottom: '5%',
                            left: '46%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 1,
                            textShadow:'1px 1px 1px black'
                          }}
                       className='uppercase text-xl text-white text-center '>salads</p>
                    </div>
                    </SwiperSlide>
                   
                </Swiper>
            </>
        </section>
    );
};

export default Category;