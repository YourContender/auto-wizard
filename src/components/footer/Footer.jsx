import React from 'react';
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
                            <svg 
                                className="check-svg" 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="caret-down" 
                                role="img"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 320 512" 
                                style={{height: "20px", width: "40px" }}>
                                <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                            </svg>
                            <span>м. Дніпро, пров. Самаркандський, 2</span>
                        </div>
                        <div className="footer__container-contact-list-item">
                            <svg 
                                className="check-svg" 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="caret-down" 
                                role="img"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 320 512" 
                                style={{height: "20px", width: "40px" }}>
                                <path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                            </svg>
                            <span>ПН-ПТ з 8:00 до 18:00</span>
                        </div>
                        <div className="footer__container-contact-list-item">
                            <svg 
                                className="check-svg" 
                                aria-hidden="true" 
                                focusable="false" 
                                data-prefix="fas" 
                                data-icon="caret-down" 
                                role="img"
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 320 512" 
                                style={{height: "20px", width: "40px" }}>
                                <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                            </svg>
                            <span>(097) 058-29-18</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
