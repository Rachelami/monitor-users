import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleHamburgerClick = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className='navbar-container'>
            <img src={process.env.PUBLIC_URL + `${isOpen ? '/images/cancel.png' : '/images/hamburger.png'}`} className={isOpen ? 'cancel-logo nav-hamburger-container' : 'hamburger-logo nav-hamburger-container'} onClick={() => handleHamburgerClick()} />
            <div className={isOpen ? 'show-navbar navbar' : 'navbar'}>
                <Link to={'/'} className='nav-link-box'>
                    <img src={process.env.PUBLIC_URL + '/images/location.svg'} className='nav-logos' />
                    <div className='link-title'> Map </div>
                </Link>
                <Link to={'/page'} className='nav-link-box'>
                    <img src={process.env.PUBLIC_URL + '/images/avatar.png'} className='nav-logos' />
                    <div className='link-title'> Add Users </div>
                </Link>
            </div>
        </div>
    );
};


export default Navbar;