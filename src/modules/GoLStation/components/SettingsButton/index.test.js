import React from 'react';
import { shallow } from 'enzyme';
import { store } from 'setupTests';

import { SubmitButton } from 'components/Button';
import Icon from 'components/Icon';
import { ICONS_TITLES, LABELS } from 'utils/constants/render';

import SettingsButton from './index';

const handleOnClickFn = jest.fn();

const opt = {
  prefixId: 'test',
  onClick: handleOnClickFn,
  icon: ICONS_TITLES.CELL,
  label: LABELS.BUTTONS.CREATE,
  disabled: false,
};
const opt2 = {
  prefixId: 'test',
  onClick: handleOnClickFn,
  icon: ICONS_TITLES.CELL,
  label: LABELS.BUTTONS.CREATE,
  disabled: true,
};
const context = { store };
const wrapper = shallow(<SettingsButton {...opt} />, { context }).dive({
  context,
});

describe('rendu', () => {
  it('Le SettingsButton doit être défini et les éléments actifs', () => {
    expect(wrapper).toBeDefined();
    expect(wrapper.children()).toHaveLength(2);
    expect(wrapper.props().disabled).toEqual(false);
    expect(wrapper.find(Icon)).toHaveLength(1);
    expect(wrapper.find(Icon).props().disabled).toEqual(false);
  });
});
const wrapper2 = shallow(<SettingsButton {...opt2} />, { context }).dive({
  context,
});
describe('disabling', () => {
  it('Les éléments doivent être inactifs', () => {
    expect(wrapper2.props().disabled).toEqual(true);
    expect(wrapper2.find(Icon).props().disabled).toEqual(true);
  });
});
