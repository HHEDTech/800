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
import rootReducer from './reducers/reducerIndex';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
