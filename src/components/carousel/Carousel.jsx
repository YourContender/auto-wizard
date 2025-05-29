import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss";
import { Link } from "react-router-dom";

const Carousel = ({ items }) => {
    return (
        <div className="carousel-container">
            <div className="carousel-container">
                <h1>Основні напрямки нашої роботи:</h1>
            </div>
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
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                    },
                    1024: {
                      slidesPerView: 3,
                    },
                }}
                pagination={false}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="carousel-item">
                            <img src={Object.values(item.image)} alt={item.title} className="carousel-image" />
                            <Link to={item.path} className="carousel-title">
                                <h1>{item.title}</h1>
                                <svg 
                                    className="carousel-title-arrow" 
                                    aria-hidden="true" 
                                    focusable="false" 
                                    data-prefix="fas" 
                                    data-icon="caret-down" 
                                    role="img"
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 320 512" 
                                    style={{height: "20px", width: "50px", color: "white" }}>
                                    <path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                </svg>
                            </Link>
                            
                            <div className="carousel-shadow-block"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="carousel-btn">
                <Link className="carousel-btn-road" to="/repair">Перейти до послуг ремонту</Link>
            </div>
        </div>
    );
};

export default Carousel;
