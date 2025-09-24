import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/pagination';

import './carouselStyle.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function CarouselSlide() {
    return (
        <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                style={{ backgroundColor: 'white', width: '100%', height: '250px' }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src='carosole/image1.svg' style={{ width: '400px', height: '200px', objectFit: 'contain', alignSelf: 'flex-end' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='carosole/image2.svg' style={{ width: '400px', height: '200px', objectFit: 'contain', alignSelf: 'flex-end' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='carosole/image1.svg' style={{ width: '400px', height: '200px', objectFit: 'contain', alignSelf: 'flex-end' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='carosole/image2.svg' style={{ width: '400px', height: '200px', objectFit: 'contain', alignSelf: 'flex-end' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='carosole/image1.svg' style={{ width: '400px', height: '200px', objectFit: 'contain', alignSelf: 'flex-end' }} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src='carosole/image2.svg' style={{ width: '400px', height: '200px', objectFit: 'contain', alignSelf: 'flex-end' }} />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
