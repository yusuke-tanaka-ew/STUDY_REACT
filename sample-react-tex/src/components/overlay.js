import React from 'react'
import {Grid,TextField,Button} from '@material-ui/core'

export default class Overlay extends React.Component{
    render(){
        if(this.props.isOpenForm){
            return(
                <Grid container spacing={1}>
                    <Grid item xs ={1}>
                        <TextField multiline label = 'Input ' variant = 'outlined'
                                fullWidth
                                style = {{margin:8}}
                                value = {this.props.texContent} onChange={(e)=>this.props.inputTex(e.target.value)} rowMin={3}
                                />
                    </Grid>
                    <Grid item xs={1}>
                        <Button raised color='primary' onClick={()=> this.props.setOpenForm(false)}>CLOSE</Button>
                    </Grid>
                </Grid>
            )
        }else{
            return null
        }
    }
}