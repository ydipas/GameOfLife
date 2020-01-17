import React from 'react';
import PropTypes from 'prop-types';
import { BaseFlexBox } from 'utils/styles';
import { LAYOUT } from 'utils/constants/render';
import { getColor } from 'utils/functions/render';

const { ALIGN_CONTENT, ALIGN_ITEMS, JUSTIFY_CONTENT } = LAYOUT.FLEXBOX;

/**
 *
 * Principal Composant pour les flexbox
 *
 */
function FlexBox(props) {
  const { primary, secondary, tertiary, quaternary } = props;
  const themeValues = {
    primary,
    secondary,
    tertiary,
    quaternary,
  };
  const id = props.id ? { id: props.id } : {};

  return (
    <BaseFlexBox
      {...id}
      alignContent={props.alignContent}
      alignItems={props.alignItems}
      color={getColor(themeValues)}
      justifyContent={props.justifyContent}
      margin={props.margin}
      padding={props.padding}
      width={props.width}
      height={props.height}
      hasBorder={props.withBorder}
      toColumn={props.toColumn}
    >
      {props.children}
    </BaseFlexBox>
  );
}

FlexBox.defaultProps = {
  alignContent: ALIGN_CONTENT.STRETCH,
  alignItems: ALIGN_ITEMS.STRETCH,
  children: undefined,
  id: '',
  justifyContent: JUSTIFY_CONTENT.FLEX_START,
  margin: '',
  padding: '',
  primary: false,
  quaternary: false,
  secondary: false,
  tertiary: false,
  toColumn: false,
  width: 'auto',
  withBorder: false,
  height: null,
};

FlexBox.propTypes = {
  /** Voir https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-8 */
  alignContent: PropTypes.oneOf(Object.values(ALIGN_CONTENT)),
  /** Voir https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-7 */
  alignItems: PropTypes.oneOf(Object.values(ALIGN_ITEMS)),
  id: PropTypes.string,
  /** Éléments enfants */
  children: PropTypes.node,
  /** Modifie l'affichage, affiche désormais en colonne */
  toColumn: PropTypes.bool,
  /** Voir https://css-tricks.com/snippets/css/a-guide-to-flexbox/#article-header-id-6 */
  justifyContent: PropTypes.oneOf(Object.values(JUSTIFY_CONTENT)),
  /** espacement etérieur */
  margin: PropTypes.string,
  /** espacement extérieur */
  padding: PropTypes.string,
  /** couleur */
  primary: PropTypes.bool,
  /** couleur */
  quaternary: PropTypes.bool,
  /** couleur */
  secondary: PropTypes.bool,
  /** couleur */
  tertiary: PropTypes.bool,
  /** taille */
  width: PropTypes.string,
  /** Avec ou sans bord */
  withBorder: PropTypes.bool,
  height: PropTypes.string,
};

/**
 * Principal Composant pour les Box
 *
 */
export default FlexBox;
