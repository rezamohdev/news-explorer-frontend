import React from "react";
import './Navigation.css';

function Navigation() {
    return (
        <div className="navbar">
            <div className="navbar__left-side"><span className="navbar__title">NewsExplorer</span></div>
            <div className="navbar__right-side">
                <button className="navbar__button">Home</button>
                <button className="navbar__signin-button">Sign in</button>
            </div>
        </div>
    )
}
export default Navigation;