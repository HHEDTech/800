/**
 * ************************************
 *
 * @module  index.js
 * @author  HHEDTech
 * @date    6/23/2020
 * @description entry point for application.  Hangs React app off of #roots in index.html
 *
 * ************************************
 */
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from './store';
import App from './App.jsx';
import styles from './styles.scss';

render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
    ,
  </Router>,
  document.getElementById('root')
);
