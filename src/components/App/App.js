import React, { useState } from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SignupModal from '../SignupModal/SignupModal';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeModal, setActiveModal] = useState("signup");


    const handleCloseModal = () => {
        setActiveModal("");
    }
    return (
        <div className="App">

            {!isLoggedIn ? (<Header />) : <SavedNewsHeader />}
            <Main />
            <Footer />
            {activeModal === 'signup' && (
                <SignupModal isOpen={activeModal === "signup"} onClose={handleCloseModal} name="signup" buttonText="Signup" />
            )}
        </div>
    );
}

export default App;
