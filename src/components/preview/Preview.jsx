import React from 'react';
import preview6 from "../../images/preview/preview6.webp";
import preview2 from "../../images/preview/preview2.webp";
import preview4 from "../../images/preview/preview4.webp";
import preview5 from "../../images/preview/preview5.webp";
import "./Preview.scss";
import { textForPreviewComponentPoints } from '../../data';
import { PreviewPoints } from './preview-poitns/PreviewPoints';

export const Preview = () => {
    return (
        <section className="preview">
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
                        <img src={preview2} alt="image" className="preview-desktop" loading="lazy"/>
                        <img src={preview6} alt="image" className="preview-mobile" loading="lazy"/>
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
                                {
                                    textForPreviewComponentPoints.map((item, index) => {
                                        return (
                                            <PreviewPoints text={item} key={index}/>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="preview__container-right">
                    <img src={preview5} alt="image" className="preview-desktop" loading="lazy"/>
                    <img src={preview4} alt="image" className="preview-mobile" loading="lazy"/>
                </div>
            </div>
        </section>
    )
}
