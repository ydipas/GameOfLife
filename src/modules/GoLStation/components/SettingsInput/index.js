import React from 'react';
import PropTypes from 'prop-types';

import Input from 'components/Input';
import Label from 'components/Label';
import Select from 'components/Select';
import { LABELS } from 'utils/constants/render';

const { MODE } = LABELS.INPUTS;

/**
 *
 * @Component SettingsInput
 * Permet de définir un modèle d'input (text ou select)
 * Chaque type d'input est défini dans ./Factory.js
 *
 */
class SettingsInput extends React.Component {
  _onBlur = (entry) => this._checkValueRules(entry);

  _checkValueRules = (entry) => {
    const value = Number.isNaN(parseInt(entry.trim(), 10))
      ? 0
      : parseInt(entry.trim(), 10);

    this.props.handleInputChange({
      inputType: this.props.name,
      value,
    });
  };

  _pushMode = (value) => {
    this.props.handleInputChange({
      inputType: this.props.name,
      value,
    });
  };

  render() {
    const { name } = this.props;

    return (
      <Label>
        {`${name} : `}
        {name !== MODE ? (
          <Input
            id={name}
            onChange={this._checkValueRules}
            onBlur={this._onBlur}
            {...this.props}
          />
        ) : (
          <Select id={name} onChange={this._pushMode} {...this.props} />
        )}
      </Label>
    );
  }
}

SettingsInput.defaultProps = {
  value: '',
};

SettingsInput.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

/**
 * SettingsInput
 * déclaré dans './factory'
 */
export default SettingsInput;
