import React, { useState } from 'react';

import Editor from './Editor';

const DiffForm = () => {
    const [leftCode, setLeftCode] = useState('');
    const [rightCode, setRightCode] = useState('');

    return (
        <div className='form-container'>
            <form className='diff-form'>
                <div className='dual-container'>
                    <Editor
                        editorName='Left'
                        value={leftCode}
                        onChange={setLeftCode}
                    />
                    <Editor
                        editorName='Right'
                        value={rightCode}
                        onChange={setRightCode}
                    />
                </div>
                <div className='button-container'>
                    <button className='diff-button' type='submit'>Compare</button>
                </div>
            </form>
        </div>
    )
}

export default DiffForm;