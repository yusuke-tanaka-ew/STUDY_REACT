import React from 'react';
import {InlineTex,Tex} from 'react-tex';

import 'katex/dist/katex.min.css';

import {TextareaAutosize} from '@material-ui/core'

const latexString = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
const Latex = require('react-latex');

export default class TexArea extends React.Component{
    
    render(){
        return(
            <div className='texArea'>
                <div className='inputArea'>
                        <TextareaAutosize value = {this.props.texContent} onChange={(e)=>this.props.inputTex(e.target.value)} rowMin={3} />
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


