import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import Select from './index';

const opt = {
  options: ['TEST1', 'TEST2', 'TEST3'],
  value: 'TEST1',
};

const wrapper = shallow(<Select {...opt} store={store} />);

describe('Rendu', () => {
  it('Le select doit être defini', () => {
    expect(wrapper).toBeDefined();
  });
  it('Le select doit avoir des options', () => {
    const options = wrapper.children();
    expect(options).toBeDefined();
    expect(options).toHaveLength(4);
  });
});
