import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const {
  COLOR,
  FONT,
  MARGIN,
  PADDING,
  VERTICAL_ALIGN,
  TEXT_SHADOW,
} = LAYOUT.TITLE;

/**
 * TitleH1
 * @component
 */
export const BaseTitleH1 = styled.h1`
  color: ${COLOR.DEFAULT};
  display: inline-block;
  font-family: ${FONT.FAMILY};
  font-size: ${FONT.SIZE.BIG};
  font-weight: ${FONT.WEIGHT.DEFAULT};
  margin: ${MARGIN.NONE};
  padding: ${PADDING.DEFAULT};
  text-shadow: ${TEXT_SHADOW};
  vertical-align: ${VERTICAL_ALIGN.DEFAULT};
`;

/**
 * TitleH2
 * @component
 *
 */
export const BaseTitleH2 = styled.h2`
  color: ${COLOR.DEFAULT};
  display: inline-block;
  font-family: ${FONT.FAMILY};
  font-size: ${FONT.SIZE.MEDIUM};
  font-weight: ${({ bold }) => (bold ? FONT.WEIGHT.BOLD : FONT.WEIGHT.DEFAULT)};
  margin: ${MARGIN.NONE};
  padding: ${PADDING.DEFAULT};
  text-shadow: ${TEXT_SHADOW};
`;

/**
 * TitleH3
 * @component
 *
 */
export const BaseTitleH3 = styled.strong`
  color: ${COLOR.DEFAULT};
  display: flex;
  align-items: center;
  font-family: ${FONT.FAMILY};
  font-size: ${FONT.SIZE.SMALL};
  font-weight: ${({ bold }) => (bold ? FONT.WEIGHT.BOLD : FONT.WEIGHT.DEFAULT)};
  margin: ${MARGIN.SMALL};
  padding: ${PADDING.H3};
`;
