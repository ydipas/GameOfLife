import { LIFE_MODES } from 'utils/constants/gameOfLife';

export const isBioLifeRunning = ({ lifeReducer }) => lifeReducer.isRunning;
export const getLivingCells = ({ lifeReducer }) => lifeReducer.livingCellsList;

export const getBioLifeDimensions = ({ settingsReducer }) => ({
  width: settingsReducer.width,
  height: settingsReducer.height,
});

export const isAutomaticMode = ({ settingsReducer }) =>
  settingsReducer.mode === LIFE_MODES.AUTO_MODE;
export const getDelayTime = ({ settingsReducer }) => settingsReducer.delay;

export const getState = (state) => state;

export default getState;
