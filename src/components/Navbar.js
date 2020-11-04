import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="navbar-container">
            <Link to={'/'}> Home</Link>
            <Link to={'/page'}> Page </Link>
        </div>
    );
};


export default Navbar;