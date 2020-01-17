import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BaseInput } from 'utils/styles';

/**
 *
 * Principal Composant pour les inputs
 *
 */
export class Input extends Component {
  state = {
    value: this.props.value,
    disabled: this.props.disabled,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value, disabled: nextProps.disabled });
  }

  shouldComponentUpdate(nextProps) {
    const hasChangeValue = nextProps.value !== this.props.value;
    const hasChangeDisabled = nextProps.disabled !== this.props.disabled;
    return hasChangeValue || hasChangeDisabled;
  }

  _handleChange = (event) => {
    const { value } = event.target;
    this.setState({ value });
    this.props.onChange(value);
  };

  _handleBlur = (event) => {
    const { value } = event.target;
    this.props.onBlur(value);
  };

  render() {
    const { value, disabled } = this.state;
    const nameInfo = this.props.name ? { name: this.props.name } : {};

    return (
      <BaseInput
        id={`input_${this.props.id}`}
        {...nameInfo}
        disabled={disabled}
        onBlur={this._handleBlur}
        onChange={this._handleChange}
        onKeyPress={this.props.onKeyPress}
        padding={this.props.padding}
        value={value}
        width={this.props.width}
      />
    );
  }
}

Input.defaultProps = {
  disabled: false,
  id: '',
  name: '',
  onBlur: () => null,
  onChange: () => null,
  onKeyPress: () => null,
  padding: '',
  value: '',
  width: '',
};

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  /** Si définie, sera inactif. */
  disabled: PropTypes.bool,
  /** Fonction du parent */
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyPress: PropTypes.func,
  /** option d'affichage */
  padding: PropTypes.string,
  /** valeur */
  value: PropTypes.string,
  /** Taille */
  width: PropTypes.string,
};

/**
 * Principal Composant pour les inputs
 *
 */
export default Input;
