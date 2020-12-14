// npm install redux react-redux
// npm install --save redux-devtools-extension
// npm install react-router-dom
// npm install redux-thunk
// npm i --save redux-logger
// npm install @material-ui/core
// npm install @material-ui/icons
// npm install @material-ui/lab
// npm install --save recompose
// npm i react-redux-loading-bar

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// store imports
import store from './store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
