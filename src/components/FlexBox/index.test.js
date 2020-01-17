import React from 'react';
import { shallow } from 'enzyme';
import { REGEXP_LENGTH, LAYOUT } from 'utils/constants/render';
import { store } from 'setupTests';

import FlexBox from './index';

const { ALIGN_CONTENT, ALIGN_ITEMS, JUSTIFY_CONTENT } = LAYOUT.FLEXBOX;
const opt = {
  alignContent: ALIGN_CONTENT.STRETCH,
  alignItems: ALIGN_ITEMS.STRETCH,
  justifyContent: JUSTIFY_CONTENT.FLEX_START,
  toColumn: true,
  width: '100%',
  withBorder: true,
};

const wrapper = shallow(<FlexBox {...opt} store={store} />);

describe('rendu', () => {
  it('La box doit être définie', () => {
    expect(wrapper).toBeDefined();
  });
  it('La box doit avoir une largeur (width) définie', () => {
    const { width } = wrapper.props();
    expect(width).toBeDefined();
    expect(width).toMatch(REGEXP_LENGTH);
  });
  it('La box doit avoir une props justifyContent', () => {
    const { justifyContent } = wrapper.props();
    expect(justifyContent).toBeDefined();
    expect(Object.values(JUSTIFY_CONTENT)).toEqual(
      expect.arrayContaining([justifyContent])
    );
  });
  it('La box doit avoir une props alignItems', () => {
    const { alignItems } = wrapper.props();
    expect(alignItems).toBeDefined();
    expect(Object.values(ALIGN_ITEMS)).toEqual(
      expect.arrayContaining([alignItems])
    );
  });
  it('La box doit avoir une props alignContent', () => {
    const { alignContent } = wrapper.props();
    expect(alignContent).toBeDefined();
    expect(Object.values(ALIGN_CONTENT)).toEqual(
      expect.arrayContaining([alignContent])
    );
  });
  it('La box doit avoir une props toColumn', () => {
    const { toColumn } = wrapper.props();
    expect(toColumn).toBeDefined();
    expect(toColumn).toEqual(expect.any(Boolean));
  });
  it('La box doit avoir une props hasBorder', () => {
    const { hasBorder } = wrapper.props();
    expect(hasBorder).toBeDefined();
    expect(hasBorder).toEqual(expect.any(Boolean));
  });
});
