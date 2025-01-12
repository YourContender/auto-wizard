import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import "./Feedback.scss";

export const Feedback = () => {
    return (  
        <div className="feedback">
            <div className="feedback__container">
                
                <div className="feedback__container-block">
                    <div className="feedback__container-block-advantage">
                        <div className="feedback__preview">
                            <span>AutoWizard</span>
                        </div>
                        <div className="feedback__container-block-advantage-title">
                            <h2>Чому саме ми?</h2>
                        </div>
                        
                        <div className="feedback__container-block-advantage-descr">
                            <span>
                                Для нашої команди кожен клієнт є особливим, кожна проблема з якою до нас звертаються є пріорітетом. 
                                Перед початком роботи ми проводими ретельне обстеження проблеми, щоб в майбутньому вона більше ніколи 
                                не турбувала нашого клієнта.
                            </span>
                        </div>
                        
                        <div className="feedback__container-block-advantage-list">
                            <div className="feedback__container-block-advantage-list-item">
                                <FontAwesomeIcon 
                                    className="feedback__container-block-advantage-list-item-check" 
                                    icon={faCheck} 
                                />
                                <span>Необхідні запчастини та всі роботи узгоджуються до початку проведення ремонту.</span>
                            </div>
                            
                            <div className="feedback__container-block-advantage-list-item">
                                <FontAwesomeIcon 
                                    className="feedback__container-block-advantage-list-item-check" 
                                    icon={faCheck} 
                                />
                                <span>Ми завжди дотримуємося узгоджених термінів ТО та ремонту авто.</span>
                            </div>
                            
                            <div className="feedback__container-block-advantage-list-item">
                                <FontAwesomeIcon 
                                    className="feedback__container-block-advantage-list-item-check" 
                                    icon={faCheck} 
                                />
                                <span>Ми ніколи не нав'язуємо зайвих послуг та не пропонуємо відремонтувати те, що не потребує ремонту.</span>
                            </div>
                            
                            <div className="feedback__container-block-advantage-list-item">
                                <FontAwesomeIcon 
                                    className="feedback__container-block-advantage-list-item-check" 
                                    icon={faCheck} 
                                />
                                <span>Ви можете бути присутнім при ремонті авто, якщо забажаєте.</span>
                            </div>
                            
                            <div className="feedback__container-block-advantage-list-item">
                                <FontAwesomeIcon 
                                    className="feedback__container-block-advantage-list-item-check" 
                                    icon={faCheck} 
                                />
                                <span>Фахівці з багаторічним досвідом роботи знайдуть рішення завдань будь-якої складності.</span>
                            </div>
                            
                            <div className="feedback__container-block-advantage-list-item">
                                <FontAwesomeIcon 
                                    className="feedback__container-block-advantage-list-item-check" 
                                    icon={faCheck} 
                                />
                                <span>Ми за прозорість в цінах, тому ви відразу будете знати вартість ремонту вашого авто.</span>
                            </div>
                        </div>

                        <div className="feedback__container-block-advantage-phone">
                            <div className="feedback__container-block-advantage-phone-title">
                                <h3>Чекаємо вашого дзвінка</h3>
                            </div>
                            <FontAwesomeIcon 
                                className="feedback__container-block-advantage-phone-icon" 
                                icon={faPhoneVolume} 
                            />
                            <a type='tel'>(097) 058-29-18</a>
                        </div>
                    </div>
                    <div className="feedback__container-block-forms">
                        <div className="feedback__container-block-forms-wrap">
                            <div className="feedback__container-block-forms-wrap-title">
                                <h3>Залиште свій номер і ми вам зателефонуємо</h3>
                            </div>

                            <div className="feedback__container-block-forms-wrap-descr">
                                <span>
                                    Можете викласти свою проблему тут і наш майстер вам зателефонує для більш придметного обговорення.
                                    Або ви завжди можете відвідати наше СТО, де ми приступимо до вирішення вашої проблеми.                                    
                                </span>
                            </div>
                            
                            <div className="feedback__container-block-forms-wrap-field">
                                <div className="feedback__container-block-forms-wrap-field-input">
                                    <input placeholder="Ваше ім'я"/>
                                </div>
                                
                                <div className="feedback__container-block-forms-wrap-field-phone">
                                    <input placeholder='Ваш телефон'/>
                                </div>
                                
                                <div className="feedback__container-block-forms-wrap-field-problem">
                                    <textarea placeholder='Опишіть вашу проблему'/>
                                </div>
                                
                                <div className="feedback__container-block-forms-wrap-field-submit">
                                    <button>Відправити</button>
                                </div>
                            </div>

                            <div className="feedback__container-block-forms-phone">
                                <div className="feedback__container-block-forms-phone-title">
                                    <h3>Чекаємо вашого дзвінка</h3>
                                </div>
                                <FontAwesomeIcon 
                                    className="feedback__container-block-forms-phone-icon" 
                                    icon={faPhoneVolume} 
                                />
                                <a type='tel'>(097) 058-29-18</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
