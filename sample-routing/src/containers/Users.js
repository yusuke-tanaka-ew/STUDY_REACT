import {connect} from 'react-redux';
import UsersList from '../components/Users';
import { addUser }from '../actions/addUser';

function mapStateToProps(state){
    return {
        userNameList : state.UserNameList
    };
}

function mapDispatchToProps(dispatch){
    return{
        addUser(userName){
            dispatch(addUser(userName));
        }
    };
}


export default connect(mapStateToProps,mapDispatchToProps)(UsersList);