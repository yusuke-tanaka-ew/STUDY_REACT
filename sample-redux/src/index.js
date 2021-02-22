import React from 'react';
import { render } from 'react-dom';
import taskReducer from './reducers/tasks';
import TodoApp from './components/TodoApp';
import { createStore} from 'redux';


const store = createStore(taskReducer);

function renderApp(store){
  render(
    <TodoApp store = {store} />,
    document.getElementById('root')
  );
}


store.subscribe(() => renderApp(store));

renderApp(store)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
