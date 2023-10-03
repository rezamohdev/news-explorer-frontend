import React from "react";
import './Header.css';
import Navbar from "../Navbar/Navbar";
import Searchbar from "../Searchbar/Searchbar";
function Header() {
    return (
        <div className="header">
            <Navbar />
            <Searchbar />
        </div>
    )
}

export default Header;