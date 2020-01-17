import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import SettingsButton from 'modules/GoLStation/components/SettingsButton';
import ResetContainer from './index';

const resetFn = jest.fn();

const opt = {
  isRunning: false,
  reset: resetFn,
};
const context = { store };
const wrapper = shallow(<ResetContainer {...opt} />, { context }).dive({
  context,
});

describe('rendu', () => {
  it('Le ResetContainer doit être défini', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(1);
    expect(wrapper.find(SettingsButton)).toHaveLength(1);
  });

  it('Le submit button doit être disabled', () => {
    const buttons = wrapper.find(SettingsButton);
    expect(buttons.props().disabled).toEqual(false);
  });

  it('Le submit button doit être cliquable', () => {
    wrapper.setProps({ isRunning: true });
    const buttons = wrapper.find(SettingsButton);
    expect(buttons.props().disabled).toEqual(true);
  });
});
