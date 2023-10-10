import React from "react";
import './Navigation.css';
const logoutIcon = require('../../images/logout.svg');

function Navigation({ isLoggedIn }) {
    return (
        <div className={`navbar ${isLoggedIn ? 'navbar_saved-news' : ''}`}>
            <div className="navbar__left-side"><span className={`navbar__title ${isLoggedIn ? 'navbar__title_saved-news' : ''}`}>NewsExplorer</span></div>
            <div className="navbar__right-side">
                <button className={`navbar__button ${isLoggedIn ? 'navbar__button_saved-news' : ''} `}>Home</button>
                <button className={`navbar__button ${isLoggedIn ? 'navbar__button_saved-news' : ''} navbar__button_active`}>Saved Articles</button>
                {isLoggedIn ?
                    (
                        <button className={`navbar__logout-button  ${isLoggedIn ? 'navbar__logout-button_saved-news' : ''}`} >Reza</button>
                    )
                    :
                    (<button className={`navbar__signin-button`} >Sign in</button>)
                }
            </div>
        </div>
    )
}
export default Navigation;