import { Link } from "react-router-dom";
import "./Main.scss";

export const Main = () => {
    return (
        <main className="main">
            <picture>
                <source srcSet="/images/main-bg2-mobile.webp" media="(max-width: 600px)" />
                <source srcSet="/images/main-bg2-tablet.webp" media="(max-width: 1024px)" />
                <img src="/images/main-bg.webp" alt="СТО AutoWizard" className="main__bg" />
            </picture>

            <div className="main__overlay" />
            <div className="main_container">
                <div className="main_container-wrap">
                    <div className="main_container-wrap-block">
                        <h1 className="main_container-wrap-block-name">СТО "AutoWizard"</h1>
                        <h1 className="main_container-wrap-block-address">м. Дніпро, пров. Самаркандський, 2</h1>
                        <span>Ремонт будь-якої складності – це не проблема, а завдання, яке ми вирішимо швидко та професійно!</span>
                        <div className="main_container-wrap-block-btns">
                            <Link to="/price" className="main_container-wrap-block-btns-services">Наші ціни</Link>
                            <Link to="/contact" className="main_container-wrap-block-btns-contacts">Контакти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
