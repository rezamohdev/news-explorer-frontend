import React, { useState, useRef } from 'react';
// import { ReactCSSTransitionGroup } from 'react-transition-group'; // ES6
import { CSSTransition } from 'react-transition-group';




import './MobileNavigation.css';

export default function MobileNavigation({ inSavedNews, isLoggedIn, handleOpenSigninModal }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const nodeRef = useRef(null);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
        console.log(isMenuOpen);
    }
    return (
        <div className={`mobile-nav  ${isMenuOpen && 'mobile-nav__bar_dark'}`}>
            <div className={`mobile-nav__bar `}>
                <h4 className='mobile-nav__title'>NewsExplorer</h4>
                <button className={`mobile-nav__toggle-button ${isMenuOpen && 'mobile-nav__toggle-button_active'}`} onClick={handleMenuToggle}></button>
            </div>
            {isMenuOpen && (
                <div className='mobile-nav__menu'>
                    <div className='mobile-nav__buttons'>
                        <button className='mobile-nav__button'>Home</button>
                        <button className='mobile-nav__button'>Saved Articles</button>
                    </div>
                    <button className={`mobile-nav__signin-button `}>Sgin in</button>
                    {/* <button className='mobile-nav__logout-button'>Reza </button> */}
                </div>
            )}
        </div >
    )
}