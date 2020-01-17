import React from 'react';
import PropTypes from 'prop-types';
import { BaseButtonSubmit } from 'utils/styles';

/**
 * Button submit
 * @param {Object} props
 */
function SubmitButton(props) {
  return (
    <BaseButtonSubmit
      id={props.id}
      onClick={props.onClick}
      type="button"
      disabled={props.disabled}
      height={props.height}
      width={props.width}
    >
      {props.children}
    </BaseButtonSubmit>
  );
}

SubmitButton.defaultProps = {
  children: undefined,
  id: '',
  disabled: false,
  height: null,
  width: null,
};

SubmitButton.propTypes = {
  id: PropTypes.string,
  /** Éléments enfants */
  children: PropTypes.node,
  /** options fonctionnelles du bouton */
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  /** Taille */
  height: PropTypes.string,
  width: PropTypes.string,
};

export default SubmitButton;
