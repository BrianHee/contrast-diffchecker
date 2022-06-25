import React from 'react';

import 'codemirror/lib/codemirror.css';
import { Controlled } from 'react-codemirror2-react-17';

const Editor = (props) => {
    const { editorName, value, onChange } = props;

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <div className='editor-container'>
            <div className='editor-title'>
                {editorName}
            </div>
            <Controlled
                onBeforeChange={handleChange}
                value={value}
                className='cm-editor'
                options={{
                    lineNumbers: true,
                    lineWrapping: true
                }}
            />
        </div>
    )
}

export default Editor;
