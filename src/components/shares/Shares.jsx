import React from 'react';
import diagnostika from "../../images/sale/diagnostika.webp";
import hovodka from "../../images/sale/hodovka.webp";
import volonter from "../../images/sale/volonter.webp";
import "./Shares.scss";

export const Shares = () => {
    return (
        <div className="shares">
            <div className="shares__container">
                <div className="shares__container-list">
                    <div className="shares__container-list-item">
                        <div className="shares__container-list-item-text">
                            <h2 className="shares__container-list-item-text-title">
                                Безкоштовна комп'ютерна діагностика
                            </h2>
                            <span className="shares__container-list-item-text-descr">
                                Головним пріоритетом в нашій роботі є своєчасність виявлення проблем, до того, як вони 
                                стануть критичними для Вашого авто. Тому, окрім усунення усіх проблем з Вашим авто, 
                                через які Ви звернулися до нас, ми додатково та безкоштовно проведемо комп'ютерну 
                                діагностику та надамо детальний звіт. Наша команда цінує клієнтів та їх безпеку на дорозі.
                            </span>
                            {/* <button className="shares__container-list-item-text-btn">Звернутися до нас</button> */}
                        </div>
                        <div className="shares__container-list-item-img">
                            <img src={diagnostika} alt="" />
                        </div>
                    </div>

                    <div className="shares__container-list-item reverse">
                        <div className="shares__container-list-item-img">
                            <img src={hovodka} alt="" />
                        </div>
                        <div className="shares__container-list-item-text">
                            <h2 className="shares__container-list-item-text-title">
                                ТО + Діагностика підвіски За ціною ТО
                            </h2>
                            <span className="shares__container-list-item-text-descr">
                                Вчасне технічне обслуговування Вашого авто - це Ваша впевненість в надійності та безпеці на дорозі. 
                                Особливо важливим елементом безпеки, на наш погляд, є саме підвіска, тому ми готові безкоштовно 
                                продіагностувати Вашу підвіску, щоб в будь-якій ситуації ви були впевнені, що Ваше авто не підведе.
                            </span>
                        </div>
                        
                    </div>

                    <div className="shares__container-list-item">
                        <div className="shares__container-list-item-text">
                            <h2 className="shares__container-list-item-text-title">
                                Знижки військовим та волонтерам
                            </h2>
                            <span className="shares__container-list-item-text-descr">
                                Єдність нашої держави - це запорука нашого успіху та перемоги. На постійній основі в нашому СТО 
                                діють знижки для військових та волонтерів, які боронять нашу землю. Ми усвідомлюємо, що ремонт 
                                військових автівок має бути швидким та якісним, тому таким авто буде надано найвищий пріорітет.
                            </span>
                        </div>
                        <div className="shares__container-list-item-img">
                            <img src={volonter} alt="" />
                        </div>
                    </div>
                </div>
                <div className="shares__container-list-item-text-btn">
                    <button>Замовити зворотній виклик</button>
                </div>
            </div>
        </div>
    )
}
