import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {
  BASE_SIZE: '0.082em',
  MARGIN: '0',
  PADDING: '0',
  VERTICAL_ALIGN: 'middle',
};

const { BORDER_RADIUS, MARGIN, PADDING, VERTICAL_ALIGN } = LAYOUT.ICON;

/**
 * Icones
 * @component
 */
export const BaseIco = styled.svg`
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin: ${MARGIN};
  vertical-align: ${VERTICAL_ALIGN};
  animation: none;
  padding: ${PADDING};
  position: static;
  &:hover {
    border-radius: ${BORDER_RADIUS.HOVER};
  }
  border-bottom-right-radius: ${BORDER_RADIUS.BOTTOM_RIGHT};
  border-top-right-radius: ${BORDER_RADIUS.TOP_RIGHT};
`;
