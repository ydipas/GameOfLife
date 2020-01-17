import React from 'react';
import { shallow } from 'enzyme';

import Input from 'components/Input';
import Select from 'components/Select';
import Label from 'components/Label';

import { LABELS } from 'utils/constants/render';

import InputFactory from './index';

const handleInputChange = jest.fn();

const { HEIGHT, MODE } = LABELS.INPUTS;

const defaultOpt = {
  handleInputChange,
  value: '2',
  name: HEIGHT,
};

describe('Rendu', () => {
  const wrapper = shallow(<InputFactory {...defaultOpt} />);
  it('Le InputFactory doit être rendu', () => {
    expect(wrapper).toBeDefined();
  });
  it('Le InputFactory doit avoir un input et un label', () => {
    const label = wrapper.find(Label);
    expect(label.children()).toHaveLength(2);
    const input = wrapper.find(Input);
    expect(input).toBeDefined();
  });
  it('Le InputFactory doit avoir un select et un label', () => {
    wrapper.setProps({
      name: MODE,
    });
    const label = wrapper.find(Label);
    expect(label.children()).toHaveLength(2);
    const select = wrapper.find(Select);
    expect(select).toBeDefined();
  });
});
