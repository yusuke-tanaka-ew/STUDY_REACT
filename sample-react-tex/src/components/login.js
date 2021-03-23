import React from 'react';
import {Grid,TextField,Button} from '@material-ui/core'

export default class Login extends React.Component{
    
    render(){
        return(
            <div className='login'>
                <h1>LOGIN</h1>
                <Grid container spacing={1}>
                    <Grid item xs = {12}>
                        <TextField multiline label = 'Input Your Email' variant = 'outlined'
                         fullWidth
                         style = {{margin:8}}
                         value = {this.props.tmpEmail} onChange={(e)=>this.props.inputEmail(e.target.value)} rowMin={1}
                        />
                    </Grid>
                        <TextField multiline label = 'Input Your Password' variant = 'outlined'
                            fullWidth
                            style = {{margin:8}}
                            value = {this.props.tmpPassword} onChange={(e)=>this.props.inputPassword(e.target.value)} rowMin={1}
                            />
                    <Grid item xs = {12}>
                    </Grid>
                </Grid>
                <Button raised color='primary' onClick={()=> this.props.signupWithEmail(this.props.tmpEmail,this.props.tmpPassword)}>SIGN UP</Button>
            </div>
        )
    }

}