import React from 'react';
import { shallow } from 'enzyme';

import HeaderContainter from './index';

const wrapper = shallow(<HeaderContainter />);

describe('rendu', () => {
  it('Le HeaderContainter doit être défini', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(3);
  });
});
