import "./Main.scss";

export const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
                <div className="main_container-wrap">
                    <div className="main_container-wrap-block">
                        <h1>СТО "AutoWizard" м. Дніпро, пров. Самаркандський, 2</h1>
                        {/* <h1>Професійне технічне обслуговування автомобілів</h1> */}
                        <span>Ремонт будь-якої складності – це не проблема, а завдання, яке ми вирішимо швидко та професійно!</span>
                        <div className="main_container-wrap-block-btns">
                            <button className="main_container-wrap-block-btns-services">Наші ціни</button>
                            <button className="main_container-wrap-block-btns-contacts">Контакти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
