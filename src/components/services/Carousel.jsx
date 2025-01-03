import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss";

const Carousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true} // Зацикливаем слайды
        autoplay={{
          delay: 5000, // Интервал в 5 секунд
          disableOnInteraction: false, // Продолжает автопрокрутку после взаимодействия
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
        pagination={{ dynamicBullets: true }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="carousel-item">
              <img src={item.image} alt={item.title} className="carousel-image" />
              <h3 className="carousel-title">{item.title}</h3>
              <p className="carousel-description">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
