import { ACTIONS_TYPES } from 'utils/constants/gameOfLife';
import { isSameCell } from 'utils/functions/gameOfLife';

const { LIFE } = ACTIONS_TYPES;
const {
  ON_CLEAR,
  SET_ISRUNNING,
  ON_STOP,
  UPDATE_LIVING_CELL,
  SET_LIVING_CELLS,
} = LIFE;

export const initialState = {
  isRunning: false,
  livingCellsList: [],
};

/**
 * lifeReducer
 * @param {Object} state
 * @param {Object} action
 */
const lifeReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ISRUNNING:
      return { ...state, isRunning: true };
    case ON_STOP:
      return { ...state, isRunning: false };
    case SET_LIVING_CELLS:
      return { ...state, livingCellsList: action.list };
    case UPDATE_LIVING_CELL:
      return {
        ...state,
        livingCellsList: action.isLiving
          ? [...state.livingCellsList, action.cell]
          : state.livingCellsList.filter(
              (elt) => !isSameCell(elt, action.cell)
            ),
      };
    case ON_CLEAR:
      return initialState;
    default:
      return { ...state };
  }
};

export default lifeReducer;
