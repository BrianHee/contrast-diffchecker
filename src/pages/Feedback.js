import React from 'react';
import { motion } from 'framer-motion';

const Feedback = () => {
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <h1>
                Feedback
            </h1>
        </motion.div>
    );
};

export default Feedback;