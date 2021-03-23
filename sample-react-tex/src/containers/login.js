import {connect} from 'react-redux';
import Login from '../components/login';
import {inputEmail,inputPassword,signupWithEmail} from '../actions/login';

const mapStateToProps = state => (
    {
        tmpEmail : state.texContent,
        tmpPassword : state.isOpenForm
    }
)


const mapDispatchToProps = dispatch => (
    {
        inputEmail(tmpEmail){
            dispatch(inputEmail(tmpEmail))
        },
        inputPassword(tmpPassword){
            dispatch(inputPassword(tmpPassword))
        },
        signupWithEmail(){
            dispatch(signupWithEmail())
        }
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Login)