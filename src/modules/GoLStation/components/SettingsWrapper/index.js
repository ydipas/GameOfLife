import React from 'react';
import PropTypes from 'prop-types';

import Title from 'components/Title';
import FlexBox from 'components/FlexBox';
import { LAYOUT } from 'utils/constants/render';

const { JUSTIFY_CONTENT, PADDING, WIDTH_OVERALL } = LAYOUT.FLEXBOX;
const { CENTER, FLEX_START, SPACE_EVENLY } = JUSTIFY_CONTENT;

/**
 *
 * @Component SettingsWrapper
 * Permet d'encapsuler dans une Flexbox adaptée les types de paramètres / commandes
 *
 */
const SettingsWrapper = (props) => (
  <FlexBox
    tertiary
    padding={PADDING.OVERALL}
    width={WIDTH_OVERALL}
    justifyContent={CENTER}
  >
    <FlexBox justifyContent={FLEX_START} width="100%">
      <Title small bold>
        {props.title}
      </Title>
    </FlexBox>
    <FlexBox
      withBorder
      toColumn
      justifyContent={SPACE_EVENLY}
      padding={PADDING.BUTTONS}
    >
      {props.children}
    </FlexBox>
  </FlexBox>
);

SettingsWrapper.defaultProps = {
  children: undefined,
};

SettingsWrapper.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default SettingsWrapper;
