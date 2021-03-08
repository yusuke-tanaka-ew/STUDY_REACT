import {connect} from 'react-redux';
import UserList from '../components/UserList';
import {inputUser,addUser} from '../actions/addUser';
import {push} from 'react-router-redux'

function mapStateToProps(users){
    return {
        userName : users.userName,
        userNameList : users.userNameList
    } 
}

function mapDispatchToProps(dispatch){
    return {
        inputUser(userName){
            dispatch(inputUser(userName))
        },
        addUser(userName){
            dispatch(addUser(userName))
        },
        redirectToError(){
            dispatch(push('/error'))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);