import React from 'react';


function UserList({store}){
    const { userNameList } = store.getState();
    return(
        <div>
            <h2>User List</h2>
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