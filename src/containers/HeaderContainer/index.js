import React from 'react';

import { BaseHeader } from 'utils/styles';
import Icon from 'components/Icon';
import Title from 'components/Title';

import { LABELS, ICONS_TITLES } from 'utils/constants/render';

/**
 * @container root pour le Header
 */
const HeaderContainer = () => (
  <BaseHeader id="baseHeader">
    <Icon size="48" icon={ICONS_TITLES.CELL} id="cell1" />
    <Title bold>{LABELS.HEADER_TITLE}</Title>
    <Icon size="48" icon={ICONS_TITLES.CELL} id="cell2" />
  </BaseHeader>
);

export default HeaderContainer;
