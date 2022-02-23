import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <nav className ='navbar'>
            <a href='/'><img src={logo} alt='logo' height='60' /></a>
            <a href='/'>Diff</a>
            <Link to='/about'>About</Link>
        </nav>
    )
}

export default NavBar;