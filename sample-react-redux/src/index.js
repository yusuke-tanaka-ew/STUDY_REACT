import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { createStore } from 'redux';
import taskReducer from './reducers/tasks';
import TodoApp from './containers/TodoApp';

import reportWebVitals from './reportWebVitals';

const store = createStore(taskReducer);

render(
  <Provider store = {store} >
    <TodoApp />
  </Provider >,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
