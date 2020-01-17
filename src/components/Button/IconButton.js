import React from 'react';
import PropTypes from 'prop-types';
import { BaseButtonIcon } from 'utils/styles';

/**
 * Button Icon
 * @param {Object} props
 */
function IconButton(props) {
  return (
    <BaseButtonIcon
      id={props.id}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      size="100%"
      margin={props.margin}
      backgroungImage={props.backgroungImage}
    />
  );
}

IconButton.defaultProps = {
  id: '',
  disabled: false,
  margin: null,
};

IconButton.propTypes = {
  id: PropTypes.string,
  /** options fonctionnelles du bouton */
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  /** options d'affichage */
  margin: PropTypes.string,
  backgroungImage: PropTypes.string.isRequired, // image (SVG) chargée comme background pour scale automatique
};

export default IconButton;
