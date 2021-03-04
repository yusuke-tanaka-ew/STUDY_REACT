import logo from '../logo.svg';
import React from 'react';
import addUser from '../actions/addUser';

export default function UsersList({userNameList,addUser}) {
  return (
    <div className="UsersList">
        <h1>Users PAGE</h1>
        <input type='button' value='add' onClick={()=>addUser('ADDEDBANEEEE')} />
        <ul>
            {
                userNameList.map(function(item,i){
                    return(
                        <li key={i}>{item}</li>
                    );
                })
            }
        </ul>
    </div>
  );
}

