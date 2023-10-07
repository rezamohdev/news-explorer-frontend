import React from "react";
import './Navigation.css';
const logoutIcon = require('../../images/logout.svg');

function Navigation({ inSavedNews = true }) {
    const isLoggedIn = true;
    return (
        <div className={`navbar ${inSavedNews ? 'nabar_saved-news' : ''}`}>
            <div className="navbar__left-side"><span className={`navbar__title ${inSavedNews ? 'navbar__title_saved-news' : ''}`}>NewsExplorer</span></div>
            <div className="navbar__right-side">
                <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : ''} `}>Home</button>
                <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : ''} navbar__button_active`}>Saved Articles</button>
                {!isLoggedIn ? (<button className={`navbar__signin-button`} >Sign in</button>) : (
                    <button className={`navbar__logout-button  ${inSavedNews ? 'navbar__logout-button_saved-news' : ''}`} >Reza</button>
                )}
            </div>
        </div >
    )
}
export default Navigation;