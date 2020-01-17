import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { IconButton } from 'components/Button';

import { CELL_STATUS } from 'utils/constants/gameOfLife';
import { CELLS_IMAGES } from 'utils/constants/render';

const { DEAD } = CELL_STATUS;
const { DEAD_CELL, LIVING_CELL } = CELLS_IMAGES;

/**
 *
 * defineIcon
 * @desc permet de s'assurer de la cohérence du nombre renseigné
 * @return {*String} path to image
 * @param {*String} status de la cellule (vivante / morte)
 *
 */
const defineIcon = (status) => (status === DEAD ? DEAD_CELL : LIVING_CELL);

/**
 *
 * @Component Cell
 * Permet d'afficher la cellule (IconButton) dans la grille
 *
 */
class Cell extends Component {
  state = {
    x: this.props.x,
    y: this.props.y,
    cellStatus: this.props.cellStatus,
    isUpdatable: this.props.isUpdatable,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      cellStatus: nextProps.cellStatus,
      isUpdatable: nextProps.isUpdatable,
    });
  }

  _onClick = () => {
    const { x, y, cellStatus } = this.state;
    this.props.updateCellStatus({ x, y }, !(cellStatus === CELL_STATUS.LIVING));
  };

  render() {
    const { isUpdatable, x, y, cellStatus } = this.state;
    return (
      <IconButton
        id={`cell-${x}-${y}`}
        disabled={!isUpdatable}
        onClick={this._onClick}
        backgroungImage={defineIcon(cellStatus)}
      />
    );
  }
}

Cell.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  cellStatus: PropTypes.string.isRequired,
  isUpdatable: PropTypes.bool.isRequired,
  updateCellStatus: PropTypes.func.isRequired,
};

export default Cell;
