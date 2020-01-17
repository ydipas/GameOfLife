import { ACTIONS_TYPES, LIFE_MODES } from 'utils/constants/gameOfLife';

const { SETTINGS } = ACTIONS_TYPES;
const { RESET, SET_DELAY, SET_HEIGHT, SET_MODE, SET_WIDTH } = SETTINGS;

export const initialState = {
  width: 0,
  height: 0,
  mode: LIFE_MODES.MANUAL_MODE,
  delay: 0,
};

/**
 * settingsReducer
 * @param {Object} state
 * @param {Object} action
 */
const settingsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case RESET:
      return initialState;
    case SET_DELAY:
      return { ...state, delay: action.value };
    case SET_HEIGHT:
      return { ...state, height: action.value };
    case SET_MODE:
      return { ...state, mode: action.value };
    case SET_WIDTH:
      return { ...state, width: action.value };
    default:
      return { ...state };
  }
};

export default settingsReducer;
