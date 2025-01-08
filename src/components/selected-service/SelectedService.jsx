import React from 'react';
import { listServices, advantageForSelectedService } from '../../data';
import "./SelectedService.scss";
import { Link } from 'react-router-dom';

export const SelectedService = ({ title }) => {
    const currentService = listServices.filter(item => item.title === title)

    return (
        <div className="selected">
            <div className="selected__bg">
                <div className="selected__bg-title">
                    <h1>{currentService[0].service}</h1>
                    <Link className="selected__bg-title-link" to="/service">Послуги / <p>{title}</p></Link>
                </div>
            </div>
            <div className="selected__container">
                {
                    currentService.map((item, index) => {
                        return (
                            <div className="selected__container-wrap" key={index}>
                                <div className="selected__container-wrap-descr">
                                    <span>{item.description}</span>
                                    <button>Вартість послуг</button>
                                </div>
                                <div className="selected__container-wrap-img">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        )
                    })
                }

                <div className="selected__container-advantage">
                    <div className="selected__container-advantage-title">
                        <h2>Переваги нашого автосервісу</h2>
                    </div>
                    <div className="selected__container-advantage-content">
                        {
                            advantageForSelectedService.map((item, index) => {
                                return (
                                    <div className="selected__container-advantage-content-item" key={index}>
                                        <div className="selected-icon">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <span>{item.text}</span>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="selected__container-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Види робіт</th>
                                <th>Ціна, грн.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentService[0].itemsForTable.map((row, index) => (
                                <tr key={index}>
                                    <td>{row.name}</td>
                                    <td>{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
