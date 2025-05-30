import React from 'react'
import "./ServicePoints.scss";
import point1 from "../../images/points/500px-1.webp"
import point2 from "../../images/points/500px-2.webp"
import point3 from "../../images/points/500px-3.webp"
import point4 from "../../images/points/500px-4.webp"
import { Link } from 'react-router-dom';

const services = [
    { title: "Ремонт", img: point1, path: "/repair" },
    { title: "Діагностика", img: point3, path: "/diagnostica" },
    { title: "Технічне обслуговування", img: point2, path: "/tehobsluzhivanie" },
    { title: "Акційні пропозиції", img: point4, path: "/sale" },
];

export const ServicePoints = () => {
    return (
        <section className="service">
            <div className="service-container">
                <div className="service-title">
                    <h2>Послуги автосервісу</h2>
                </div>
                <div className="service-list">
                    {services.map((service, index) => (
                        <Link to={service.path} key={index} className="service-card">
                            <img src={service.img} alt={service.title} className="service-img" />
                            <div className="service-subtitle">{service.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
