import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import userReducer from './reducers/user';
import UserList from './container/UserList';

const store = createStore(userReducer);

render(
  <Provider store = {store}>
    <UserList />
  </Provider>,
  document.getElementById('root')
);
