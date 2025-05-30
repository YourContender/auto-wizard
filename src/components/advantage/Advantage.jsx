import React from 'react'
import { advantageForSelectedService } from '../../data';
import "./Advantage.scss";

export const Advantage = () => {
    return (
        <section className="advantage">
            <div className="advantage-title">
                <h2>Переваги нашого автосервісу</h2>
            </div>

            <div className="advantage__list">
                {
                    advantageForSelectedService.map((item, index) => {
                        return (
                            <div className="advantage__list-item" key={index}>
                                <div className="advantage__list-item-image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="advantage__list-item-text">
                                    <div className="advantage__list-item-text-title">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <div className="advantage__list-item-text-descr">
                                        <span>{item.text}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}
