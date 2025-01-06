import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__wrap">
                <div className="header__wrap-logo">
                    <img src={logo} alt="logo" />
                    <span className="header__wrap-logo-text">AutoWizard</span>
                </div>
                <div className="header__wrap-list">
                    <Link to="/" className="header__wrap-list-item">
                        Головна
                    </Link>
                    <Link to="/about" className="header__wrap-list-item">
                        Про нас
                    </Link>
                    <Link to="/service" className="header__wrap-list-item">
                        Послуги
                    </Link>
                    <Link to="/price" className="header__wrap-list-item">
                        Ціни
                    </Link>
                    <Link to="/contact" className="header__wrap-list-item">
                        Контакти
                    </Link>
                </div>
                <div className="header__wrap-phone">
                    <FontAwesomeIcon 
                        className="header__wrap-phone-img" 
                        icon={faPhoneVolume} 
                    />
                    <span>(097) 058-29-18</span>
                </div>
            </div>
        </div>
    )
}
