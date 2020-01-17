import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import { SubmitButton } from 'components/Button';
import { Inputs } from 'modules/GolStation/components/SettingsInput/Factory';
import GameSettingsContainer from './index';

import { LIFE_MODES } from 'utils/constants/gameOfLife';

const { Height, Width, Delay, Mode } = Inputs;
const opt = {
  isRunning: false,
  width: 0,
  height: 0,
  mode: LIFE_MODES.MANUAL_MODE,
  delay: 0,
};
const context = { store };
const wrapper = shallow(<GameSettingsContainer {...opt} />, { context }).dive({
  context,
});

describe('rendu', () => {
  it('Le GameSettingsContainer doit être défini et les éléments actifs', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(4);
    expect(wrapper.find(Height)).toHaveLength(1);
    expect(wrapper.find(Height).props().disabled).toEqual(false);
    expect(wrapper.find(Width)).toHaveLength(1);
    expect(wrapper.find(Width).props().disabled).toEqual(false);
    expect(wrapper.find(Delay)).toHaveLength(1);
    expect(wrapper.find(Delay).props().disabled).toEqual(true);
    expect(wrapper.find(Mode)).toHaveLength(1);
    expect(wrapper.find(Mode).props().disabled).toEqual(false);
  });

  it('Le GameSettingsContainer doit être défini et les éléments disabled si running', () => {
    wrapper.setProps({
      isRunning: true,
    });
    expect(wrapper.find(Height).props().disabled).toEqual(true);
    expect(wrapper.find(Width).props().disabled).toEqual(true);
    expect(wrapper.find(Delay).props().disabled).toEqual(true);
    expect(wrapper.find(Mode).props().disabled).toEqual(true);
  });

  it('Le GameSettingsContainer doit être défini et les éléments disabled si running', () => {
    wrapper.setProps({
      isRunning: false,
      mode: LIFE_MODES.AUTO_MODE,
    });
    expect(wrapper.find(Delay).props().disabled).toEqual(false);
  });
});
