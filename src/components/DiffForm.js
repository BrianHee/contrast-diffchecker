import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Editor from './Editor';

const DiffForm = () => {
    const [leftCode, setLeftCode] = useState('');
    const [rightCode, setRightCode] = useState('');

    return (
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
                    <Link to='/diff' state={{leftCode, rightCode}}>
                        <button className='diff-button' type='button'>Compare</button>
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default DiffForm;