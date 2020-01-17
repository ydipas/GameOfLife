import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import Grid from 'components/Grid';

import CellWorldContainer from './index';

const updateFn = jest.fn();
const opt = {
  isRunning: false,
  width: 0,
  height: 0,
  livingCellsList: [],
  updateCell: updateFn,
};

const context = { store };
const wrapper = shallow(<CellWorldContainer {...opt} />, { context }).dive({
  context,
});

describe('rendu', () => {
  it("Le CommandsContainer doit être défini et aucune grille  n'est affichée", () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(0);
    expect(wrapper.find(Grid)).toHaveLength(0);
  });

  it("Juste la largueur est définie : aucune grille  n'est affichée", () => {
    wrapper.setProps({
      width: 10,
      height: 0,
    });
    expect(wrapper.find(Grid)).toHaveLength(0);
  });

  it("Juste la hauteur est définie : aucune grille  n'est affichée", () => {
    wrapper.setProps({
      width: 0,
      height: 10,
    });
    expect(wrapper.find(Grid)).toHaveLength(0);
  });

  it('hauteur et lageur définies : la grille est affichée', () => {
    wrapper.setProps({
      width: 10,
      height: 10,
    });
    expect(wrapper.find(Grid)).toHaveLength(1);
  });
});
