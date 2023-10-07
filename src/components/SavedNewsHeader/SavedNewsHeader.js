import React from "react";
import './SavedNewsHeader.css';
import Nvaigation from '../Navigation/Navigation';

export default function SavedNewsHeader() {
    return (
        <div className="saved-news-header">
            <Nvaigation />
            <div className="saved-news-header__titlebar">
                <span className="saved-news-header__title">Saved articles</span>
                <h2 className="saved-news-header__news-count">Elise, you have 5 saved articles</h2>
                <span className="saved-news-header__keywords">By keywords: <b>Nature, Yellowstone, and 2 other</b></span>
            </div>
        </div>
    )
}
