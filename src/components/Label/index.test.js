import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import DefaultLabel from './index';

const wrapper = shallow(<DefaultLabel store={store}>lulu</DefaultLabel>);

describe('rendu', () => {
  it('le Label doit être défini', () => {
    expect(wrapper).toBeDefined();
  });
  it('le Label doit avoir un children', () => {
    const { children } = wrapper.props();
    expect(children).toEqual(expect.any(String));
    expect(children).toEqual('lulu');
  });
});
