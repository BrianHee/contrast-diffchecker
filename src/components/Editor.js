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



// class DiffForm extends React.Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             lefttext: '',
//             righttext: ''
//         }

//         // this.setLeftText = this.setLeftText.bind(this);
//         // this.setLeftText = this.setLeftText.bind(this);

//     }

//     // setLeftText(event) {
//     //     const lefttext = event.target.value;
//     //     this.setState({ lefttext });
//     // }

//     // setRightText(event) {
//     //     const righttext = event.target.value;
//     //     this.setState({ righttext });
//     // }

//     componentDidUpdate(prevProps, prevState) {
//         if (prevProps.)
//     }

//     handleChange = (editor, data, value) => {
//         this.setState({ value });
//     };

//     render() {
//         const { lefttext, righttext } = this.state;
//         const options = { lineNumbers: true }
//         return (
//             <div>
//                 <Controlled
//                     value={lefttext}
//                     onBeforeChange={this.handleChange}
//                     options={options}
//                 />
//                 <Controlled
//                     value={righttext}
//                     onBeforeChange={this.handleChange}
//                     options={options}
//                 />
//             </div>
//         )
//     }
// }

// export default DiffForm;