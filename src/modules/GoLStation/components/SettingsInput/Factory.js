import React from 'react';

import { LABELS } from 'utils/constants/render';

import InputFactory from './index';

const { HEIGHT, DELAY, RANDOMN_CELL_NUMBER, MODE, WIDTH } = LABELS.INPUTS;

/**
 *  Récupère l'input
 *  @return Object of ReactElement
 */
export const Inputs = {
  Height: (props) => <InputFactory name={HEIGHT} {...props} />,
  Width: (props) => <InputFactory name={WIDTH} {...props} />,
  Delay: (props) => <InputFactory name={DELAY} {...props} />,
  NumberOfCells: (props) => (
    <InputFactory name={RANDOMN_CELL_NUMBER} {...props} />
  ),
  Mode: (props) => <InputFactory name={MODE} {...props} />,
};

export default Inputs;
