import React from 'react';
import PropTypes from 'prop-types';
import { BaseTitleH1, BaseTitleH2, BaseTitleH3 } from 'utils/styles';
import { sizeFiltering } from 'utils/functions/render';

const balises = { small: BaseTitleH3, medium: BaseTitleH2, big: BaseTitleH1 };

/**
 * Title
 * @param {Object} props
 */
function Title(props) {
  const size = sizeFiltering(
    { small: props.small, medium: props.medium },
    balises
  );
  const TitleFactory = balises[size] || balises.big;
  return (
    <TitleFactory small={props.small} medium={props.medium} bold={props.bold}>
      {props.children}
    </TitleFactory>
  );
}

Title.defaultProps = {
  bold: false,
  children: undefined,
  medium: false,
  small: false,
};

Title.propTypes = {
  /** Éléments enfants */
  children: PropTypes.node,
  /** Options de taille/type */
  bold: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
};

export default Title;
