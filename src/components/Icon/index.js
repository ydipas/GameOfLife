import React from 'react';
import PropTypes from 'prop-types';

import { ICONS_TITLES, THEME } from 'utils/constants/render';
import { getColorIcon, setIconPath } from 'utils/functions/render';
import { BaseIco } from 'utils/styles';

const { NONE } = ICONS_TITLES;
const { WHITE } = THEME.COLORS;

/**
 * Icon
 * @desc si on ne renseigne pas d icon, on affiche une icone par defaut
 * @param {Object} props
 */
function Icon(props) {
  const { fill, icon, disabled } = props;

  /* lorsque l'icon n'est pas explicitement indiquée, on en définit une par défaut */
  const currentIcon = icon || NONE;

  return (
    <BaseIco
      xmlns="http://www.w3.org/2000/svg"
      id={`icon_${props.id}_${currentIcon}`}
      backgroundColor={getColorIcon(currentIcon, fill, disabled, true)}
      width={props.size}
      height={props.size}
      fill={fill ? WHITE : getColorIcon(currentIcon, fill, disabled, false)}
      stroke="none"
      viewBox="0 0 24 24"
    >
      {setIconPath(currentIcon)}
    </BaseIco>
  );
}

Icon.defaultProps = {
  icon: '',
  id: '',
  fill: false,
  size: 24,
  disabled: false,
};

Icon.propTypes = {
  id: PropTypes.string,
  /** icone à afficher : cf. setIconPath */
  icon: PropTypes.string,
  /** taille */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** options d'affichage */
  disabled: PropTypes.bool,
  fill: PropTypes.bool,
};

/**
 * Principal Composant pour les inputs
 *
 */
export default Icon;
