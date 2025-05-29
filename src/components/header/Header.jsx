import { useState } from "react";
import logo from "../../images/logo.svg";
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <div className="header__wrap">
                <Link to="/" className="header__logo">
                    <img src={logo} alt="logo" style={{"width": "50px"}}/>
                    <span>AutoWizard</span>
                </Link>

                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">
                        Головна
                    </Link>
                    <Link to="/about" className="header__nav-link">
                        Про нас
                    </Link>
                    <span className="header__nav-link">
                        Послуги
                        <svg className="header__nav-link-arrow-svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: "1em" }}>
                            <path fill="currentColor" d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"></path>
                        </svg>
                        <ul className="header__nav-link-ul">
                            <Link to="/repair" className="link-item">
                               Ремонт
                            </Link>
                            <Link to="/tehobsluzhivanie" className="link-item">
                                ТО
                            </Link>
                            <Link to="/diagnostica" className="link-item">
                                Діагностика
                            </Link>
                            <Link to="/sale" className="link-item">
                                Акції
                            </Link>
                        </ul>
                    </span>
                    <Link to="/price" className="header__nav-link">
                        Ціни
                    </Link>
                    <Link to="/contact" className="header__nav-link">
                        Контакти
                    </Link>
                </nav>

                {/* Телефон */}
                <div className="header__phone" type="tel">
                    {/* <FontAwesomeIcon icon={faPhoneVolume} /> */}
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: "30px", width: "40px" }}>
                        <path fill="currentColor" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                    </svg>
                    <span>(097) 058-29-18</span>
                </div>

                {/* Бургер */}
                <div
                    className={`header__burger ${isMenuOpen ? "open" : ""}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            {/* Боковое меню */}
            <div className={`header__side-menu ${isMenuOpen ? "open" : ""}`}>
                <nav className="header__side-menu-nav">
                    <div className="header__side-logo">
                        <img src={logo} alt="logo" style={{"width": "50px"}}/>
                        <span>AutoWizard</span>
                    </div>

                    <Link to="/" className="header__side-menu-link" onClick={toggleMenu}>
                        Головна
                    </Link>
                    <Link to="/about" className="header__side-menu-link" onClick={toggleMenu}>
                        Про нас
                    </Link>
                    <Link to="/repair" className="header__side-menu-link" onClick={toggleMenu}>
                        Ремонт
                    </Link>
                    <Link to="/tehobsluzhivanie" className="header__side-menu-link" onClick={toggleMenu}>
                        ТО
                    </Link>
                    <Link to="/diagnostica" className="header__side-menu-link" onClick={toggleMenu}>
                        Діагностика
                    </Link>
                    <Link to="/sale" className="header__side-menu-link" onClick={toggleMenu}>
                        Акції
                    </Link>
                    <Link to="/price" className="header__side-menu-link" onClick={toggleMenu}>
                        Ціни
                    </Link>
                    <Link to="/contact" className="header__side-menu-link" onClick={toggleMenu}>
                        Контакти
                    </Link>
                </nav>
                <div className="header__side-menu-phone">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: "30px", width: "40px" }}>
                    <path fill="currentColor" d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"></path>
                </svg>
                    <span>(097) 058-29-18</span>
                </div>
            </div>

            {/* Фон для закрытия меню */}
            {isMenuOpen && <div className="header__backdrop" onClick={toggleMenu}></div>}
        </header>
    );
};
