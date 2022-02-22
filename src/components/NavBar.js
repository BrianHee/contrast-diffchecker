import React from 'react';

import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <nav className ='navbar'>
            <h1>DiffChecker</h1>
            <a href='/'><img src={logo} alt='logo' height='60' /></a>
        </nav>
    )
}

export default NavBar;