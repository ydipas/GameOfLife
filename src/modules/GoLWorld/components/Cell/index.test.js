import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import { IconButon } from 'components/Button';
import Icon from 'components/Icon';

import Cell from './index';

const updateFn = jest.fn();
const opt = {
  isUpdatable: false,
  x: 0,
  y: 0,
  cellStatus: 'DEAD',
  updateCellStatus: updateFn,
};
const opt2 = {
  ...opt,
  isUpdatable: true,
};

const context = { store };
const wrapper = shallow(<Cell {...opt} />, { context }).dive({ context });

describe('rendu', () => {
  it('Le Cell doit être défini', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(0);
  });

  it('Le Cell ne doit pas être clickable', () => {
    const disabled = wrapper.props();
    expect(wrapper.props().disabled).toEqual(true);
  });
});

const wrapper2 = shallow(<Cell {...opt2} />, { context }).dive({ context });
describe('rendu', () => {
  it('Le Cell doit être clickable', () => {
    expect(wrapper2.props().disabled).toEqual(false);
  });
});
