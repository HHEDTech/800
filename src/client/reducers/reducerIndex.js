import { combineReducers } from 'redux';

import boxesReducer from './boxesReducer';
import loginReducer from './loginReducer';
import leaderboardReducer from './leaderboardReducer';
import modalReducer from './modalReducer';

// combine reducers
const reducers = combineReducers({
  boxes: boxesReducer,
  user: loginReducer,
  leaderboard: leaderboardReducer,
  modals: modalReducer,
});

// make the combined reducers available for import
export default reducers;
