import React from 'react';
import { shallow } from 'enzyme';

import App from 'App';

describe('app', () => {
  const wrapper = shallow(<App />);

  it('renders without crashing', () => {
    expect(wrapper).toBeDefined();
  });
});
