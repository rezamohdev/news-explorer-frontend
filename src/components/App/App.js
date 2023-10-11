import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SignupModal from '../SignupModal/SignupModal';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeModal, setActiveModal] = useState("");


    const handleCloseModal = () => {
        setActiveModal("");
    }
    const handleOpenSigninModal = () => {
        setActiveModal("signup");

    }
    return (
        <div className="App">

            {!isLoggedIn ? (<Header isLoggedIn={isLoggedIn} handleOpenSigninModal={handleOpenSigninModal} />) : <SavedNewsHeader isLoggedIn={isLoggedIn} />}
            <Main />
            <Footer />
            {activeModal === 'signup' && (
                <SignupModal isOpen={activeModal === "signup"} handleCloseModal={handleCloseModal} name="signup" buttonText="Signup" />
            )}
        </div>
    );
}

export default App;
