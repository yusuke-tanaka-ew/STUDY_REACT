import React from 'react'
import {Grid,TextField,Button} from '@material-ui/core'
import '../App.css'

export default class Overlay extends React.Component{
    render(){
        if(this.props.isOpenForm){
            return(
                <div className='overlay'>
                    <div className='inputArea'>
                        <TextField multiline label = 'Input ' variant = 'outlined'
                                fullWidth
                                style = {{margin:8}}
                                value = {this.props.texContent} onChange={(e)=>this.props.inputTex(e.target.value)} rowMin={3}
                                />
                        <Button raised color='primary' onClick={()=> this.props.setOpenForm(false)}>CLOSE</Button>
                    </div>
                </div>
            )
        }else{
            return null
        }
    }
}