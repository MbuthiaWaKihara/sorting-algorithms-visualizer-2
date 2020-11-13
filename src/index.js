import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//global styles
import './styles/global.css';
//rsuit default styles
import 'rsuite/lib/styles/index.less';

const rootNode = document.querySelector("#root");

ReactDOM.render(<App/>, rootNode);