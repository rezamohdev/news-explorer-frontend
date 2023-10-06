import React from 'react';
import './Nothingfound.css';
const magPicture = require('../../images/not-found_v1.png');

export default function Nothingfound() {
    return (
        <div className='nothing-found'>
            <img className="nothing-found__image" src={magPicture} alt="not found" />
            <h4 className="nothing-found__title">Nothing found</h4>
            <span className="nothing-found__text">Sorry, but nothing matched
                your search terms.</span>
        </div>
    )
}
