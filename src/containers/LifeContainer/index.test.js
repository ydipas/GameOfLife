import React from 'react';
import { shallow } from 'enzyme';

import CellWorldContainer from 'modules/GoLWorld/containers/CellWorldContainer';
import CommandsContainer from 'modules/GoLWorld/containers/CommandsContainer';

import LifeContainer from './index';

const wrapper = shallow(<LifeContainer />);

describe('rendu', () => {
  it('Le LifeContainer doit être défini', () => {
    expect(wrapper).toBeDefined();
  });

  it('Le LifeContainer doit avoir CellWorldContainer défini', () => {
    expect(wrapper.find(CellWorldContainer)).toHaveLength(1);
  });
});
