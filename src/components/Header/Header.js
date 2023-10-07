import React from "react";
import './Header.css';
import Searchbar from "../Searchbar/Searchbar";
import Navigation from "../Navigation/Navigation";
import Loading from "../Loading/Loading";
import Preloader from "../Preloader/Preloader";
function Header() {
    return (
        <div className="header">
            <Navigation />
            <Searchbar />
            <Loading />
            {/* <Preloader /> */}
        </div>
    )
}

export default Header;