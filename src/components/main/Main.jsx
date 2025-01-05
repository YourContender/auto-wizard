import "./Main.scss";

export const Main = () => {
    return (
        <div className="main">
            <div className="main_container">
                <div className="main_container-wrap">
                    <div className="main_container-wrap-block">
                        <h1>Професійне технічне обслуговування автомобілів</h1>
                        <span>Ми обслуговуємо всі марки авто, гарантуючи якість та увагу до кожної деталі.</span>
                        <div className="main_container-wrap-block-btns">
                            <button className="main_container-wrap-block-btns-services">Послуги</button>
                            <button className="main_container-wrap-block-btns-contacts">Контакти</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
