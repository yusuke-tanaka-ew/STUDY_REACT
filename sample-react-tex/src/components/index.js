import React from 'react';
import {InlineTex,Tex} from 'react-tex';

import 'katex/dist/katex.min.css';

import {Grid,TextField} from '@material-ui/core'

const latexString = "\int_{a}^{b} f(x)dx = F(b) - F(a)";
const Latex = require('react-latex');

export default class TexArea extends React.Component{
    
    render(){
        return(
            <div className='texArea'>
                <h1>INPUT QUESTION</h1>
                <Grid container spacing={3}>
                    <Grid item xs = {6}>
                        <TextField multiline label = 'Input ' variant = 'outlined'
                         fullWidth
                         style = {{margin:8}}
                         value = {this.props.texContent} onChange={(e)=>this.props.inputTex(e.target.value)} rowMin={3}
                        />
                    </Grid>
                    <Grid item xs = {6}>
                        <h2>THIS IS RAW CONTENT</h2>
                        <p>{this.props.texContent}</p>
                        <h2>THIS IS CONVERTED CONTENT</h2>
                        <div>
                        <InlineTex texContent = {this.props.texContent} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }

}


