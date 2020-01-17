import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { lifeActions, settingsActions } from 'actions';

import SettingsWrapper from 'modules/GoLStation/components/SettingsWrapper';
import SettingsButton from 'modules/GoLStation/components/SettingsButton';

import { LABELS, ICONS_TITLES } from 'utils/constants/render';

/**
 *
 * @container ResetContainer
 * Permet de réinitialiser les paramètres
 *
 */
const ResetContainer = (props) => (
  <SettingsWrapper title={LABELS.SETTINGS_AREA.RESET}>
    <SettingsButton
      prefixId="reset"
      label={LABELS.BUTTONS.RESET}
      icon={ICONS_TITLES.TRASH}
      disabled={props.isRunning}
      onClick={props.reset}
    />
  </SettingsWrapper>
);

ResetContainer.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  reset: PropTypes.func.isRequired,
};

/** connection avec redux */
const mapStateToProps = (state) => ({ isRunning: state.lifeReducer.isRunning });

const mapDispatchToProps = (dispatch) => ({
  reset() {
    dispatch(lifeActions.clearLife());
    dispatch(settingsActions.reset());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResetContainer);
