/**
 * ************************************
 *
 * @module  store.js
 * @author  HHEDTech
 * @date    6/23/2020
 * @description Redux 'single source of truth'
 *
 * ************************************
 */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/reducerIndex';

const store = createStore(reducers, composeWithDevTools());

export default store;
