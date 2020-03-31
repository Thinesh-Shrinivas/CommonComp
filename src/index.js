import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommonMenu from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Scss/common.scss';


const render = (element) => {
	ReactDOM.render(<CommonMenu />, element);
};

export {
	CommonMenu, render
}