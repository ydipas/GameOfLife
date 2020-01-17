import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { lifeActions } from 'actions';

import SettingsWrapper from 'modules/GoLStation/components/SettingsWrapper';
import { Inputs } from 'modules/GolStation/components/SettingsInput/Factory';
import SettingsButton from 'modules/GoLStation/components/SettingsButton';

import { LABELS, ICONS_TITLES } from 'utils/constants/render';

const { RANDOMN_CELL_NUMBER } = LABELS.INPUTS;
const { NumberOfCells } = Inputs;


/**
 * isNumberCoherent
 * @desc permet de s'assurer de la cohérence du nombre renseigné
 * @return {*Boolean}
 * @param {*Number} num
 * @param {*Number} max
 */
const isNumberCoherent = (num, max) => num > 0 && num <= max;

/**
 *
 * @container RandomnCellsContainer
 * Permet de générer aléatoirement les cellules vivantes
 *
 */
class RandomnCellsContainer extends Component {
  state = {
    canCreate: false,
    canNotSet: true,
    numberMaxOfLivingCells: 0,
    numberOfLivingCells: 0,
  };

  componentWillReceiveProps(nextProps) {
    const { numberOfLivingCells } = this.state;
    const { isRunning, numberOfCells } = nextProps;
    // on empêche la définition d'un nombre de cellules vivantes supérieur au nombre total de cellules
    const num = Math.min(numberOfLivingCells, numberOfCells);
    this.setState({
      canCreate: !isRunning && num > 0,
      canNotSet: isRunning || numberOfCells===0,
      numberMaxOfLivingCells: numberOfCells,
      numberOfLivingCells: num,
    });
  }

  _handleChange = ({ inputType, value }) => {
    if (inputType === RANDOMN_CELL_NUMBER) {
      const { numberMaxOfLivingCells } = this.state;
      this.setState({
        numberOfLivingCells: value,
        canCreate: isNumberCoherent(value, numberMaxOfLivingCells),
      });
    }
  };

  _createLivingCells = () => {
    this.props.createLivingCells(this.state.numberOfLivingCells);
  };

  render() {
    const { canCreate, canNotSet, numberOfLivingCells } = this.state;
    return (
      <SettingsWrapper title={LABELS.SETTINGS_AREA.RANDOMN}>
        <NumberOfCells
          disabled={canNotSet}
          value={numberOfLivingCells.toString()}
          handleInputChange={this._handleChange}
        />
        <SettingsButton
          prefixId="create"
          label={LABELS.BUTTONS.CREATE}
          icon={ICONS_TITLES.CELL}
          disabled={!canCreate}
          onClick={this._createLivingCells}
        />
      </SettingsWrapper>
    );
  }
}

RandomnCellsContainer.propTypes = {
  createLivingCells: PropTypes.func.isRequired,
  isRunning: PropTypes.bool.isRequired,
  numberOfCells: PropTypes.number.isRequired,
};

/** connection avec redux */
const mapStateToProps = (state) => {
  const { lifeReducer, settingsReducer } = state;
  const { isRunning } = lifeReducer;
  const { width, height } = settingsReducer;

  return {
    isRunning,
    numberOfCells: width * height,
  };
};

const mapDispatchToProps = (dispatch) => ({
  createLivingCells(value) {
    dispatch(lifeActions.notifyRandomnCreation({ value }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RandomnCellsContainer);
