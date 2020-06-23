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

import store from './store';
import App from './App.jsx';
import styles from './styles.scss';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
