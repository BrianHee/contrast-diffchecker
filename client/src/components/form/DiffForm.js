import React, { useState } from 'react';

import Editor from './editor/Editor';

const DiffForm = () => {
    const [code, setCode] = useState('');

    return (
        <div className='form-container'>
            <Editor />
            <Editor />
        </div>
    );
};

export default DiffForm;