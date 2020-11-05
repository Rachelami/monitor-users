import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="nav-link-box">
                <img src={process.env.PUBLIC_URL + '/images/location.svg'} className="nav-logos" />
                <Link to={'/'} className="link"> Map </Link>
            </div>
            <div className="nav-link-box">
                <img src={process.env.PUBLIC_URL + '/images/search.svg'} className="nav-logos" />
                <Link to={'/page'} className="link"> Add Users </Link>
            </div>
        </div>
    );
};


export default Navbar;