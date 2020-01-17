import React from 'react';
import { shallow } from 'enzyme';

import GameSettingsContainer from 'modules/GoLStation/containers/GameSettingsContainer';
import RandomnCellsContainer from 'modules/GoLStation/containers/RandomnCellsContainer';
import ResetContainer from 'modules/GoLStation/containers/ResetContainer';
import CommandsContainer from 'modules/GoLWorld/containers/CommandsContainer';

import SettingsContainer from './index';

const wrapper = shallow(<SettingsContainer />);

describe('rendu', () => {
  it('Le SettingsContainer doit être défini', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(4);
  });
  it('Le SettingsContainer doit avoir RandomnCellsContainer défini', () => {
    expect(wrapper.find(RandomnCellsContainer)).toHaveLength(1);
  });
  it('Le SettingsContainer doit avoir GameSettingsContainer défini', () => {
    expect(wrapper.find(GameSettingsContainer)).toHaveLength(1);
  });
  it('Le SettingsContainer doit avoir ResetContainer défini', () => {
    expect(wrapper.find(ResetContainer)).toHaveLength(1);
  });

  it('Le SettingsContainer doit avoir CommandsContainer défini', () => {
    expect(wrapper.find(CommandsContainer)).toHaveLength(1);
  });
});
