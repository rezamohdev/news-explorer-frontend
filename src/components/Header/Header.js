import React from "react";
import './Header.css';
import Searchbar from "../Searchbar/Searchbar";
import Navigation from "../Navigation/Navigation";
function Header() {
    return (
        <div className="header">
            <Navigation />
            <Searchbar />
        </div>
    )
}

export default Header;