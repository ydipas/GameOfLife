import { ACTIONS_TYPES } from 'utils/constants/gameOfLife';

const { LIFE, SETTINGS } = ACTIONS_TYPES;
const {
  ON_CLEAR,
  ON_NEXT_STEP,
  ON_START,
  ON_STOP,
  SET_RANDOMN_CELLS,
  UPDATE_LIVING_CELL,
} = LIFE;
const { RESET, SET_DELAY, SET_HEIGHT, SET_MODE, SET_WIDTH } = SETTINGS;

/**
 * NB : Toutes les actions debutant par le mot "notify" sont
 * des actions ecoutees par les sagas
 */
export const lifeActions = {
  clearLife: () => ({ type: ON_CLEAR }),
  notifyNextStep: () => ({ type: ON_NEXT_STEP }),
  notifyStartLife: () => ({ type: ON_START }),
  notifyRandomnCreation: ({ value }) => ({ type: SET_RANDOMN_CELLS, value }),
  stopLife: () => ({ type: ON_STOP }),
  updateLivingCell: ({ isLiving, cell }) => ({
    type: UPDATE_LIVING_CELL,
    isLiving,
    cell,
  }),
};

export const settingsActions = {
  reset: () => ({ type: RESET }),
  setDelay: ({ value }) => ({ type: SET_DELAY, value }),
  setHeight: ({ value }) => ({ type: SET_HEIGHT, value }),
  setMode: ({ value }) => ({ type: SET_MODE, value }),
  setWidth: ({ value }) => ({ type: SET_WIDTH, value }),
};
