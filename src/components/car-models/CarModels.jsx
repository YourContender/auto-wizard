import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./CarModels.scss";

export const CarModels = ({ items }) => {
    return (
        <section className="models-container">
            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000, 
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 4,
                    },
                    1024: {
                        slidesPerView: 6,
                    },
                }}
                pagination={false}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="models-item">
                            <img src={item} alt="models" className="models-image" loading="lazy"/>
                            {/* <div className="carousel-shadow-block"></div> */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
