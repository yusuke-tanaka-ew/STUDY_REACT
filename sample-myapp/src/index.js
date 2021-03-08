import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {Route} from 'react-router-dom';

import createStore from './store';
import UserList from './container/UserList';
import Error from './components/error'

const history = createBrowserHistory();
const store = createStore(history);

render(
  <Provider store = {store}>
    <ConnectedRouter history = {history}>
      <div className = 'RouterArea'>
        <Route exact path= "/" component = {UserList} />
        <Route exact path="/error" component = {Error} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
