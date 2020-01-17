import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { lifeActions } from 'actions';

import SettingsButton from 'modules/GoLStation/components/SettingsButton';
import SettingsWrapper from 'modules/GoLStation/components/SettingsWrapper';

import { LABELS, ICONS_TITLES } from 'utils/constants/render';
import { LIFE_MODES } from 'utils/constants/gameOfLife';

const { CLEAR_LIFE, NEXT_STEP, START_LIFE, STOP_LIFE } = LABELS.BUTTONS;
const { PLAY, REFETCH, STOP } = ICONS_TITLES;

/**
 *
 * @container CommandsContainer
 * Permet de piloter la simulation (start/stop/next & init living cells)
 *
 */
class CommandsContainer extends Component {
  state = {
    isRunning: false,
    isStartable: false,
    isNextable: false,
    isClearable: false,
  };

  componentWillReceiveProps(nextProps) {
    const { hasLivingCells, hasWorldSet, isAutoMode, isRunning } = nextProps;
    this.setState({
      isRunning,
      isStartable: (hasLivingCells && hasWorldSet) || isRunning,
      isNextable: isRunning && !isAutoMode && hasLivingCells,
      isClearable: !isRunning && hasLivingCells,
    });
  }

  _handleStartClick = () => {
    const { isRunning } = this.state;
    if (isRunning) this.props.stopLife();
    else this.props.notifyStartLife();
  };

  render() {
    const { isRunning, isStartable, isNextable, isClearable } = this.state;
    return (
      <SettingsWrapper title={LABELS.SETTINGS_AREA.COMMANDS}>
        <SettingsButton
          prefixId="start"
          label={isRunning ? STOP_LIFE : START_LIFE}
          icon={isRunning ? STOP : PLAY}
          disabled={!isStartable}
          onClick={this._handleStartClick}
        />
        <SettingsButton
          prefixId="next"
          label={NEXT_STEP}
          icon={PLAY}
          disabled={!isNextable}
          onClick={this.props.notifyNextStep}
        />
        <SettingsButton
          prefixId="clear"
          label={CLEAR_LIFE}
          icon={REFETCH}
          disabled={!isClearable}
          onClick={this.props.clearLife}
        />
      </SettingsWrapper>
    );
  }
}

CommandsContainer.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  isAutoMode: PropTypes.bool.isRequired,
  hasLivingCells: PropTypes.bool.isRequired,
  hasWorldSet: PropTypes.bool.isRequired,
  clearLife: PropTypes.func.isRequired,
  notifyNextStep: PropTypes.func.isRequired,
  notifyStartLife: PropTypes.func.isRequired,
  stopLife: PropTypes.func.isRequired,
};

/** connection avec redux */
const mapStateToProps = (state) => {
  const { lifeReducer, settingsReducer } = state;
  const { isRunning, livingCellsList } = lifeReducer;
  const { width, height, mode } = settingsReducer;

  return {
    isRunning,
    isAutoMode: mode === LIFE_MODES.AUTO_MODE,
    hasLivingCells: livingCellsList.length > 0,
    hasWorldSet: width > 0 && height > 0,
  };
};

const mapDispatchToProps = (dispatch) => ({
  clearLife() {
    dispatch(lifeActions.clearLife());
  },
  notifyNextStep() {
    dispatch(lifeActions.notifyNextStep());
  },
  notifyStartLife() {
    dispatch(lifeActions.notifyStartLife());
  },
  stopLife() {
    dispatch(lifeActions.stopLife());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommandsContainer);
