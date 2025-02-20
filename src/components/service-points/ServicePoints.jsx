import React from 'react'
import "./ServicePoints.scss";
import point1 from "../../images/points/12.jpg"
import point2 from "../../images/points/13.jpg"
import point3 from "../../images/points/14.jpg"
import point4 from "../../images/points/15.jpg"

const services = [
    { title: "Ремонт", img: point1 },
    { title: "Діагностика", img: point3 },
    { title: "Технічне обслуговування", img: point2 },
    { title: "Акційні пропозиції", img: point4 },
];

export const ServicePoints = () => {
    return (
        <div className="service">
            <div className="service-container">
                <div className="service-title">
                    <h2>Послуги автосервісу</h2>
                </div>
                <div className="service-list">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <img src={service.img} alt={service.title} className="service-img" />
                            <div className="service-subtitle">{service.title}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
