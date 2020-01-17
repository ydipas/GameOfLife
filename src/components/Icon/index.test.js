import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import Icon from './index';

const opt = {
  icon: 'test',
  disabled: false,
  size: 24,
  fill: false,
};

const wrapper = shallow(<Icon {...opt} store={store} />);

describe('Rendu', () => {
  it("L'icon doit être definie", () => {
    expect(wrapper).toBeDefined();
  });

  it("L'icon doit avoir un attribut fill", () => {
    const { fill } = wrapper.props();
    expect(fill).toEqual(expect.any(String));
  });

  it("L'icon doit avoir un attribut width et height", () => {
    const { width, height } = wrapper.props();
    expect(width).toEqual(expect.any(Number));
    expect(height).toEqual(expect.any(Number));
  });
  it("L'icon doit avoir un attribut backgroundColor", () => {
    const { backgroundColor } = wrapper.props();
    expect(backgroundColor).toEqual(expect.any(String));
  });
});
