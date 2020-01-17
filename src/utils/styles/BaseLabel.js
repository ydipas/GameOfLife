import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const { COLOR, FONT, TEXT_ALIGN, MARGIN, PADDING } = LAYOUT.LABEL;

/**
 * Label
 * @component
 * Peut contenir un seul Input
 */
export const BaseLabel = styled.label`
  align-items: center;
  color: ${COLOR};
  display: flex;
  font-family: ${FONT.FAMILY};
  font-size: ${FONT.SIZE};
  font-weight: ${FONT.WEIGHT.BOLD};
  justify-content: ${TEXT_ALIGN.RIGHT};
  margin-left: ${MARGIN.LEFT};
  padding: ${PADDING};
`;
