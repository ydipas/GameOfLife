import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { settingsActions } from 'actions';

import SettingsWrapper from 'modules/GoLStation/components/SettingsWrapper';
import { Inputs } from 'modules/GolStation/components/SettingsInput/Factory';

import { LIFE_MODES } from 'utils/constants/gameOfLife';
import { LABELS } from 'utils/constants/render';

const { WIDTH, HEIGHT, DELAY, MODE } = LABELS.INPUTS;
const { Height, Width, Delay, Mode } = Inputs;
const { AUTO_MODE, MANUAL_MODE } = LIFE_MODES;

/**
 *
 * @container GameSettingsContainer
 * Permet de définir les dimensions ainsi que le mode de simulation (auto/manuel)
 *
 */
class GameSettingsContainer extends Component {
  state = {
    isRunning: this.props.isRunning,
    height: this.props.height,
    mode: this.props.mode,
    delay: this.props.delay,
    width: this.props.width,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      isRunning: nextProps.isRunning,
      height: nextProps.height,
      mode: nextProps.mode,
      delay: nextProps.delay,
      width: nextProps.width,
    });
  }

  _updateChange = ({ inputType, value }) => {
    if (inputType === WIDTH) this.props.setWidth(value);
    if (inputType === HEIGHT) this.props.setHeight(value);
    if (inputType === DELAY) this.props.setDelay(value);
    if (inputType === MODE) this.props.setMode(value);
  };

  render() {
    const { isRunning, height, mode, delay, width } = this.state;
    const isAutoMode = mode === AUTO_MODE;
    return (
      <SettingsWrapper title={LABELS.SETTINGS_AREA.WORLD}>
        <Height
          disabled={isRunning}
          value={height.toString()}
          handleInputChange={this._updateChange}
        />
        <Width
          disabled={isRunning}
          value={width.toString()}
          handleInputChange={this._updateChange}
        />
        <Mode
          disabled={isRunning}
          value={mode}
          handleInputChange={this._updateChange}
          options={[AUTO_MODE, MANUAL_MODE]}
        />
        <Delay
          disabled={isRunning || !isAutoMode}
          value={delay.toString()}
          handleInputChange={this._updateChange}
        />
      </SettingsWrapper>
    );
  }
}

GameSettingsContainer.propTypes = {
  delay: PropTypes.number.isRequired,
  isRunning: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  mode: PropTypes.string.isRequired,
  setDelay: PropTypes.func.isRequired,
  setHeight: PropTypes.func.isRequired,
  setMode: PropTypes.func.isRequired,
  setWidth: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

/** connection avec redux */
const mapStateToProps = (state) => {
  const { delay, height, mode, width } = state.settingsReducer;
  const { isRunning } = state.lifeReducer;

  return {
    delay,
    isRunning,
    height,
    mode,
    width,
  };
};

const mapDispatchToProps = (dispatch) => ({
  setDelay(value) {
    dispatch(settingsActions.setDelay({ value }));
  },
  setHeight(value) {
    dispatch(settingsActions.setHeight({ value }));
  },
  setMode(value) {
    dispatch(settingsActions.setMode({ value }));
  },
  setWidth(value) {
    dispatch(settingsActions.setWidth({ value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameSettingsContainer);
