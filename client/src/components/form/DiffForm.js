import React, { useState } from 'react';

import Editor from './editor/Editor';

const DiffForm = () => {
    const [code, setCode] = useState('');

    return (
        <div className='form-container'>
            <form className='diff-form'>
                <Editor editorName='left-editor'/>
                <Editor editorName='right-editor'/>
            </form>
        </div>
    );
};

export default DiffForm;