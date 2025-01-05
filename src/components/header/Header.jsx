import logo from "../../images/logo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import "./Header.scss";

export const Header = () => {
    return (
        <div className="header">
            <div className="header__wrap">
                <div className="header__wrap-logo">
                    <img src={logo} alt="logo" />
                    <span className="header__wrap-logo-text">AutoWizard</span>
                </div>
                <div className="header__wrap-list">
                    <span className="header__wrap-list-item">
                        Головна
                    </span>
                    <span className="header__wrap-list-item">
                        Про нас
                    </span>
                    <span className="header__wrap-list-item">
                        Послуги
                    </span>
                    <span className="header__wrap-list-item">
                        Ціни
                    </span>
                    <span className="header__wrap-list-item">
                        Контакти
                    </span>
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
