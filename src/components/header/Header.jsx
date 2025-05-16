import { useState } from "react";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume, faCaretDown } from "@fortawesome/free-solid-svg-icons";
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
                <div className="header__logo">
                    <img src={logo} alt="logo" style={{"width": "50px"}}/>
                    <span>AutoWizard</span>
                </div>

                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">
                        Головна
                    </Link>
                    <Link to="/about" className="header__nav-link">
                        Про нас
                    </Link>
                    <span className="header__nav-link">
                        Послуги
                        {/*<FontAwesomeIcon className="arrow-icon" icon={faCaretDown} />*/}
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" style={{height: "1em", }}>
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
                <div className="header__phone">
                    <FontAwesomeIcon icon={faPhoneVolume} />
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
                    <FontAwesomeIcon icon={faPhoneVolume} />
                    <span>(097) 058-29-18</span>
                </div>
            </div>

            {/* Фон для закрытия меню */}
            {isMenuOpen && <div className="header__backdrop" onClick={toggleMenu}></div>}
        </header>
    );
};
