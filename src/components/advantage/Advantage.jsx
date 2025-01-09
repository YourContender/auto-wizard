import React from 'react'
import { advantageForSelectedService } from '../../data';
import "./Advantage.scss";

export const Advantage = () => {
    return (
        <div className="advantage">
            <div className="advantage-title">
                <h2>Переваги нашого автосервісу</h2>
            </div>
            <div className="advantage-content">
                {
                    advantageForSelectedService.map((item, index) => {
                        return (
                            <div className="advantage-content-item" key={index}>
                                <div className="advantage-icon">
                                    <img src={item.image} alt="" />
                                </div>
                                <span>{item.text}</span>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
