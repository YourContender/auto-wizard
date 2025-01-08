import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss";
import { Link } from "react-router-dom";

const Carousel = ({ items }) => {
    // console.log("items: ", items);
    
    return (
        <div className="carousel-container">
            <div className="carousel-container">
                <h1>Послуги автосервісу:</h1>
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
                            <div className="carousel-title">
                                <h1>{item.title}</h1>
                                <FontAwesomeIcon 
                                    className="carousel-title-arrow" 
                                    icon={faArrowRight} 
                                />
                            </div>
                            <div className="carousel-shadow-block"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="carousel-btn">
                <Link className="carousel-btn-road" to="/service">Перейти до всіх послуг</Link>
            </div>
        </div>
    );
};

export default Carousel;
