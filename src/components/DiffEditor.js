import React, { useEffect } from 'react';

import 'codemirror/addon/merge/merge.js';
import 'codemirror/lib/codemirror.css';
import 'codemirror/addon/merge/merge.css';
import CodeMirror from 'codemirror';
import diff_match_patch, {DIFF_INSERT, DIFF_DELETE, DIFF_EQUAL} from 'diff-match-patch';

window.diff_match_patch = diff_match_patch;
window.DIFF_INSERT = DIFF_INSERT;
window.DIFF_DELETE = DIFF_DELETE;
window.DIFF_EQUAL = DIFF_EQUAL;

// class DiffEditor extends React.Component{

//   constructor(props){
//     super(props)
//     this.state = {
//       value: {
//         val: '',
//         orig: ''
//       }
//     }
//   }

//   componentDidMount(){
//     const {value:{val,orig}} = this.state;
//     const {language='javascript',theme="eclipse",lineNumbers=true} = this.props
//     const dv = CodeMirror.MergeView(this._ref, {
//       theme: theme,
//       value: val,
//       origLeft: null,
//       origRight: orig,
//       allowEditingOriginals: true,
//       lineNumbers: lineNumbers,
//       mode: language,
//       highlightDifferences: true,
//       gutters: ['CodeMirror-lint-markers'],
//       lint: true,
//       connect: 'align'
//     })
//   }


//   render(){
//     return (
//       <div ref={ref=>this._ref=ref}>
//       </div>
//     )
//   }
  
// };

const DiffEditor = (props) => {
    const { leftCode, rightCode } = props;

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

        console.log('proprety has changed', leftCode);
    }, [leftCode, rightCode])

    return(
        <div id='dv'>
        </div>
    )
};

export default DiffEditor;