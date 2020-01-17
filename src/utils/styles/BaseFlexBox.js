import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const { BORDER, MARGIN, PADDING } = LAYOUT.FLEXBOX;

/**
 * FlexBox
 * @component
 *
 */
export const BaseFlexBox = styled.section`
  align-content: ${({ alignContent }) => alignContent};
  align-items: ${({ alignItems }) => alignItems};
  background-color: ${({ color }) => color};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ hasBorder }) => (hasBorder ? BORDER : 'transparent')};
  display: flex;
  flex-direction: ${({ toColumn }) => (toColumn ? 'column' : 'row')};
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) => justifyContent};
  margin: ${({ margin }) => margin || MARGIN.DEFAULT};
  padding: ${({ padding }) => padding || PADDING.NONE};
  width: ${({ width }) => width};
  height: ${({ height }) => height || null};
`;
