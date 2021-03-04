import React from 'react';
import {createStore} from 'redux';
import ReactDOM ,{render}from 'react-dom';
import './index.css';
import App from './components/App';
import UsersList from './components/Users';
import Login from './components/Login';

import userReducer from './reducers/Users';
import Users from './containers/Users';

import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const store = createStore(userReducer);


render(
  <Provider store = {store}>
    <Router>
      <Route path = '/' component = {App} />
      <Route path ='/userlist' component = {UsersList} />
      <Route path ='/login' component = {Login} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
