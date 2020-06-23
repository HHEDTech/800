import { combineReducers } from 'redux';

import boxesReducer from './boxesReducer';
import scoresReducer from './scoresReducer';

// combine reducers
const reducers = combineReducers({
  boxes: boxesReducer,
  scores: scoresReducer,
});

// make the combined reducers available for import
export default reducers;
