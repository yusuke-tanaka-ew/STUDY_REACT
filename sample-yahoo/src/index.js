import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'react-router-redux';
import {createBrowserHistory} from 'history';
import createStore from './createStore';

import App from './App';
import reportWebVitals from './reportWebVitals';

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
  <Provider store = {store}>
    {
      /**/
    }
    <ConnectedRouter history = {history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
