import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <span className='footer__copyright'>© 2021 Supersite, Powered by News API</span>
            <div className='footer__navigation'>
                <div className='footer__links'>
                    <button className='footer__button'>Home</button>
                    <button className='footer__button'>TripleTen</button>
                </div>
                <div className='footer__icons'>
                    <button className='footer__link linkedin-icon'></button>
                    <button className='footer__link github-icon'></button>
                </div>
            </div>
        </div>
    )
}
