import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux'


const initialState = {
  tasks:[]
};

function taskReducer(state = initialState,action){
  switch(action.type){
    case 'ADD_TASK' :
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task])
      }
    default :
      return state;
  }
}

const addTask = (task) => ({
  type: 'ADD_TASK',
  payload : {
    task
  }
});

const store = createStore(taskReducer);

function handleChange(){
  console.log(store.getState());
}

const unsubscribe = store.subscribe(handleChange);

console.log(store.getState());

store.dispatch(addTask('learnig store'));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
