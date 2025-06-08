import React from 'react';
import { Link } from 'react-router-dom';
import "./Navigation.scss";

export const Navigation = ({ title, position, secondPosition, path }) => {
    return (
        <nav className="navigation">
            <div className="navigation_container">
                <div className="navigation-title">
                    <h2>{title}</h2>
                </div>
                {
                    secondPosition ? 
                        <div className="navigation-items">
                            <Link to="/" className="navigation-item">Головна / </Link>
                            <Link to={path} className="navigation-item">{position} / </Link>
                            <Link className="navigation-item child"> {secondPosition}</Link>
                        </div>
                        :
                        <div className="navigation-items">
                            <Link to="/" className="navigation-item">Головна / </Link>
                            <Link to={path} className="navigation-item child">{position}</Link>
                        </div>
                }
            </div>
        </nav>
    )
}
