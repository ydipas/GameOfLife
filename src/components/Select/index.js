import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { LABELS } from 'utils/constants/render';

import { BaseSelect } from 'utils/styles';

const CHOISIR = '-- Choisir --';
const { NO_VALUE } = LABELS;

const adaptValue = ({ value }) => value || NO_VALUE;

/**
 *
 * @component
 * Select
 *
 */
class Select extends PureComponent {
  state = {
    value: adaptValue(this.props),
  };

  componentWillReceiveProps(nextProps) {
    const { value } = this.state;
    const { value: nextValue } = nextProps;
    if (nextValue !== value) {
      this.setState({
        value: nextValue,
      });
    }
  }

  _handleChange = ({ target }) => {
    const { value } = target;
    this.props.onChange(value);
    this.props.onBlur(value);
  };

  render() {
    const { value } = this.state;
    const { disabled, id, options, width } = this.props;

    return (
      <BaseSelect
        id={id}
        disabled={disabled}
        onChange={this._handleChange}
        value={value}
        width={width}
      >
        <option disabled={value} value={NO_VALUE}>
          {disabled ? null : CHOISIR}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </BaseSelect>
    );
  }
}

Select.defaultProps = {
  disabled: false,
  id: '',
  onBlur: () => null,
  onChange: () => null,
  options: [''],
  value: '',
  width: '',
};

Select.propTypes = {
  id: PropTypes.string,
  /** Si définie, sera inactif. */
  disabled: PropTypes.bool,
  /** Fonction du parent */
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  /** valeur */
  value: PropTypes.string,
  /** valeurs disponibles */
  options: PropTypes.arrayOf(PropTypes.any),
  /** Taille */
  width: PropTypes.string,
};

export default Select;
