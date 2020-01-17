import React from 'react';
import { shallow } from 'enzyme';

import { store } from 'setupTests';

import Title from './index';

const wrapper = shallow(
  <Title store={store} messages={['salut', 'jean-luc']} />
);

describe('rendu', () => {
  it('Le Title doit être défini', () => {
    expect(wrapper).toBeDefined();
  });
  it('Le Title doit avoir une propriété de taille défini', () => {
    const { medium } = wrapper.props();
    expect(medium).toBeDefined();
    expect(medium).toEqual(expect.any(Boolean));
  });
});
