import React from "react";
import './Navigation.css';
const logoutIcon = require('../../images/logout.svg');

function Navigation({ inSavedNews = true, isLoggedIn }) {
    return (
        <div className={`navbar ${inSavedNews ? 'navbar_saved-news' : ''}`}>
            <div className="navbar__left-side"><span className={`navbar__title ${inSavedNews ? 'navbar__title_saved-news' : ''}`}>NewsExplorer</span></div>
            <div className="navbar__right-side">
                <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : ''} ${inSavedNews ? '' : 'navbar__button_active'}`}>Home</button>
                <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : ''} ${inSavedNews ? 'navbar__button_active_saved_news' : 'navbar__button_active'}`}>Saved Articles</button>
                {isLoggedIn == true ?
                    (
                        <button className='navbar__logout-button' >Reza</button>
                    )
                    :
                    (<button className='navbar__signin-button' >Sign in</button>)
                }
            </div>
        </div>
    )
}
export default Navigation;