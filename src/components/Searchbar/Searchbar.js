import React, { useState, useEffect } from 'react';
import './Searchbar.css';
import SearchForm from '../SearchForm/SearchForm';
const loadingImage = require('../../images/loading.svg')
export default function Searchbar({ onSearchNews }) {

    return (
        <div className='searchbar'>
            <h2 className='searchbar__title'>What's going on in the world?</h2>
            <span className='searchbar__subtitle'>Find the latest news on any topic and save them in your personal account.</span>
            <div className='searchbar-container'>
                {/* <input className='searchbar__input' placeholder='Search something ...' />
                <button value='Search' name='search' title='Search' className='searchbar__button' >Search</button> */}
                <SearchForm onSearchNews />
            </div>
        </div>
    )
}
