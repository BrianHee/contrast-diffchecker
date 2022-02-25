import React from 'react';
import { motion } from 'framer-motion';

const Feedback = () => {
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='feedback-container'>
                <h1>Feedback</h1>
                <h3>Hey, my name is Brian! Thanks so much for using  
                    <b> contrast</b>, I'd appreciate any feedback you 
                    have for me. Feel free to send me an email at:
                </h3>
                <div><h4>gittybrian@gmail.com</h4></div>
            </div>
        </motion.div>
    );
};

export default Feedback;