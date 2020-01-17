import React from 'react';
import PropTypes from 'prop-types';

import { SubmitButton } from 'components/Button';
import Icon from 'components/Icon';

/**
 *
 * @Component SettingsWrapper
 * Permet d'insérer des boutons avec un style cohérent
 *
 */
const SettingsButton = (props) => (
  <SubmitButton
    id={`${props.prefixId}Butn`}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    <span>{props.label}</span>
    <Icon
      id={`${props.prefixId}Icon`}
      icon={props.icon}
      fill={!props.disabled}
      disabled={props.disabled}
    />
  </SubmitButton>
);

SettingsButton.propTypes = {
  prefixId: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default SettingsButton;
