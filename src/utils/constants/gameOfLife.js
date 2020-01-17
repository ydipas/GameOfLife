/**
 * ACTIONS_TYPES
 * A utiliser avec redux exclusivement
 * @return Object of any
 */
export const ACTIONS_TYPES = {
  SETTINGS: {
    RESET: 'reset',
    SET_DELAY: 'setDelay',
    SET_HEIGHT: 'setHeight',
    SET_MODE: 'setMode',
    SET_WIDTH: 'setWidth',
  },
  LIFE: {
    ON_CLEAR: 'onClear',
    ON_NEXT_STEP: 'onNextStep',
    ON_START: 'onStart',
    SET_ISRUNNING: 'setIsRunning',
    ON_STOP: 'onStop',
    UPDATE_LIVING_CELL: 'updateLivingCell',
    SET_RANDOMN_CELLS: 'setRandomnCells',
    SET_LIVING_CELLS: 'setLivingCells',
  },
};

/**
 * statut de la cellule
 * @return Object of any
 */
export const CELL_STATUS = {
  LIVING: 'living',
  DEAD: 'dead',
};

/**
 * Modes de simulation
 * @return Object of any
 */
export const LIFE_MODES = {
  AUTO_MODE: 'Auto',
  MANUAL_MODE: 'Manual',
};

export const GAME_INPUTS = {
  ...ACTIONS_TYPES,
  ...CELL_STATUS,
  ...LIFE_MODES,
};

export default GAME_INPUTS;
