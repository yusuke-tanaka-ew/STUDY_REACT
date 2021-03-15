import React from 'react';
import {InlineTex,Tex} from 'react-tex';

import 'katex/dist/katex.min.css';

const latexString = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
const Latex = require('react-latex');

export default class TexArea extends React.Component{
    
    render(){
        return(
            <div className='texArea'>
                <div className='inputArea'>
                        <textarea value = {this.props.texContent} onChange={(e)=>this.props.inputTex(e.target.value)} />
                </div>
                <div className ='viewArea'>
                    <h2>THIS IS RAW CONTENT</h2>
                    <p>{this.props.texContent}</p>
                    <h2>THIS IS CONVERTED CONTENT</h2>
                    <div>
                    <InlineTex texContent = {this.props.texContent} />
                    </div>
                </div>
            </div>
        )
    }

}


