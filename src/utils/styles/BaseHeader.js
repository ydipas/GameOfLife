import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const { HEADER } = LAYOUT;

/**
 * Header
 * @component
 */
export const BaseHeader = styled.div`
  color: ${HEADER.COLOR_INFO};
  background-color: ${HEADER.BACKGROUND_COLOR_INFO};
  height: ${({ height }) => height || 'auto'};
  vertical-align: middle;
  text-align: ${HEADER.TEXT_ALIGN};
  padding: ${HEADER.PADDING};
  border-width: ${HEADER.BORDER.WIDTH};
  border-style: ${HEADER.BORDER.STYLE};
  border-color: ${HEADER.BORDER.COLOR};
  border-radius: ${HEADER.BORDER.RADIUS};
  width: 100%;
`;
