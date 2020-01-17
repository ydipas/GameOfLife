import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import IconButton from './IconButton';
import SubmitButton from './SubmitButton';

const submitFn = jest.fn();
const iconFn = jest.fn();

const wrapperSubmit = shallow(
  <SubmitButton onClick={submitFn} store={store} />
);

describe('rendu', () => {
  it('Le bouton doit être défini', () => {
    expect(wrapperSubmit).toBeDefined();
  });
});

describe('fonctions', () => {
  it('Le bouton submit doit avoir un callback onclick', () => {
    wrapperSubmit.simulate('click');
    expect(submitFn).toHaveBeenCalled();
  });
});

const wrapperIcon = shallow(
  <IconButton onClick={iconFn} backgroungImage="test" store={store} />
);

describe('rendu', () => {
  it('Le bouton doit être défini', () => {
    expect(wrapperIcon).toBeDefined();
  });

  it('Le bouton doit avoir un attribut disabled', () => {
    const { disabled } = wrapperIcon.props();
    expect(disabled).toEqual(expect.any(Boolean));
  });
  it('Le bouton doit avoir un attribut backgroungImage', () => {
    const { backgroungImage } = wrapperIcon.props();
    expect(backgroungImage).toEqual(expect.any(String));
  });
});

describe('fonctions', () => {
  it('Le bouton doit avoir un callback onclick', () => {
    wrapperIcon.simulate('click');
    expect(iconFn).toHaveBeenCalled();
  });
});
