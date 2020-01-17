import React from 'react';
import { shallow } from 'enzyme';

import Flexbox from 'components/FlexBox';

import SettingsWrapper from './index';

const childContent = <span>test</span>;
const wrapper = shallow(
  <SettingsWrapper title="test">{childContent}</SettingsWrapper>
);

describe('test rendu', () => {
  it('Le SettingsWrapper doit être rendue avec ses children', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.find(Flexbox)).toHaveLength(3);
    expect(wrapper.containsMatchingElement(childContent)).toBeTruthy();
  });
});
