import React from 'react';
import './SearchForm.css';

export default function SearchForm() {
    return (
        <form className='searchform'>
            <input className='searchbar__input' placeholder='Search something ...' value={''} />
            <button value='Search' name='search' title='Search' className='searchbar__button' type='submit'>Search</button>
        </form>
    )
}