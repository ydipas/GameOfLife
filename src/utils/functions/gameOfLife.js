import { CELL_STATUS } from 'utils/constants/gameOfLife';

/**
 * isSameCell
 * @desc permet de tester si 2 cells sont identiques (ie même position)
 * @return {Boolean}
 * @param {Object} cell1
 * @param {Object} cell2
 */
export const isSameCell = (cell1, cell2) =>
  cell1.x === cell2.x && cell1.y === cell2.y;

/**
 * isLivingCell
 * @desc permet de tester l'état d'une cellule (vivante / morte)
 * @return {Boolean}
 * @param {Array} livingCellsList
 * @param {Object} pos
 */
export const isLivingCell = (livingCellsList, pos) =>
  livingCellsList.some((el) => isSameCell(el, pos));

/**
 * areAllInTab
 * @desc permet de s'assurer que tous les éléments dans tab1 se trouvent dans tab2
 *       (utilisé pour l'opérateur d'égalité tab vs tab)
 * @return {Boolean}
 * @param {Array} tab1
 * @param {Array} tab2
 */
const areAllInTab = (tab1, tab2) =>
  tab1.every((el) => tab2.some((el2) => isSameCell(el, el2)));

/**
 * getRandomInt
 * @desc fonctio permettant de générer aléatoirement un entier entre 0 et max
 * @return {Number}
 * @param {Number} max
 */
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

/**
 * has1PxRange
 * @desc permet de s'asssurer que 2 coordonnées n'ont qu'un pixel d'écart
 *       (utilisé dans la fonction isNeighbour)
 * @return {Boolean}
 * @param {Number} x1
 * @param {Number} x2
 */
const has1PxRange = (x1, x2) => Math.abs(x1 - x2) <= 1;

/**
 * isNeighbour
 * @desc permet de tester si 2 cellules sont voisines
 * @return {Boolean}
 * @param {Object} pos1
 * @param {Object} pos2
 */
const isNeighbour = (pos1, pos2) =>
  has1PxRange(pos1.x, pos2.x) &&
  has1PxRange(pos1.y, pos2.y) &&
  !isSameCell(pos1, pos2);

/**
 * countLivingNeighbourCells
 * @desc permet de compter le nombre de cellules vivantes dans le voisinage d'une cellule
 * @return {Number}
 * @param {Array} livingCellsList
 * @param {Object} pos
 */
const countLivingNeighbourCells = (livingCellsList, pos) =>
  livingCellsList.filter((cell) => isNeighbour(cell, pos)).length;

/**
 * willBeLiving
 * @desc permet de définir si une cellule sera vivante lors de la prochaine itération
 * @return {Boolean}
 * @param {Array} livingCellsList
 * @param {Object} pos
 */
const willBeLiving = (livingCellsList, pos) => {
  const count = countLivingNeighbourCells(livingCellsList, pos);
  return isLivingCell(livingCellsList, pos)
    ? [2, 3].includes(count)
    : count === 3;
};

/**
 * defineLimitedArea
 * @desc permet de limiter la zone de traitement pour définir les futures cellules vivantes
 * @return {Object}
 * @param {Array} list
 * @param {Number} w
 * @param {Number} h
 */
const defineLimitedArea = (list, w, h) => ({
  xmin: Math.max(0, Math.min.apply(null, list.map((elt) => elt.x)) - 1),
  xmax: Math.min(w - 1, Math.max.apply(null, list.map((elt) => elt.x)) + 1),
  ymin: Math.max(0, Math.min.apply(null, list.map((elt) => elt.y)) - 1),
  ymax: Math.min(h - 1, Math.max.apply(null, list.map((elt) => elt.y)) + 1),
});

/**
 * defineNextLivingCells
 * @desc permet de définir la liste des futures cellules vivantes
 * @return {Array}
 * @param {Array} livingCellsList
 * @param {Number} width
 * @param {Number} height
 */
export const defineNextLivingCells = (livingCellsList, width, height) => {
  const nextLivingCellsList = [];

  const { xmin, xmax, ymin, ymax } = defineLimitedArea(
    livingCellsList,
    width,
    height
  );

  for (let x = xmin; x <= xmax; x++) {
    for (let y = ymin; y <= ymax; y++) {
      if (willBeLiving(livingCellsList, { x, y }))
        nextLivingCellsList.push({ x, y });
    }
  }

  return nextLivingCellsList;
};

/**
 * createWorldOfCell
 * @desc utilisée par CellWorldContainer pour aide à l'affichage de toutes les cellules
 * @return {Array}
 * @param {Number} width
 * @param {Number} height
 * @param {Array} livingCellsList
 */
export const createWorldOfCell = (height, width, livingCellsList) => {
  const { DEAD, LIVING } = CELL_STATUS;
  const tab = [];

  for (let ind = 0; ind < width * height; ind++) {
    const x = ind % width;
    const y = Math.floor(ind / width);
    tab.push({
      index: `cell-${x}-${y}`,
      cell: { x, y },
      status: isLivingCell(livingCellsList, { x, y }) ? LIVING : DEAD,
    });
  }

  return tab;
};

/**
 * fillRandomnLivingCells
 * @desc permet de générer une lise aléatoire de cellules vivantes
 * @return {Array}
 * @param {Number} number
 * @param {Number} width
 * @param {Number} height
 */
export const fillRandomnLivingCells = (number, width, height) => {
  const cellList = [];
  while (cellList.length < number) {
    const cell = { x: getRandomInt(width), y: getRandomInt(height) };
    if (!cellList.some((el) => isSameCell(el, cell))) cellList.push(cell);
  }
  return cellList;
};

/**
 * AreTabsEqual
 * @desc opérateur de comparaison entre 2 listes
 * @return {Boolean}
 * @param {Array} tab1
 * @param {Array} tab2
 */
export const AreTabsEqual = (tab1, tab2) =>
  areAllInTab(tab1, tab2) && areAllInTab(tab2, tab1);
