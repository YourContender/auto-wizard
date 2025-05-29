import React from 'react';
import about from "../../images/about.webp"
import { Link } from 'react-router-dom';
import "./AboutUs.scss";
import { Advantage } from '../advantage/Advantage';

export const AboutUs = () => {
    return (
        <div className="about">
            {/* <div className="about__bg">
                <div className="about__bg-title">
                    <h1>Про нас</h1>
                    <Link className="about__bg-title-link" to="/">Головна / <p>Про нас</p></Link>
                </div>
            </div> */}

            <div className="about__content">
                <div className="about__content-descr">
                    <span>
                        СТО "AutoWizard" вітає вас! Ми молода команда амбітних майстрів своєї справи, вирішимо питання будь якої складності 
                        по Вашому автомобілю.
                    </span>
                    <span>  
                        Наш досвід здобутий протягом років дозволяє нам надавати високоякісні послуги по ремонту та технічному 
                        обслуговуванню усіх марок автомобілів. Нашим пріорітетом завжди є та буде - щоб Ваш автомобіль, після 
                        нашого ремонту працював бездоганно та безпечно.
                    </span>
                    <span>
                        Для нас важливою сладовою успіху є наша репутація, щоб кожний клієнт який відвідує нас був задоволений 
                        і залишився з нами. Ми прихильники чесних та прозорих відносин з клієнтами, тому Ви завжди можете перевірити 
                        та поцікавитися на якому етапі ремонту знаходиться Ваш атомобіль.
                        Якщо ви обрали нас, Ви можете не перейматись, Ваше авто в надійних руках.
                    </span>
                </div>

                <div className="about__content-image">
                    <img src={about} alt="about" />
                </div>

            </div>

            <div className="about__advantage">
                <Advantage/>
            </div>
        </div>
    )
}
