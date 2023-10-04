import React from 'react';
import './NewsCard.css';
const imageCard = require('../../images/image_04.png');
export default function NewsCard() {
    return (
        <div className='newscard'>
            <img src={imageCard} className='newscard__image' />
            <div className='newscard__info'>
                <span className='newscard__date'>November 4, 2020</span>
                <h5 className='newscard__title'>Everyone Needs a Special 'Sit Spot' in Nature</h5>
                <p className='newscard'>
                    Ever since I read Richard Louv's influential book, "Last Child in the Woods," the idea of having a special "sit spot" has stuck with me. This advice, which Louv attributes to nature educator Jon Young, is for both adults and children to find...
                </p>
                <span className='newscard__author'>treehugger</span>
            </div>
        </div>
    )
}
