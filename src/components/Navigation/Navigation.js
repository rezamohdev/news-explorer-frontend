import React from "react";
import './Navigation.css';

function Navigation({ inSavedNews = true }) {
    return (
        <div className={`navbar ${inSavedNews ? 'nabar_saved-news' : ''}`}>
            <div className="navbar__left-side"><span className={`navbar__title ${inSavedNews ? 'navbar__title_saved-news' : ''}`}>NewsExplorer</span></div>
            <div className="navbar__right-side">
                <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : ''} `}>Home</button>
                <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : ''} navbar__button_active`}>Saved Articles</button>
                <button className={`navbar__signin-button  ${inSavedNews ? 'navbar__signin-button_saved-news' : ''}`} >Sign in</button>
            </div>
        </div >
    )
}
export default Navigation;