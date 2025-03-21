import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTelegram, faViber } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';
import "./Contact.scss";
import { GoogleMap } from '../google-map/GoogleMap';

export const Contact = () => {
    return (
        <div className="contact">
            {/* <div className="contact__bg">
                <div className="contact__bg-title">
                    <h1>Контакти</h1>
                    <Link className="contact__bg-title-link" to="/">Головна / <p>Контакти</p></Link>
                </div>
            </div> */}
            <div className="contact__container">
                <div className="contact__container-content">
                    <div>
                        <div className="contact__container-content-item">
                            <h3 className="contact__container-content-item-title">Адреса</h3>
                            <span className="contact__container-content-item-text">
                                <FontAwesomeIcon 
                                    className="contact-icon" 
                                    icon={faLocationDot} 
                                />
                                м. Дніпро, пров. Самаркандський, 2
                            </span>
                        </div>
                        <div className="contact__container-content-item">
                            <h3 className="contact__container-content-item-title">Графік роботи</h3>
                            <span className="contact__container-content-item-text">
                                <FontAwesomeIcon 
                                    className="contact-icon" 
                                    icon={faClock} 
                                />
                                ПН-ПТ з 8:00 до 18:00
                            </span>
                        </div>
                        <div className="contact__container-content-item">
                            <h3 className="contact__container-content-item-title">Телефон</h3>
                            <span className="contact__container-content-item-text">
                                <FontAwesomeIcon 
                                    className="contact-icon" 
                                    icon={faPhone} 
                                />
                                (097) 058-29-18
                            </span>
                            <span className="contact__container-content-item-text">
                                <FontAwesomeIcon 
                                    className="contact-icon" 
                                    icon={faTelegram} 
                                />
                                (097) 058-29-18
                            </span>
                            <span className="contact__container-content-item-text">
                                <FontAwesomeIcon 
                                    className="contact-icon" 
                                    icon={faViber} 
                                />
                                (097) 058-29-18
                            </span>
                        </div>
                        <div className="contact__container-content-item">
                            <h3 className="contact__container-content-item-title">Соцмережі</h3>
                            <span className="contact__container-content-item-text">
                                <FontAwesomeIcon 
                                    className="contact-icon" 
                                    icon={faInstagram}
                                />
                                autowizard.in.ua
                            </span>
                        </div>
                    </div>
                <GoogleMap width="600px" height="600px" />
                </div>
            </div>
        </div>
    )
}
