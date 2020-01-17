import styled from 'styled-components';
import { LAYOUT } from 'utils/constants/render';

export default {};

const { GRID } = LAYOUT;
/**
 * Grid
 * @component
 */
export const BaseGrid = styled.div`
  background-color: ${({ color }) => color};
  display: grid;
  z-index: ${({ zIndex }) => zIndex || '0'};
  width: ${({ width }) => width || 'initial'};
  position: ${({ position }) => position || 'relative'};
  grid-template-columns: ${({ templateColumns }) => templateColumns || 'none'};
  grid-template-rows: ${({ templateRows }) => templateRows || 'none'};
  grid-row-gap: ${({ rowGap }) => rowGap || GRID.GAP.DEFAULT};
  grid-column-gap: ${({ columnGap }) => columnGap || GRID.GAP.DEFAULT};
  min-height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight || 'none'};
  margin: ${({ margin }) => margin || GRID.MARGIN.DEFAULT};
  padding: ${({ padding }) => padding || GRID.PADDING.DEFAULT};
  overflow-x: ${({ overFlowX }) => (overFlowX ? 'auto' : 'hidden')};
  overflow-y: ${({ overFlowY }) => (overFlowY ? 'auto' : 'hidden')};
  transition-property: height, width;
  transition-duration: 0.2s, 0.2s;
  transition-timing-function: linear, linear;
  transition-delay: 0s, 0s;
  justify-items: ${({ justifyItems }) => justifyItems};
`;
