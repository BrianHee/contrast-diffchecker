import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom'
import { Alert, Button } from '@mui/material';

import 'codemirror/addon/merge/merge.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/merge/merge.css';
import CodeMirror from 'codemirror';
import diff_match_patch, {DIFF_INSERT, DIFF_DELETE, DIFF_EQUAL} from 'diff-match-patch';
import { motion } from 'framer-motion';

window.diff_match_patch = diff_match_patch;
window.DIFF_INSERT = DIFF_INSERT;
window.DIFF_DELETE = DIFF_DELETE;
window.DIFF_EQUAL = DIFF_EQUAL;

const DiffEditor = () => {
    const location = useLocation();
    const { leftCode, rightCode } = location.state;
    const isIdentical = leftCode === rightCode;

    useEffect(() => {
        const diff = CodeMirror.MergeView(document.getElementById('dv'), {
            value: rightCode,
            origLeft: leftCode,
            lineNumbers: true,
            highlightDifferences: true,
            showDifferences: true,
            revertButtons: false,
            connect: 'align',
            readOnly: true,
            lineWrapping: true
        });
    }, [leftCode, rightCode]);

    return (
        <motion.div
            initial={{ opacity:0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
        <div className='form-container'>
            <div className='diff-name-container'>
                <div className='dif-names'>Original Text</div>
                <div className='dif-names'>Altered Text</div>
            </div>
            <div className='diff-container'>
                <div className='diff-editor' id='dv'></div>
            </div>
            <div className='button-container'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <Button
                        variant='outlined'
                        sx={{
                            borderRadius: 3,
                            width: 100,
                            height: 34
                        }}>
                            Clear
                    </Button>
                </Link>
            </div>
            {isIdentical ? 
                <Alert severity='success'>The two texts are identical!</Alert>
                : null
            }
        </div>
        </motion.div>
    )
};

export default DiffEditor;