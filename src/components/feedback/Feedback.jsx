import React from 'react';
import "./Feedback.scss";
import { textForFeedbackComponentList } from '../../data';
import { FeedbackItem } from './FeedbackItem/FeedbackItem';
import { FeedbackForms } from './feedback-forms/FeedbackForms';

export const Feedback = () => {
    return (  
        <section className="feedback">
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
                            {
                                textForFeedbackComponentList.map((item, index) => {
                                    return (
                                        <FeedbackItem text={item} key={index}/>
                                    )
                                })
                            }
                        </div>

                        <div className="feedback__container-block-advantage-phone">
                            <div className="feedback__container-block-advantage-phone-title">
                                <h3>Чекаємо вашого дзвінка</h3>
                            </div>
                            <div className="feedback__container-block-advantage-phone-number">
                                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: "30px", width: "40px" }}>
                                    <path fill="currentColor" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                </svg>
                                <a type='tel'>(097) 058-29-18</a>
                            </div>
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
                            
                            <FeedbackForms/>

                            <div className="feedback__container-block-forms-phone">
                                <div className="feedback__container-block-forms-phone-title">
                                    <h3>Чекаємо вашого дзвінка</h3>
                                </div>
                                <div className="feedback__container-block-forms-phone-number">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: "30px", width: "40px" }}>
                                        <path fill="currentColor" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                                    </svg>
                                    <a type='tel'>(097) 058-29-18</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ) 
}
