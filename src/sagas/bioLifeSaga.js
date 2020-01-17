// import { eventChannel, END } from 'redux-saga'; if not ok https://redux-saga.js.org/docs/advanced/Channels.html
import { delay } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';

import {
  getLivingCells,
  getBioLifeDimensions,
  isBioLifeRunning,
  isAutomaticMode,
  getDelayTime,
} from 'selectors';
import { ACTIONS_TYPES } from 'utils/constants/gameOfLife';
import {
  defineNextLivingCells,
  fillRandomnLivingCells,
  AreTabsEqual,
} from 'utils/functions/gameOfLife';

const { LIFE } = ACTIONS_TYPES;
const {
  ON_CLEAR,
  ON_NEXT_STEP,
  ON_START,
  ON_STOP,
  SET_LIVING_CELLS,
  SET_ISRUNNING,
  SET_RANDOMN_CELLS,
} = LIFE;

/**
 * onStepWorker
 * @desc fonction appelée lors d'une nouvelle étape de la simulation afin de définir les futures cellules vivantes
 */
function* onStepWorker() {
  const { width, height } = yield select(getBioLifeDimensions);
  const livingCells = yield select(getLivingCells);
  const nextLivingCells = defineNextLivingCells(livingCells, width, height);

  yield put({
    type: SET_LIVING_CELLS,
    list: nextLivingCells,
  });

  if (
    AreTabsEqual(livingCells, nextLivingCells) ||
    nextLivingCells.length === 0
  )
    yield put({ type: ON_STOP });
}

/**
 * automaticStepWorker
 * @desc fonction appelée périodiquement lorsque la simulation est en mode automatique
 */
function* automaticStepWorker() {
  const delayforSteps = yield select(getDelayTime);

  while (yield select(isBioLifeRunning)) {
    yield delay(delayforSteps);
    yield call(onStepWorker);
  }
}

/**
 * onStartWorker
 * @desc fonction appelée lors du démarrage de la simulation
 */
function* onStartWorker() {
  const isAutoMode = yield select(isAutomaticMode);
  yield put({ type: SET_ISRUNNING });
  yield call(onStepWorker);
  if (isAutoMode) yield call(automaticStepWorker);
}

/**
 * onRandomWorker
 * @desc fonction appelée après un clic sur le bouton pour demande de génération aléatoire de cellules vivants
 * @param {*Object} action
 */
function* onRandomWorker(action) {
  const isRunning = yield select(isBioLifeRunning);

  if (!isRunning) {
    const { width, height } = yield select(getBioLifeDimensions);

    yield put({ type: ON_CLEAR });
    yield put({
      type: SET_LIVING_CELLS,
      list: fillRandomnLivingCells(action.value, width, height),
    });
  }
}

export default function* workerBioLifeSaga() {
  yield takeEvery(ON_START, onStartWorker);
  yield takeEvery(ON_NEXT_STEP, onStepWorker);
  yield takeEvery(SET_RANDOMN_CELLS, onRandomWorker);
}
