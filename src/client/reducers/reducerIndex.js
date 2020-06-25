import { combineReducers } from 'redux';

import boxesReducer from './boxesReducer';
import scoresReducer from './scoresReducer';
import leaderboardReducer from './leaderboardReducer';

// combine reducers
const reducers = combineReducers({
  boxes: boxesReducer,
  scores: scoresReducer,
  leaderboard: leaderboardReducer,
});

// make the combined reducers available for import
export default reducers;
