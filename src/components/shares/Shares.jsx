import React from 'react';
import service from "../../images/svg/service.svg";
import diagnostic from "../../images/svg/auto-repair-svgrepo-com (3).svg";
import volonter from "../../images/svg/white-heart.svg";
import "./Shares.scss";

export const Shares = () => {
    return (
        <div className="shares">
            <div className="shares__container">
                <div className="shares__container-list">
                    <div className="shares__container-list-item">
                        <div className="shares__container-list-item-block">
                            <img src={service} alt="" />
                            <h2>Безкоштовна комп'ютерна діагностика</h2>
                        </div>

                        <div className="hover-block">
                            <h2>Безкоштовна комп'ютерна діагностика</h2>
                            <span>
                                Своєчасне виявлення проблеми - це вже половина шляху до її вирішення.
                            </span>
                            <button>Детальніше</button>
                        </div>
                    </div>

                    <div className="shares__container-list-item">
                        <div className="shares__container-list-item-block">
                            <img src={diagnostic} alt="" />
                            <h2>ТО + Діагностика підвіски за ціною ТО</h2>
                        </div>

                        <div className="hover-block">
                            <h2>ТО + Діагностика підвіски за ціною ТО</h2>
                            <span>
                                Пропозиція, для кожного клієнта, зробимо все швидко та якісно.
                            </span>
                            <button>Детальніше</button>
                        </div>
                    </div>

                    <div className="shares__container-list-item">
                        <div className="shares__container-list-item-block">
                            <img src={volonter} alt="" />
                            <h2>Знижки військовим та волонтерам</h2>
                        </div>

                        <div className="hover-block">
                            <h2>Знижки військовим та волонтерам</h2>
                            <span>
                                З повагою ставимось до наших героїв, тому для вас особливі знижки.
                            </span>
                            <button>Детальніше</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
