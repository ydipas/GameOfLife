import React from 'react';
import PropTypes from 'prop-types';

import { BaseGrid } from 'utils/styles';
import { LAYOUT } from 'utils/constants/render';
import { getColor } from 'utils/functions/render';

const { FLEX_START } = LAYOUT.FLEXBOX.JUSTIFY_CONTENT;

/**
 *
 * Utilise Grid Css (affichage en grille)
 *
 */
function Grid(props) {
  const { primary, secondary, tertiary, quaternary } = props;
  const themeValues = {
    primary,
    secondary,
    tertiary,
    quaternary,
  };

  return (
    <BaseGrid
      {...props}
      color={getColor(themeValues)}
      columnGap={props.columnGap}
      height={props.height}
      maxHeight={props.mHeight}
      margin={props.margin}
      padding={props.padding}
      rowGap={props.rowGap}
      templateColumns={props.templateColumns}
      templateRows={props.templateRows}
      overFlowX={props.overFlowX}
      overFlowY={props.overFlowY}
      justifyItems={props.justifyItems}
      width={props.width}
    >
      {props.children}
    </BaseGrid>
  );
}

Grid.defaultProps = {
  children: undefined,
  columnGap: '',
  height: 'initial',
  mHeight: '',
  margin: '',
  overFlowX: false,
  overFlowY: false,
  padding: '',
  primary: false,
  quaternary: false,
  rowGap: '',
  secondary: false,
  tertiary: false,
  templateColumns: '',
  templateRows: '',
  justifyItems: FLEX_START,
  width: '',
};

Grid.propTypes = {
  /** Éléments enfants */
  children: PropTypes.node,
  /** Taille minimal */
  height: PropTypes.string,
  /** Taille maximal */
  mHeight: PropTypes.string,
  /** Margin  */
  margin: PropTypes.string,
  /** padding */
  padding: PropTypes.string,
  /** overflows */
  overFlowX: PropTypes.bool,
  overFlowY: PropTypes.bool,
  /** couleurs */
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  tertiary: PropTypes.bool,
  quaternary: PropTypes.bool,
  /** Espace entre les rows (lignes) et les colonnes */
  columnGap: PropTypes.string,
  rowGap: PropTypes.string,
  /** Ratios */
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  /** justify */
  justifyItems: PropTypes.string,
  /** taille */
  width: PropTypes.string,
};

/**
 * Principal Composant pour les Box
 *
 */
export default Grid;
