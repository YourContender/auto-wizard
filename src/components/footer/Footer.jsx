import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import "./Footer.scss";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__container-info">
                    <h4>Інформація</h4>
                    <div className="footer__container-info-list">
                        <span>Про нас</span>
                        <span>Контакти</span>
                        <span>Ціни</span>
                        <span>Відгуки</span>
                    </div>
                </div>

                <div className="footer__container-services">
                    <h4>Послуги</h4>
                    <div className="footer__container-services-list">
                        <span>Ремонт</span>
                        <span>Діагностика</span>
                        <span>ТО</span>
                        <span>Знижки</span>
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
