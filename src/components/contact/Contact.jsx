import React from 'react';
import "./Contact.scss";
import { GoogleMap } from '../google-map/GoogleMap';

export const Contact = () => {
    return (
        <section className="contact">
            <div className="contact__container">
                <div className="contact__container-content">
                    <div className="contact__container-content-list">
                        <div className="contact__container-content-list-up">
                            <div className="contact__container-content-item">
                                <h3 className="contact__container-content-item-title">Адреса</h3>
                                <span className="contact__container-content-item-text">
                                    <svg 
                                        className="check-svg" 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="caret-down" 
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        style={{height: "25px", width: "50px" }}>
                                        <path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                                    </svg>
                                    м. Дніпро, пров. Самаркандський, 2
                                </span>
                            </div>
                            <div className="contact__container-content-item">
                                <h3 className="contact__container-content-item-title">Графік роботи</h3>
                                <span className="contact__container-content-item-text">
                                    <svg 
                                        className="check-svg" 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="caret-down" 
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        style={{height: "25px", width: "50px" }}>
                                        <path fill="currentColor" d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
                                    </svg>
                                    ПН-ПТ з 8:00 до 18:00
                                </span>
                            </div>
                        </div>

                        <div className="contact__container-content-list-bottom">
                            <div className="contact__container-content-item">
                                <h3 className="contact__container-content-item-title">Телефон</h3>
                                <span className="contact__container-content-item-text">
                                    <svg 
                                        className="check-svg" 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="caret-down" 
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        style={{height: "25px", width: "50px" }}>
                                        <path fill="currentColor" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                                    </svg>
                                    <a href="tel:+380970582918">(097) 058-29-18</a>
                                </span>
                                <span className="contact__container-content-item-text">
                                    <svg 
                                        className="check-svg" 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="caret-down" 
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        style={{height: "25px", width: "50px" }}>
                                        <path fill="currentColor" d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"></path>
                                    </svg>
                                    
                                    <a href="tg://resolve?phone=+380970582918">(097) 058-29-18</a>
                                </span>
                                <span className="contact__container-content-item-text">
                                    <svg 
                                        className="check-svg" 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="caret-down" 
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        style={{height: "25px", width: "50px" }}>
                                        <path fill="currentColor" d="M444 49.9C431.3 38.2 379.9.9 265.3.4c0 0-135.1-8.1-200.9 52.3C27.8 89.3 14.9 143 13.5 209.5c-1.4 66.5-3.1 191.1 117 224.9h.1l-.1 51.6s-.8 20.9 13 25.1c16.6 5.2 26.4-10.7 42.3-27.8 8.7-9.4 20.7-23.2 29.8-33.7 82.2 6.9 145.3-8.9 152.5-11.2 16.6-5.4 110.5-17.4 125.7-142 15.8-128.6-7.6-209.8-49.8-246.5zM457.9 287c-12.9 104-89 110.6-103 115.1-6 1.9-61.5 15.7-131.2 11.2 0 0-52 62.7-68.2 79-5.3 5.3-11.1 4.8-11-5.7 0-6.9.4-85.7.4-85.7-.1 0-.1 0 0 0-101.8-28.2-95.8-134.3-94.7-189.8 1.1-55.5 11.6-101 42.6-131.6 55.7-50.5 170.4-43 170.4-43 96.9.4 143.3 29.6 154.1 39.4 35.7 30.6 53.9 103.8 40.6 211.1zm-139-80.8c.4 8.6-12.5 9.2-12.9.6-1.1-22-11.4-32.7-32.6-33.9-8.6-.5-7.8-13.4.7-12.9 27.9 1.5 43.4 17.5 44.8 46.2zm20.3 11.3c1-42.4-25.5-75.6-75.8-79.3-8.5-.6-7.6-13.5.9-12.9 58 4.2 88.9 44.1 87.8 92.5-.1 8.6-13.1 8.2-12.9-.3zm47 13.4c.1 8.6-12.9 8.7-12.9.1-.6-81.5-54.9-125.9-120.8-126.4-8.5-.1-8.5-12.9 0-12.9 73.7.5 133 51.4 133.7 139.2zM374.9 329v.2c-10.8 19-31 40-51.8 33.3l-.2-.3c-21.1-5.9-70.8-31.5-102.2-56.5-16.2-12.8-31-27.9-42.4-42.4-10.3-12.9-20.7-28.2-30.8-46.6-21.3-38.5-26-55.7-26-55.7-6.7-20.8 14.2-41 33.3-51.8h.2c9.2-4.8 18-3.2 23.9 3.9 0 0 12.4 14.8 17.7 22.1 5 6.8 11.7 17.7 15.2 23.8 6.1 10.9 2.3 22-3.7 26.6l-12 9.6c-6.1 4.9-5.3 14-5.3 14s17.8 67.3 84.3 84.3c0 0 9.1.8 14-5.3l9.6-12c4.6-6 15.7-9.8 26.6-3.7 14.7 8.3 33.4 21.2 45.8 32.9 7 5.7 8.6 14.4 3.8 23.6z"></path>
                                    </svg>
                                    
                                    <a href="viber://chat?number=%2B380970582918">(097) 058-29-18</a>
                                </span>
                            </div>
                            <div className="contact__container-content-item">
                                <h3 className="contact__container-content-item-title">Соцмережі</h3>
                                <span className="contact__container-content-item-text">
                                    <svg 
                                        className="check-svg" 
                                        aria-hidden="true" 
                                        focusable="false" 
                                        data-prefix="fas" 
                                        data-icon="caret-down" 
                                        role="img"
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 320 512" 
                                        style={{height: "25px", width: "50px" }}>
                                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                    
                                    <a href="https://www.instagram.com/autowizard.in.ua/">autowizard.in.ua</a>
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    <GoogleMap className="map-google-adaptive" width="600px" height="600px" />
                </div>
            </div>
        </section>
    )
}
