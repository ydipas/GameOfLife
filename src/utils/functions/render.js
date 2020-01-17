import { ICONS_TITLES, THEME } from 'utils/constants/render';
import allPaths from 'components/Icon/allPaths';

/**
 * transformBoolToValue
 * @desc retourne la valeur du dernier objet sélectionné
 * @param {Array} objectList, une liste d'objet contenantf :
 * _value: la valeur correspondante (String)
 * _isSelected: un booléen
 *
 * @return {String}
 *
 */
const transformBoolToValue = (objectList) => {
  const result = Object.values(objectList)
    .filter(({ isSelected }) => isSelected)
    .pop();
  return result && result.value;
};

/**
 * getColorFromProps
 * @desc retourne une unique couleur
 * (par ordre de priorité si plusieurs couleurs sont sélectionnées)
 * @return {String}
 * @param {Object} props { [Booleans] }
 * }
 *
 */
const getColorFromProps = (props) =>
  transformBoolToValue({
    /** Toujours la valeur par défault en première place */
    primary: {
      isSelected: props.primary,
      value: THEME.COLORS.PRIMARY,
    },
    secondary: {
      isSelected: props.secondary,
      value: THEME.COLORS.SECONDARY,
    },
    tertiary: {
      isSelected: props.tertiary,
      value: THEME.COLORS.TERTIARY,
    },
    quaternary: {
      isSelected: props.quaternary,
      value: THEME.COLORS.QUATERNARY,
    },
  });

/**
 * getValueFromBool
 * @desc Retourne la valeur correspondantes au booléen choisi
 * @return {String} value || PRIMARY (default)
 * @param {Obect} props Liste des booléens
 */
export const getValueFromBool = (props) => {
  const {
    /* couleurs */
    primary,
    secondary,
    tertiary,
    quaternary,
  } = props;

  const themeColorsInfo = {
    primary,
    secondary,
    tertiary,
    quaternary,
  };

  return getColorFromProps(themeColorsInfo) || THEME.COLORS.PRIMARY;
};

/**
 * sizeFiltering
 * @desc retourne le dernier objet sélectionné
 * @return {Object}
 * @param {Array} sizeObject une liste des objets disponibles
 * @param {Array} balises, une liste d'objet contenantf un booléen
 *
 */
export const sizeFiltering = (sizeObject, balises) =>
  Object.keys(balises)
    .filter((baliseKey) => sizeObject[baliseKey])
    .pop();

/**
 * getColor
 * @desc retourne une couleur du thème
 * (ou transparent si aucune propriété de themeValues est mise à true)
 * @return {String}
 * @param {Array} themeValues, une liste d'objet contenantf un booléen
 *
 */
export const getColor = (themeValues) =>
  Object.values(themeValues).some((bool) => bool)
    ? getValueFromBool({ ...themeValues })
    : 'transparent';

/**
 * getColorIcon
 * @desc retourne une couleur en fonction des paramètres en entrée
 * @return {String}
 * @param {String} icon
 * @param {Bool} fill
 * @param {Bool} disabled
 * @param {Bool} isBackground
 *
 */
export const getColorIcon = (icon, fill, disabled, isBackground) => {
  const { DEAD_CELL, LIVING_CELL } = ICONS_TITLES;
  const { BLUES, CELLS, DARK } = THEME.COLORS;
  if (icon === DEAD_CELL) return isBackground ? 'transparent' : CELLS.DEAD;
  if (icon === LIVING_CELL) return isBackground ? 'transparent' : CELLS.ALIVE;
  if (!fill && isBackground) return 'transparent';
  if (disabled) return DARK;
  return BLUES.DEFAULT;
};

/**
 * setIconPath
 * @desc retourne la liste des éléments html constituant le SVG
 * @return {Array} [Components]
 * @param {*String} currentIcon
 *
 */
export const setIconPath = (currentIcon) => {
  if (typeof allPaths[currentIcon] === 'function') {
    return allPaths[currentIcon]().map((iconPath) => iconPath);
  }
  return '';
};

export default getValueFromBool;
