import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import SettingsButton from 'modules/GoLStation/components/SettingsButton';
import CommandsContainer from './index';

const clearFn = jest.fn();
const nextFn = jest.fn();
const startFn = jest.fn();
const stopFn = jest.fn();

const opt = {
  isRunning: false,
  isAutoMode: false,
  hasLivingCells: false,
  hasWorldSet: false,
  clearLife: clearFn,
  notifyNextStep: nextFn,
  notifyStartLife: startFn,
  stopLife: stopFn,
};
const context = { store };
const wrapper = shallow(<CommandsContainer {...opt} />, { context }).dive({
  context,
});

describe('rendu', () => {
  it('Le CommandsContainer doit être défini et les 3 boutons doivent être disabled', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(3);
    expect(wrapper.find(SettingsButton)).toHaveLength(3);
    expect(
      wrapper
        .find(SettingsButton)
        .everyWhere((elt) => elt.props().disabled === true)
    ).toEqual(true);
  });

  it('Les boutons start et clear doivent être cliquables si monde et cells définis', () => {
    wrapper.setProps({
      isRunning: false,
      isAutoMode: false,
      hasLivingCells: true,
      hasWorldSet: true,
    });
    const buttons = wrapper.find(SettingsButton);
    const start = buttons.findWhere((ele) => ele.props().prefixId === 'start');
    const clear = buttons.findWhere((ele) => ele.props().prefixId === 'clear');
    const next = buttons.findWhere((ele) => ele.props().prefixId === 'next');
    expect(start.props().disabled).toEqual(false);
    expect(clear.props().disabled).toEqual(false);
    expect(next.props().disabled).toEqual(true);
  });

  it('Les boutons start et next doivent être cliquables si running en manuel', () => {
    wrapper.setProps({
      isRunning: true,
      isAutoMode: false,
      hasLivingCells: true,
      hasWorldSet: true,
    });
    const buttons = wrapper.find(SettingsButton);
    const start = buttons.findWhere((ele) => ele.props().prefixId === 'start');
    const clear = buttons.findWhere((ele) => ele.props().prefixId === 'clear');
    const next = buttons.findWhere((ele) => ele.props().prefixId === 'next');
    expect(start.props().disabled).toEqual(false);
    expect(next.props().disabled).toEqual(false);
    expect(clear.props().disabled).toEqual(true);
  });

  it('Le bouton start doit être cliquable si running en auto', () => {
    wrapper.setProps({
      isRunning: true,
      isAutoMode: true,
      hasLivingCells: true,
      hasWorldSet: true,
    });
    const buttons = wrapper.find(SettingsButton);
    const start = buttons.findWhere((ele) => ele.props().prefixId === 'start');
    const clear = buttons.findWhere((ele) => ele.props().prefixId === 'clear');
    const next = buttons.findWhere((ele) => ele.props().prefixId === 'next');
    expect(start.props().disabled).toEqual(false);
    expect(clear.props().disabled).toEqual(true);
    expect(next.props().disabled).toEqual(true);
  });
});
