
import React,{Component} from 'react';
import {
  Switch,Route
} from 'react-router-dom';

import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux'

import createBrowserHistory from 'history/createBrowserHistory';
import createStore from './createStore'

import Login from './containers/login';

const history = createBrowserHistory();
const store = createStore(history);

render(
  <div className='App'>
      <Provider store = {store}>
        <ConnectedRouter history = {history}>
          <Switch>
            <Route path = '/login' component = {Login} />
            <Route path = '/' component = {Login} />
          </Switch>
        </ConnectedRouter>
      </Provider>
  </div>,
  document.getElementById('root')
);