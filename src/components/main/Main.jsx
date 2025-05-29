import { Link } from "react-router-dom";
import "./Main.scss";

export const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
                <div className="main_container-wrap">
                    <div className="main_container-wrap-block">
                        <h1 className="main_container-wrap-block-name">СТО "AutoWizard"</h1>
                        <h1 className="main_container-wrap-block-address">м. Дніпро, пров. Самаркандський, 2</h1>
                        {/* <h1>Професійне технічне обслуговування автомобілів</h1> */}
                        <span>Ремонт будь-якої складності – це не проблема, а завдання, яке ми вирішимо швидко та професійно!</span>
                        <div className="main_container-wrap-block-btns">
                            <Link to="/price" className="main_container-wrap-block-btns-services">Наші ціни</Link>
                            <Link to="/contact" className="main_container-wrap-block-btns-contacts">Контакти</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
