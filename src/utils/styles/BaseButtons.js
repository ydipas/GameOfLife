import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};
const { BUTTONS } = LAYOUT;
const { ICON, SUBMIT } = BUTTONS;

/**
 * Button
 * @component
 */
export const BaseButton = styled.button`
  /** surcharge de styles imposés par firefox: */
  &:focus,
  &:active {
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
  /** Modifications: */
  cursor: pointer;
  font-family: ${BUTTONS.FONT_FAMILY};
  text-decoration: ${BUTTONS.TEXT_DECORATION};
  &:disabled {
    cursor: text;
  }
  &:hover {
    opacity: ${BUTTONS.LIGHT_OPACITY};
  }
  &:active {
    opacity: ${BUTTONS.LIGHTER_OPACITY};
  }
`;

/**
 * BaseButtonAction
 * @component
 * @desc herite de BaseButton
 */
export const BaseButtonIcon = styled(BaseButton)`
  background-color: transparent;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ backgroungImage }) => `url(${backgroungImage})`};
  margin: ${({ margin }) => margin || ICON.NONE};
  width: ${({ size }) => size || ICON.SIZE};
  height: ${({ size }) => size || ICON.SIZE};
  padding: 0;
  border: solid;
  border-width: 1px;
  border-radius: 0;
  border-color: ${SUBMIT.COLORS.ICON};
  &:disabled {
    cursor: not-allowed;
  }
`;

/**
 * BaseButtonSubmit
 * @component
 * @esc herite de BaseButton
 */
export const BaseButtonSubmit = styled(BaseButton)`
  background-color: transparent;
  color: ${SUBMIT.COLORS.DEFAULT};
  border-color: ${SUBMIT.COLORS.DEFAULT};
  border-radius: ${SUBMIT.BORDER.RADIUS};
  border-style: ${SUBMIT.BORDER.STYLE};
  border-width: ${SUBMIT.BORDER.WIDTH};
  display: grid;
  grid-template-columns: 1fr auto;
  font-size: ${SUBMIT.FONT.SIZE};
  font-weight: ${SUBMIT.FONT.WEIGHT};
  padding: ${SUBMIT.PADDING};
  margin: ${({ margin }) => margin || SUBMIT.MARGIN};
  width: ${({ width }) => width || SUBMIT.SIZE.WIDTH};
  height: ${({ height }) => height || SUBMIT.SIZE.HEIGHT};
  & > svg {
    float: ${SUBMIT.SVG.FLOAT};
    height: ${SUBMIT.SVG.HEIGHT};
    -moz-margin-end: -2px;
  }
  & > span {
    line-height: ${SUBMIT.SPAN.LINE_HEIGHT};
    padding: ${SUBMIT.SPAN.PADDING};
  }
  &:hover {
    background-color: ${SUBMIT.COLORS.HOVER};
  }
  &:disabled {
    background-color: transparent;
    border-color: ${SUBMIT.COLORS.DARK};
    color: ${SUBMIT.COLORS.DARK};
  }
`;
