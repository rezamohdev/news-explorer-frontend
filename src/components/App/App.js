import React, { useState } from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import './App.css';
import SavedNewsHeader from '../SavedNewsHeader/SavedNewsHeader';
import SignupModal from '../SignupModal/SignupModal';
import { useEscape } from '../../hooks/useEscape';
import SigninModal from '../SigninModal/SigninModal';
import SuccessModal from '../SuccessModal/SuccessModal';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [activeModal, setActiveModal] = useState("");



    const handleCloseModal = () => {
        setActiveModal("");
    }
    const handleOpenSigninModal = () => { // handle for opening sign in modal
        setActiveModal("signin");

    }
    const handleOpenSignupModal = () => { // handle for opening sign up modal
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
            <Header isLoggedIn={isLoggedIn} handleOpenSigninModal={handleOpenSigninModal} />
            <Switch>
                <Route exact path='/' >
                    <Main />
                </Route>

            </Switch>
            <Footer />
            {activeModal === 'signup' && (
                <SignupModal isOpen={activeModal === "signup"} handleCloseModal={handleCloseModal} name="signup" buttonText="Signup" handleOpenSigninModal={handleOpenSigninModal} />
            )}
            {activeModal === 'signin' && (
                <SigninModal isOpen={activeModal === "signin"} handleCloseModal={handleCloseModal} name="signin" buttonText="Signin" handleOpenSignupModal={handleOpenSignupModal} />
            )}
            {activeModal === 'success' && (
                <SuccessModal isOpen={activeModal === "success"} handleCloseModal={handleCloseModal} name="success" handleOpenSigninModal={handleOpenSigninModal} title='Registration successfully completed!' />
            )}
        </div>
    );
}

export default App;
