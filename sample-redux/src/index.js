import React from 'react';
import { render } from 'react-dom';
import './index.css';
// import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';


const initialState = {
  task:'defalut task',
  tasks : ['default task']
};


function taskReducer(state= initialState,action){
  switch (action.type){
    case 'INPUT_TASK':
      return {
        ...state,
        task : action.payload.task
      };
    case 'ADD_TASK':
      return {
        ...state,
        tasks : state.tasks.concat([action.payload.task])
      };
    default:
      return state;
  }
}

const store = createStore(taskReducer);

const inputTask = (task) => ({
  type : 'INPUT_TASK',
  payload : {
    task
  }
});

const addTask = (task) => ({
  type : 'ADD_TASK',
  payload : {
    task
  }
});

console.log(store.getState());


function TodoApp({ store }) {
  const { task, tasks } = store.getState();
  return(
    <div>
      <input type='text' onChange={(e) => store.dispatch(inputTask(e.target.value))} />
      <input type='button' value='ADD' onClick={()=>store.dispatch(addTask(task))} />
      <ul>
        {
          tasks.map(function(item, i){
            return(
              <li key = {i}>{item}</li>
            );
          })
        }
      </ul>
    </div>
  );
}

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
