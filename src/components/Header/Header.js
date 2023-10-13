import React from "react";
import './Header.css';
import Searchbar from "../Searchbar/Searchbar";
import Navigation from "../Navigation/Navigation";
import Loading from "../Loading/Loading";
import Preloader from "../Preloader/Preloader";
import MobileNavigation from "../../vendor/MobileNavigation/MobileNavigation";
function Header({ isLoggedIn, handleOpenSigninModal, }) {
    return (
        <div className="header">
            <Navigation handleOpenSigninModal={handleOpenSigninModal} isLoggedIn={isLoggedIn} />
            <MobileNavigation handleOpenSigninModal={handleOpenSigninModal} isLoggedIn={isLoggedIn} />
            <Searchbar />
            <Loading />
            {/* <Preloader /> */}
        </div>
    )
}

export default Header;