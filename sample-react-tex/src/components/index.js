import React from 'react';
import {Tex} from 'react-tex';

export default class TexArea extends React.Component{
    
    render(){
        return(
            <div className='texArea'>
                <div className='inputArea'>
                    <input type='text' onChange={(e)=>this.props.inputTex(e.target.value)} />
                </div>
                <div className ='viewArea'>
                    <Tex texContent = {this.props.texContent} />
                </div>
            </div>
        )
    }

}


