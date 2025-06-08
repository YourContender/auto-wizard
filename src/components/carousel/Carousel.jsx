import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.scss";
import { Link } from "react-router-dom";
import { Slider } from "../slider/Slider";

const Carousel = ({ items }) => {
    return (
        <section className="carousel-container">
            <div className="carousel-container">
                <h1>Основні напрямки нашої роботи:</h1>
            </div>

            <Slider items={items}/>
            
            <div className="carousel-btn">
                <Link className="carousel-btn-road" to="/repair">Перейти до послуг ремонту</Link>
            </div>
        </section>
    );
};

export default Carousel;
