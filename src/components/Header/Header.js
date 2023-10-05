import React from "react";
import './Header.css';
import Searchbar from "../Searchbar/Searchbar";
import Navigation from "../Navigation/Navigation";
import Loading from "../Loading/Loading";
function Header() {
    return (
        <div className="header">
            <Navigation />
            <Searchbar />
            <Loading />
        </div>
    )
}

export default Header;