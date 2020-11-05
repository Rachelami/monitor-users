import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    const [isHide, setIsHide] = useState(false)

    const handleHamburgerClick = () => {
        setIsHide(!isHide)
    }


    return (
        <div className="navbar-container">

            <img src={process.env.PUBLIC_URL + `${isHide ? '/images/cancel.png' : '/images/hamburger.png'}`} className={isHide ? "cancel-logo nav-hamburger-container": 'hamburger-logo nav-hamburger-container'} onClick={() => handleHamburgerClick()} />

            <div className={isHide ? 'show-navbar navbar-expand' : 'navbar-expand'}>
                <div className="nav-link-box">
                    <img src={process.env.PUBLIC_URL + '/images/location.svg'} className="nav-logos" />
                    <Link to={'/'} className="link"> Map </Link>
                </div>
                <div className="nav-link-box">
                    <img src={process.env.PUBLIC_URL + '/images/search.svg'} className="nav-logos" />
                    <Link to={'/page'} className="link"> Add Users </Link>
                </div>
            </div>
        </div>
    );
};


export default Navbar;