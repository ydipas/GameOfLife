import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Grid from 'components/Grid';
import Cell from 'modules/GoLWorld/components/Cell';

import { lifeActions } from 'actions';
import { createWorldOfCell } from 'utils/functions/gameOfLife';

/**
 *
 * @container CellWorldContainer
 * Permet d'afficher les cellules dans une Grid
 *
 */
class CellWorldContainer extends Component {
  state = {
    canUpdateCells: false,
    height: 0,
    width: 0,
    cellsList: [],
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      canUpdateCells: !nextProps.isRunning,
      height: nextProps.height,
      width: nextProps.width,
      cellsList: createWorldOfCell(
        nextProps.height,
        nextProps.width,
        nextProps.livingCellsList
      ),
    });
  }

  _handleCellClick = (cell, isLiving) => {
    this.props.updateCell(cell, isLiving);
  };

  render() {
    const { canUpdateCells, height, width, cellsList } = this.state;
    return height * width === 0 ? null : (
      <Grid
        templateColumns={`repeat(${width}, 1fr)`}
        templateRows={`repeat(${height}, 1fr)`}
        width="100%"
      >
        {cellsList.map(({ index, cell, status }) => (
          <Cell
            key={index}
            x={cell.x}
            y={cell.y}
            cellStatus={status}
            isUpdatable={canUpdateCells}
            updateCellStatus={this.props.updateCell}
          />
        ))}
      </Grid>
    );
  }
}

CellWorldContainer.propTypes = {
  isRunning: PropTypes.bool.isRequired,
  height: PropTypes.number.isRequired,
  livingCellsList: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateCell: PropTypes.func.isRequired,
  width: PropTypes.number.isRequired,
};

/** connection avec redux */
const mapStateToProps = (state) => {
  const { isRunning, livingCellsList } = state.lifeReducer;
  const { width, height } = state.settingsReducer;

  return {
    isRunning,
    height,
    livingCellsList,
    width,
  };
};

const mapDispatchToProps = (dispatch) => ({
  updateCell(cell, isLiving) {
    dispatch(lifeActions.updateLivingCell({ isLiving, cell }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CellWorldContainer);
