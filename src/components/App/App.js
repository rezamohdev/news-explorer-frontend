import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import { Route, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SignupModal from '../SignupModal/SignupModal';
import { useEscape } from '../../hooks/useEscape';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [activeModal, setActiveModal] = useState("");



    const handleCloseModal = () => {
        setActiveModal("");
    }
    const handleOpenSigninModal = () => {
        setActiveModal("signup");

    }
    React.useEffect(() => {

        if (!activeModal) return; // stop the effect not to add the listener if there is no active modal

        const handleEscClose = (e) => {  // define the function inside useEffect not to lose the reference on rerendering
            if (e.key === "Escape") {
                handleCloseModal();
            }
        };

        document.addEventListener("keydown", handleEscClose);

        return () => {  // don't forget to add a clean up function for removing the listener
            document.removeEventListener("keydown", handleEscClose);
        };
    }, [activeModal]);  // watch activeModal here
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
