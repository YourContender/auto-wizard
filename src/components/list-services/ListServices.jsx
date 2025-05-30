import React from 'react';
import "./ListServices.scss";
import { Link } from 'react-router-dom';
import { Contact } from '../contact/Contact';

export const ListServices = ({ list, types }) => {

    return (
        <section className="list-services">
            <div className="list-services__container">
                <div className="list-services__container-list">
                    {
                        list.map((item, index) => {
                            switch(item.types) {
                                case types :
                                    return (
                                        <div className="list-services__container-list-item" key={index}>
                                            <div className="list-services-img">
                                                <img src={item.image} alt="image" />
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
            </div>
            <Contact/>
        </section>
    )
}
