import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div className="App">

            {!isLoggedIn ? (<Header />) : <p>Loggedin</p>}
            <Main />
            <Footer />
        </div>
    );
}

export default App;
