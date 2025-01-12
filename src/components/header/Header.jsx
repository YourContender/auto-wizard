import { useState } from "react";
import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
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
                {/* Логотип */}
                <div className="header__logo">
                    <img src={logo} alt="logo" />
                    <span>AutoWizard</span>
                </div>

                {/* Меню для десктопа */}
                <nav className="header__nav">
                    <Link to="/" className="header__nav-link">
                        Головна
                    </Link>
                    <Link to="/about" className="header__nav-link">
                        Про нас
                    </Link>
                    <Link to="/service" className="header__nav-link">
                        Послуги
                    </Link>
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
                    <Link to="/service" className="header__side-menu-link" onClick={toggleMenu}>
                        Послуги
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
