import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./ListServices.scss";
import { Link } from 'react-router-dom';

export const ListServices = ({ list, types }) => {

    return (
        <div className="list-services">
            {/* <div className="list-services__bg">
                <div className="list-services__bg-title">
                    <h1>Послуги нашого автосервісу</h1>
                    <Link className="list-services__bg-title-link" to="/">Головна / <p>Послуги</p></Link>
                </div>
            </div> */}
            <div className="list-services__container">
                <div className="list-services__container-list">
                    {
                        list.map((item, index) => {
                            switch(item.types) {
                                case types :
                                    return (
                                        <div className="list-services__container-list-item" key={index}>
                                            <div className="list-services-img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            
                                            <div className="list-services-subtitle">
                                                <h2>{item.service}</h2>
                                            </div>
                                            
                                            <div className="list-services-btn">
                                                <Link to={item.path}
                                                    className="list-services-btn-link"
                                                >
                                                    Детальніше
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                default:
                                    return null
                            }
                        })
                    }
                </div>
                <div className="list-services__container-contact">
                    <div className="list-services__container-contact-title">
                        <h2>Контакти</h2>
                    </div>
                    
                    <div className="list-services__container-contact-wrap">
                        <span className="list-services__container-contact-wrap-location">
                            <FontAwesomeIcon 
                                className="list-services-icon" 
                                icon={faLocationDot} 
                            />
                            м. Дніпро, пров. Самаркандський, 2
                        </span>
                        <span className="list-services__container-contact-wrap-schedule">
                            <FontAwesomeIcon 
                                className="list-services-icon" 
                                icon={faClock} 
                            />
                            ПН-ПТ з 8:00 до 18:00
                        </span>
                        <span className="list-services__container-contact-wrap-number">
                            <FontAwesomeIcon 
                                className="list-services-icon" 
                                icon={faPhone} 
                            />
                            (097) 058-29-18
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
