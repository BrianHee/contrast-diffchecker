import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Editor from './Editor';
import DiffEditor from './DiffEditor';

const DiffForm = () => {
    const [leftCode, setLeftCode] = useState('');
    const [rightCode, setRightCode] = useState('');
    // const [diffLoaded, setDiffLoaded] = useState(false);

    const [contentLoad, setContentLoad] = useState(
        <div></div>
    );

    // function loadDiff () {
        // setDiffLoaded(true);
    // }

    function handleClick () {
        setContentLoad(<div></div>)
        if (leftCode === rightCode) {
            setContentLoad(<h1>The two texts are identical</h1>);
        } else {
           setContentLoad(<DiffEditor leftCode={leftCode} rightCode={rightCode} />)
        }
    }

    window.leftCode = leftCode;

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
                    {/* <Link to='/diff'><button className='diff-button' onClick={loadDiff}>Compare</button></Link>
                    {diffLoaded ? 
                        <DiffEditor leftCode={leftCode} rightCode={rightCode} />
                        : null
                    } */}
                    <Link to='/diff'><button className='diff-button' onClick={handleClick}>Compare</button></Link>
                </div>
                <div className='diff-editor'>
                    {contentLoad}
                </div>
            </form>
        </div>
    )
}

export default DiffForm;