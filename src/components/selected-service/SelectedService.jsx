import React from 'react';
import { configService } from '../../data';
import { Link } from 'react-router-dom';
import { Advantage } from '../advantage/Advantage';
import "./SelectedService.scss";

export const SelectedService = ({ title }) => {
    const currentService = configService.filter(item => item.title === title);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="selected">
            {/* <div className="selected__bg">
                <div className="selected__bg-title">
                    <h1>{currentService[0].service}</h1>
                    <Link 
                        className="selected__bg-title-link" 
                        to="/"
                    >
                        Головна / <Link className="selected__bg-title-link" to="/service"> Послуги </Link> / <p>{title}</p>
                    </Link>
                </div>
            </div> */}
            <div className="selected__container">
                {
                    currentService.map((item, index) => {
                        return (
                            <div className="selected__container-wrap" key={index}>
                                <div className="selected__container-wrap-descr">
                                    <span>{item.description}</span>
                                    <button onClick={() => scrollToSection("price")}>Вартість послуг</button>
                                </div>
                                <div className="selected__container-wrap-img">
                                    <img src={item.image} alt="" />
                                </div>
                            </div>
                        )
                    })
                }
                <Advantage/>

                <div className="selected__container-title">
                    <h2>Вартість послуг</h2>
                    <span>
                        Ціни вказані для ознайомлення з ціновою політикою автосервісу та не включають ПДВ. 
                        Точну вартість робіт ви можете дізнатися за телефоном або приїхавши до нас на СТО
                    </span>
                </div>

                <div className="selected__container-table" id="price">
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
