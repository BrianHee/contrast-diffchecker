import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='about-container'>
                <h1>What is <b>contrast</b>?</h1>
                <h3><b>contrast</b> is a diff tool that enables programmers
                     to visualize two samples of text side by side and identify
                     the textual differences between the two files.
                </h3>
                <h1>How do I use <b>contrast</b>?</h1>
                <h3><b>1.</b> Start by pasting two samples of texts in the input areas.</h3>
                <h3><b>2.</b> Submit the texts for differences with the submit button.</h3>
                <h3><b>3.</b> Visualize the differences in the texts with <b>contrast</b>'s diff viewing interface.</h3>
                <h3>After having submitted two samples of text
                     the user will be prompted with a diff viewer:
                </h3>
                <h4>
                     In the right pane, lines that have been altered will be highlighted
                     in red, while differences will be
                     <u> underlined in green</u>.
                </h4>
            </div>
        </motion.div>
    );
};

export default About;