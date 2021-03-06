import React from 'react';
import {inputUser,addUser} from '../actions/addUser';


function UserList({store}){
    const { userName,userNameList } = store.getState();
    return(
        <div>
            <h2>User List</h2>
            <div classNam='InputArea'>
                <input type = 'text' onChange={(e)=>store.dispatch(inputUser(e.target.value))} />
                <input type = 'button' value = 'add' onClick = {() => store.dispatch(addUser(userName))} />
            </div>
            <div className='UserListArea'>
                <ul>
                    {
                        userNameList.map(
                            function(item,i){
                                return(
                                    <li key={i}>{item}</li>
                                );
                            }
                        )              
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserList;