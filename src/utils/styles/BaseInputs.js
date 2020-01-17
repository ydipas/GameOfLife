import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const {
  BACKGROUND_COLOR,
  BOX_SHADOW,
  COLOR,
  BORDER,
  FONT,
  PADDING,
  MARGIN,
  WIDTH,
  OUTLINE_COLOR,
} = LAYOUT.INPUTS;

/**
 *
 * Input
 * @component
 *
 */
export const BaseInput = styled.input`
  background-color: ${BACKGROUND_COLOR};
  border-radius: ${BORDER.RADIUS};
  border-style: ${BORDER.STYLE};
  border-color: ${COLOR};
  border-width: ${BORDER.WIDTH.TEXT};
  box-shadow: ${BOX_SHADOW.NONE};
  color: ${COLOR};
  font-family: ${FONT.FAMILY};
  font-weight: ${FONT.WEIGHT};
  font-size: ${FONT.SIZE};
  margin: ${MARGIN.TEXT};
  padding: ${({ padding }) => padding || PADDING};
  text-align: left;
  text-overflow: ellipsis;
  overflow: hidden;
  width: ${({ width }) => width || WIDTH.TEXT};
  &:focus {
    box-shadow: ${BOX_SHADOW.FOCUS};
    outline-color: ${OUTLINE_COLOR};
  }
  &:disabled {
    background-color: transparent;
    border: none;
    box-shadow: ${BOX_SHADOW.DISABLED};
    color: ${COLOR};
  }
`;
