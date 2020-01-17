import React from 'react';

import FlexBox from 'components/FlexBox';

import GameSettingsContainer from 'modules/GoLStation/containers/GameSettingsContainer';
import RandomnCellsContainer from 'modules/GoLStation/containers/RandomnCellsContainer';
import ResetContainer from 'modules/GoLStation/containers/ResetContainer';
import CommandsContainer from 'modules/GoLWorld/containers/CommandsContainer';

import { LAYOUT } from 'utils/constants/render';

const { ALIGN_ITEMS, JUSTIFY_CONTENT, ALIGN_CONTENT } = LAYOUT.FLEXBOX;

/**
 * @container root pour les paramètres et commandes
 */
const SettingsContainer = () => (
  <FlexBox
    secondary
    justifyContent={JUSTIFY_CONTENT.SPACE_AROUND}
    alignItems={ALIGN_ITEMS.FLEX_END}
    alignContent={ALIGN_CONTENT.SPACE_AROUND}
  >
    <GameSettingsContainer />
    <RandomnCellsContainer />
    <ResetContainer />
    <CommandsContainer />
  </FlexBox>
);

export default SettingsContainer;
