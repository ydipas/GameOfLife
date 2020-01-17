import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const {
  BACKGROUND_COLOR,
  BORDER,
  COLOR,
  FONT,
  MARGIN,
  PADDING,
  WIDTH,
} = LAYOUT.INPUTS;

/**
 * Select
 * @component
 */
export const BaseSelect = styled.select`
  background-color: ${BACKGROUND_COLOR};
  border-color: ${COLOR};
  border-radius: ${BORDER.RADIUS};
  border-style: ${BORDER.STYLE};
  border-width: ${BORDER.WIDTH.SELECT};
  box-shadow: none;
  color: ${COLOR};
  cursor: pointer;
  font-family: ${FONT.FAMILY};
  font-size: ${FONT.SIZE};
  letter-spacing: ${FONT.SPACING};
  margin: ${MARGIN.SELECT};
  padding: ${PADDING};
  text-align: left;
  /* +0.7em pour la fleche à droite */
  width: ${({ width }) => width || WIDTH.SELECT};
  &:disabled {
    background-color: transparent;
    border-width: 0;
    cursor: initial;
    text-align: left;
    -moz-appearance: none;
  }
`;
