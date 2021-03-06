import React from 'react';
import {render} from 'react-dom';
import UserList from './components/UserList';
import userReducer from './reducers/user';
import {createStore} from 'redux';


const store = createStore(userReducer);

render(
  <UserList store = {store} />,
  document.getElementById('root')
)