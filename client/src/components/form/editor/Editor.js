import React, { useState, useEffect } from 'react';
// import CodeMirror from 'codemirror';
import { Button } from '@material-ui/core';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/neo.css';
import 'codemirror/mode/javascript/javascript';
import { Controlled } from 'react-codemirror2';

import './Editor.css';

export default class Editor extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.code
        }
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.code !== this.props.code) {
            this.setState({ value: this.props.code });
        }
    };

    handleChange = (editor, data, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        const options = { lineNumbers: true, theme: 'neo' };

        return (
            <div className='editor-container'>
                <Controlled
                    value={value}
                    onBeforeChange={this.handleChange}
                    options={options}
                />
            </div>
        )
    }
}

// const Editor = (props) => {
//     const [code, setCode] = useState('');

//     const {
//         editorName,
//     } = props;

//     return (
//         <div className='editor-container'>
//             <div className='editor-name'>
//                 {editorName}
//             </div>
//             <Controlled
//                 value={code}
//                 className="cm-component"
//                 options={{
//                     theme: 'neo',
//                     lineNumbers: true
//                 }}
//                 onBeforeChange={(editor, data, value) => {
//                     setCode({value});
//                 }}
//             />
//         </div>
//     )
// };

// export default Editor;