import React, { FC } from 'react';
import service from "../../images/service.png";
import "./Shares.scss";

export const Shares: FC = () => {
    return (
        <div className="shares">
            <div className="shares__container">
                <div className="shares__container-list">
                    <div className="shares__container-list-item">
                        <img src={service} alt="" />
                        <div className="shares__container-list-item-text">
                            <h2>ТО + Діагностика підвіски за ціною ТО</h2>
                            <button>Детальніше</button>
                        </div>
                    </div>
                    <div className="shares__container-list-item">
                        <img src={service} alt="" />
                        <div className="shares__container-list-item-text">
                            <h2>ТО + Діагностика підвіски за ціною ТО</h2>
                            <button>Детальніше</button>
                        </div>
                    </div>
                    <div className="shares__container-list-item">
                        <img src={service} alt="" />
                        <div className="shares__container-list-item-text">
                            <h2>ТО + Діагностика підвіски за ціною ТО</h2>
                            <button>Детальніше</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
