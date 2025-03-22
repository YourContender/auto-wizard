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
                    <img src={logo} alt="logo" />
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
                        Послуги <FontAwesomeIcon className="arrow-icon" icon={faCaretDown} />
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
                        <img src={logo} alt="logo" />
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
