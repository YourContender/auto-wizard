import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Footer.scss";
import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container-info">
                    <h4>Інформація</h4>
                    <div className="footer__container-info-list">
                        <Link to="/about" className="footer__container-info-list-link">Про нас</Link>
                        <Link to="/contact" className="footer__container-info-list-link">Контакти</Link>
                        <Link to="/price" className="footer__container-info-list-link">Ціни</Link>
                        <Link to="/" className="footer__container-info-list-link">Відгуки</Link>
                    </div>
                </div>

                <div className="footer__container-services">
                    <h4>Послуги</h4>
                    <div className="footer__container-services-list">
                        <Link to="/repair" className="footer__container-info-list-link">Ремонт</Link>
                        <Link to="/diagnostica" className="footer__container-info-list-link">Діагностика</Link>
                        <Link to="/tehobsluzhivanie" className="footer__container-info-list-link">ТО</Link>
                        <Link to="/sale" className="footer__container-info-list-link">Знижки</Link>
                    </div>
                </div>

                <div className="footer__container-contact">
                    <h4>Контакти</h4>
                    <div className="footer__container-services-list">
                        <div className="footer__container-contact-list-item">
                            <FontAwesomeIcon 
                                className="footer-icon" 
                                icon={faLocationDot} 
                            />
                            <span>м. Дніпро, пров. Самаркандський, 2</span>
                        </div>
                        <div className="footer__container-contact-list-item">
                            <FontAwesomeIcon 
                                className="footer-icon" 
                                icon={faClock} 
                            />
                            <span>ПН-ПТ з 8:00 до 18:00</span>
                        </div>
                        <div className="footer__container-contact-list-item">
                            <FontAwesomeIcon 
                                className="footer-icon" 
                                icon={faPhone} 
                            />
                            <span>(097) 058-29-18</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
