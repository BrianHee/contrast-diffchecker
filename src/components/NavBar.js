import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.png';

const NavBar = () => {
    return (
        <nav className ='navbar'>
            <Link to='/'><img src={logo} alt='logo' height='60' /></Link>
            <ul className='navbar-ul'>
                <li><Link to='/'>Diff</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li>Feedback</li>
            </ul>
        </nav>
    )
}

export default NavBar;