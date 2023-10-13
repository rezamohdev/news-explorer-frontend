import React from 'react'
import './SavedNews.css';
import NewsCard from '../NewsCard/NewsCard';

export default function SavedNews({ inSavedNews = true }) {
    return (
        <div className='saved-news'>
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
            <NewsCard inSavedNews={inSavedNews} />
        </div>
    )
}
