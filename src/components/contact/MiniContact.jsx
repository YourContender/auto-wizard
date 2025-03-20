import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone } from '@fortawesome/free-solid-svg-icons';

export const MiniContact = () => {
    return (
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
    )
}
