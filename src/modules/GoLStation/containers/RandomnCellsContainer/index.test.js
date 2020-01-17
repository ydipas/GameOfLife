import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import SettingsButton from 'modules/GoLStation/components/SettingsButton';
import { Inputs } from 'modules/GoLStation/components/SettingsInput/Factory';
import RandomnCellsContainer from './index';

const createFn = jest.fn();

const { NumberOfCells } = Inputs;

const opt = {
  isRunning: false,
  numberOfCells: 0,
  setRandomn: createFn,
};
const context = { store };
const wrapper = shallow(<RandomnCellsContainer {...opt} />, { context }).dive({
  context,
});

describe('rendu', () => {
  it('Le RandomnCellsContainer doit être défini et les éléments disabled', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.find(SettingsButton)).toHaveLength(1);
    expect(wrapper.find(SettingsButton).props().disabled).toEqual(true);
    expect(wrapper.find(NumberOfCells)).toHaveLength(1);
    expect(wrapper.find(NumberOfCells).props().disabled).toEqual(true);
  });

  it('Le RandomnCellsContainer doit être défini et les éléments disabled si runnnig', () => {
    wrapper.setProps({
      isRunning: true,
      numberOfCells: 10,
    });
    expect(wrapper.find(SettingsButton).props().disabled).toEqual(true);
    expect(wrapper.find(NumberOfCells).props().disabled).toEqual(true);
  });

  it('Le RandomnCellsContainer doit être défini et le bouton disabled', () => {
    wrapper.setProps({
      isRunning: false,
      numberOfCells: 10,
    });
    wrapper.setState({ numberOfCells: 0 });
    expect(wrapper.find(SettingsButton).props().disabled).toEqual(true);
    expect(wrapper.find(NumberOfCells).props().disabled).toEqual(false);
    expect(wrapper.find(NumberOfCells).props().value).toEqual('0');
  });

  it('Le RandomnCellsContainer doit être défini et le bouton disabled si trop de cells', () => {
    wrapper.setProps({
      isRunning: false,
      numberOfCells: 10,
    });
    wrapper.setState({ numberOfLivingCells: 100 });
    expect(wrapper.find(SettingsButton).props().disabled).toEqual(true);
    expect(wrapper.find(NumberOfCells).props().disabled).toEqual(false);
    expect(wrapper.find(NumberOfCells).props().value).toEqual('100');
  });

  it('Le RandomnCellsContainer doit être défini et le bouton actif', () => {
    wrapper.setProps({
      isRunning: false,
      numberOfCells: 10,
    });
    wrapper.setState({ numberOfLivingCells: 9 });
    expect(wrapper.find(SettingsButton).props().disabled).toEqual(false);
    expect(wrapper.find(NumberOfCells).props().disabled).toEqual(false);
    expect(wrapper.find(NumberOfCells).props().value).toEqual('9');
  });
});
