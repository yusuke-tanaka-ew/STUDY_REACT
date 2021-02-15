import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// This is react component
const Hello =(props) => {
return <div>Hello {props.name}!</div>;
};

const helloElement = <Hello name='VaribaleUser'/>
ReactDOM.render(
  <React.StrictMode>
    <div>
      // THIS is reactelement
      <Hello name = 'User01'/>
      <Hello name = 'User02'/>
      // You can use react element as variable
      {helloElement}
    </div>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
