import React, { useState, useEffect } from 'react';
import CodeMirror from 'codemirror';
import { Button } from '@material-ui/core';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neo.css';
import 'codemirror/mode/javascript/javascript';
import './TextInput.css';


const TextInput = () => {
    const [code, setCode] = useState('hello');
    // const leftEditor = undefined;
    // const rightEditor = undefined;

    useEffect(() => {
        const leftEditor = CodeMirror.fromTextArea(document.getElementById('left-editor'), {
            lineNumbers: true,
            theme: 'neo',
            mode: 'javascript',
            height: 'auto',
        });

        const rightEditor = CodeMirror.fromTextArea(document.getElementById('right-editor'), {
            lineNumbers: true,
            theme: 'neo',
            mode: 'javascript',
            height: 'auto',
        });

        leftEditor.setSize('50%', 300);
        rightEditor.setSize('50%', 300);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();

        // const leftSubmission = leftEditor.getValue();
        // const rightSubmission = rightEditor.getValue();
    };

    return (
        <div className='form-container'>
            <form className='diff-form' autoComplete='off' onSubmit={handleSubmit}>
                <h1>Form</h1>
                <textarea id='left-editor' />
                <textarea id='right-editor' />
                <Button type='submit'>Compare</Button>
            </form>
        </div>
    )
};

export default TextInput;