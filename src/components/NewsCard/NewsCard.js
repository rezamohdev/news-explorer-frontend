import React, { useState } from 'react';
import './NewsCard.css';
const imageCard = require('../../images/image_04.png');
export default function NewsCard({ inSavedNews }) {
    const [tooltipShow, setTooltipShow] = useState(false);


    const handleIsMouseOver = () => {
        setTooltipShow(true);
    }
    const handleOnMouseLeave = () => {
        setTooltipShow(false);
    }
    return (
        <div className='newscard'>
            <div className='newscard__save-box'>
                {
                    inSavedNews == true ? (
                        tooltipShow && (<span className='newscard__save-tooltip'>Remove from saved</span>)

                    ) : (
                        tooltipShow && (<span className='newscard__save-tooltip'>Sign in to save articles</span>)

                    )
                }
                {inSavedNews == true ? (
                    <button className='newscard__remove-button' onMouseOver={handleIsMouseOver} onMouseLeave={handleOnMouseLeave}></button>
                ) : (
                    <button className='newscard__save-button' onMouseOver={handleIsMouseOver} onMouseLeave={handleOnMouseLeave}></button>

                )}
            </div>
            {inSavedNews && (<span className='newscard__main-title'>Nature</span>)}
            <img src={imageCard} className='newscard__image' />
            <div className='newscard__info'>
                <span className='newscard__date'>November 4, 2020</span>
                <h5 className='newscard__title'>Everyone Needs a Special 'Sit Spot' in Nature</h5>
                <p className='newscard__desciprtion'>
                    Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...
                </p>
                <span className='newscard__author'>treehugger</span>
            </div>
        </div>
    )
}
