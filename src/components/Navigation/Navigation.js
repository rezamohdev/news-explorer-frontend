import React from "react";
import './Navigation.css';
import { Link } from "react-router-dom";
const logoutIcon = require('../../images/logout.svg');

function Navigation({ inSavedNews, isLoggedIn, handleOpenSigninModal }) {
    return (
        <div className={`navbar ${inSavedNews && 'navbar_saved-news'}`}>
            <div className="navbar__left-side"><span className={`navbar__title ${inSavedNews ? 'navbar__title_saved-news' : ''}`}>NewsExplorer</span></div>
            <div className="navbar__right-side">
                <Link to='/' className="navbar__link">
                    <button className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news' : 'navbar__button_active'}`}>Home</button> </Link>
                {isLoggedIn &&
                    (<Link to='/saved-news'>
                        <button
                            className={`navbar__button ${inSavedNews ? 'navbar__button_saved-news navbar__button_saved-news_active' : ''}`}>Saved Articles</button>
                    </Link>)}
                {isLoggedIn == true ?
                    (
                        <button className={`navbar__logout-button ${inSavedNews && 'navbar__logout-button_saved_news'}`} >Reza</button>
                    )
                    :
                    (<button className='navbar__signin-button' onClick={handleOpenSigninModal}>Sign in</button>)
                }
            </div>
        </div>
    )
}
export default Navigation;