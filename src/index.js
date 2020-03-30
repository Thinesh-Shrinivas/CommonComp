import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/common.scss';

const render = (element)=>{
  ReactDOM.render(<App />,element);
  }
  
  export{
    App,render
  }
  