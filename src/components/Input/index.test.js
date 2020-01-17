import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import Input from './index';

const changeFn = jest.fn();
const blurFn = jest.fn();
const wrapper = shallow(
  <Input
    value=""
    store={store}
    onChange={(e) => changeFn(e)}
    onBlur={(e) => blurFn(e)}
  />
);

describe('rendu', () => {
  it("l'input doit être défini", () => {
    expect(wrapper).toBeDefined();
  });
  it("l'input doit avoir un booleen disabled", () => {
    const { disabled } = wrapper.props();
    expect(disabled).toEqual(expect.any(Boolean));
    expect(disabled).toEqual(false);
  });
  it("l'input doit pouvoir enclencher une action au change", () => {
    wrapper.simulate('change', { target: { type: 'change', value: '50' } });
    expect(changeFn).toBeCalled();
  });
  it("l'input doit pouvoir enclencher une action au blur", () => {
    wrapper.simulate('blur', { target: { type: 'blur', value: '50' } });
    expect(blurFn).toBeCalled();
  });
  it("l'input doit avoir une valeur", () => {
    const { value } = wrapper.props();
    expect(value).toEqual(expect.any(String));
  });
});
