import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import DefaultGrid from './index';

const wrapper = shallow(<DefaultGrid store={store} />);

describe('rendering', () => {
  it('La grid doit être définie', () => {
    expect(wrapper).toBeDefined();
  });
  it('La grid doit avoir une propriété templateColumns ', () => {
    expect(wrapper.props().templateColumns).toBeDefined();
  });
  it('La grid doit avoir une propriété templateRows ', () => {
    expect(wrapper.props().templateRows).toBeDefined();
  });
});
