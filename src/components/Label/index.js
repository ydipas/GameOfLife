import React from 'react';
import PropTypes from 'prop-types';

import { BaseLabel } from 'utils/styles';

/**
 * Label
 * @param {Object} props
 */
export function Label(props) {
  const { children } = props;
  return <BaseLabel>{children}</BaseLabel>;
}
Label.defaultProps = {
  children: undefined,
};

Label.propTypes = {
  /** Éléments enfants */
  children: PropTypes.node,
};

/**
 * Principal Composant pour les Box
 *
 */
export default Label;
