import { combineReducers } from 'redux';

import settingsReducer from 'reducers/settingsReducer';
import lifeReducer from 'reducers/lifeReducer';

/**
 *
 * Main reducer
 *
 */
const reducers = combineReducers({
  lifeReducer,
  settingsReducer,
});

export default reducers;
