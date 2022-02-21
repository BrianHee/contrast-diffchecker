import React from 'react';

import logopng from '../../images/logo.png';

const NavBar = () => {
    return (
        <nav>
            <a href='/'><img src={logopng} alt='logo' height='60'/></a>
            <h1>NavBar</h1>
        </nav>
    );
};

export default NavBar;