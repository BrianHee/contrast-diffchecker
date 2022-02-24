import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

import Editor from './Editor';

const DiffForm = () => {
    const [leftCode, setLeftCode] = useState('');
    const [rightCode, setRightCode] = useState('');

    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='form-container'>
                <form className='diff-form'>
                    <div className='dual-container'>
                        <Editor
                            editorName='Original Text'
                            value={leftCode}
                            onChange={setLeftCode}
                        />
                        <Editor
                            editorName='Altered Text'
                            value={rightCode}
                            onChange={setRightCode}
                        />
                    </div>
                    <div className='button-container'>
                        <Link to='/diff' state={{leftCode, rightCode}} style={{ textDecoration: 'none' }}>
                            <Button
                                className='submit-button'
                                variant='contained'
                                sx={{
                                    background: '#3f8efc',
                                    borderRadius: 3
                                }}
                            >
                                Compare
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </motion.div>
    )
}

export default DiffForm;