import React from 'react';
import preview1 from "../../images/preview/preview1.jpg";
import preview2 from "../../images/preview/preview2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import "./Preview.scss";

export const Preview = () => {
    return (
        <div className="preview">
            <div className="preview__container">
                <div className="preview__container-left">
                    <div className="preview__container-left-name">
                        <span>AutoWizard</span>
                    </div>
                    <div className="preview__container-left-title">
                        <h1>Ви можете бути впевненими в тому, що ремонт Вашого авто в надійних руках!</h1>
                    </div>
                    <div className="preview__container-left-text">
                        <span>
                            Вирішення проблеми з якою звернувся до нас клієнт - є нашим приорітетом. 
                            Якісне виконання роботи та задоволений клієнт, це - запорука нашого успіху та нашої репутації.
                        </span>
                    </div>

                    <div className="preview__container-left-block">
                        <img src={preview1} alt="" />
                        <div className="preview__container-left-block-descr">
                            <h2>
                                Ми молода, амбітна та досить досвідчена команда майстрів
                            </h2>
                            <span>
                                Великий досвід роботи з різними класами автомобілів дозволяє нам
                                вирішувати проблеми будь-якої складності. Наші майстри завжди дадуть
                                доцільну пораду та консультацію безкоштовно, адже головне це - ваша безпека на дорозі!
                            </span>
                            <div className="preview__container-left-block-descr-points">
                                <div className="preview__container-left-block-descr-points-item">
                                    <FontAwesomeIcon 
                                        className="preview__container-left-block-descr-points-item-check" 
                                        icon={faCheck} 
                                    />
                                    <span>Велика кількість задоволених клієнтів</span>
                                </div>
                                <div className="preview__container-left-block-descr-points-item">
                                    <FontAwesomeIcon 
                                        className="preview__container-left-block-descr-points-item-check" 
                                        icon={faCheck} 
                                    />
                                    <span>Безперечна репутація</span>
                                </div>
                                <div className="preview__container-left-block-descr-points-item">
                                    <FontAwesomeIcon 
                                        className="preview__container-left-block-descr-points-item-check" 
                                        icon={faCheck} 
                                    />
                                    <span>Якісне виконання роботи</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preview__container-right">
                    <img src={preview2} alt="" />
                    <div className="preview__container-right-title">
                        <h2>Увага до кожної дрібниці</h2>
                    </div>
                    <div className="preview__container-right-text">
                        <span>Ми приділяємо увагу кожній дрібниці, щоб виявити потенційну проблему до того, як вона може нашкодити.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
