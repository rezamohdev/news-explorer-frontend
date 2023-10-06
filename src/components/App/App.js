import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return (
        <div className="App">

            {!isLoggedIn ? (<Header />) : <SavedNewsHeader />}
            <Main />
            <Footer />
        </div>
    );
}

export default App;
