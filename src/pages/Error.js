import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import logo from '../images/logo.png';

const Error = () => {
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='error-container'>
                <h1>Whoops, that page doesn't exist!</h1>
                <h3>Click below to return.</h3>
                <Link to='/'><img src={logo} alt='logo' height='60' /></Link>
            </div>
        </motion.div>
    )
};

export default Error;