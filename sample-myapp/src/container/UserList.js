import {connect} from 'react-redux';
import UserList from '../components/UserList';
import {inputUser,addUser} from '../actions/addUser';


function mapStateToProps(state){
    return {
        userName : state.userName,
        userNameList : state.userNameList
    } 
}

function mapDispatchToProps(dispatch){
    return {
        inputUser(userName){
            dispatch(inputUser(userName))
        },
        addUser(userName){
            dispatch(addUser(userName))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserList);