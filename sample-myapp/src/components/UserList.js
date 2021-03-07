import React from 'react';


function UserList({userName,userNameList,inputUser,addUser}){
    return(
        <div>
            <h2>User List</h2>
            <div className='InputArea'>
                <input type = 'text' onChange={(e)=>inputUser(e.target.value)} />
                <input type = 'button' value = 'add' onClick = {() => addUser(userName)} />
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