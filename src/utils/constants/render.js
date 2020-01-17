/**
 * utilisé dans LAYOUT
 */
const COMMON_FLEX_VALUES = {
  CENTER: 'center',
  FLEX_END: 'flex-end',
  FLEX_START: 'flex-start',
};

/**
 *
 * THEME
 * Regroupe les couleurs utilisées dans l'application
 *
 */
export const THEME = {
  COLORS: {
    BLUES: {
      DEFAULT: '#108ED5',
      LIGHT: '#bbe0fc',
    },
    CELLS: {
      DEAD: '#F4D2D3',
      ALIVE: '#a2c895',
    },
    PRIMARY: '#868e96',
    SECONDARY: '#B0BEC5',
    TERTIARY: '#CFD8DC',
    QUATERNARY: '#f0f0ff',
    LIGHT: '#f0f8ff',
    SHADOW_LIGHT: '#B0BEC5', // for shadow titile
    TEXT: '#212121',
    DARK: '#607D8B',
    WHITE: 'white',
  },
};

/**
 *
 * REGEXP de contrôle pour TDD
 *
 */
export const REGEXP_LENGTH = /^(auto|0)$|^[+-]?[0-9]+.?([0-9]+)?(px|em|ex|%|in|cm|mm|pt|pc|vh|vw)$/;

/**
 *
 * LAYOUT
 * Regroupe les styles invariant aux composants
 * (width, border-radius, height etc)
 *
 */
export const LAYOUT = {
  BUTTONS: {
    FONT_FAMILY: 'arial',
    TEXT_DECORATION: 'none',
    LIGHT_OPACITY: '0.85',
    LIGHTER_OPACITY: '0.7',
    SUBMIT: {
      SIZE: {
        WIDTH: '12.5em',
        HEIGHT: '2.2em',
      },
      COLORS: {
        DEFAULT: THEME.COLORS.BLUES.DEFAULT,
        HOVER: THEME.COLORS.LIGHT,
        DARK: THEME.COLORS.DARK,
        ICON: THEME.COLORS.QUATERNARY,
      },
      BORDER: {
        RADIUS: '0.4em',
        STYLE: 'solid',
        WIDTH: '2px',
      },
      FONT: {
        SIZE: '0.86em',
        WEIGHT: 'lighter',
      },
      MARGIN: '0.2em 0 0.2em 0',
      PADDING: '0',
      SVG: {
        FLOAT: 'right',
        HEIGHT: '2em',
      },
      SPAN: {
        LINE_HEIGHT: '1.95em',
        PADDING: '0',
      },
    },
    ICON: {
      NONE: '0',
      MARGIN: '0.5em 0',
      SIZE: '100%',
      RADIUS: '0',
    },
  },
  FLEXBOX: {
    ALIGN_CONTENT: {
      ...COMMON_FLEX_VALUES,
      SPACE_AROUND: 'space-around',
      SPACE_BETWEEN: 'space-between',
      STRETCH: 'stretch',
    },
    ALIGN_ITEMS: {
      ...COMMON_FLEX_VALUES,
      BASELINE: 'baseline',
      STRETCH: 'stretch',
    },
    BORDER: THEME.COLORS.PRIMARY,
    JUSTIFY_CONTENT: {
      ...COMMON_FLEX_VALUES,
      SPACE_AROUND: 'space-around',
      SPACE_BETWEEN: 'space-between',
      SPACE_EVENLY: 'space-evenly',
    },
    MARGIN: {
      DEFAULT: '0',
    },
    PADDING: {
      DEFAULT: '0.5em 0.4em 0.1em 0.1em',
      BUTTONS: '0.5em 0.25em 0.1em 0.25em',
      OVERALL: '0.5em 0.2em 0.2em 0.2em',
      NONE: '0',
    },
    WIDTH_OVERALL: '90%',
  },
  GRID: {
    GAP: {
      DEFAULT: '0',
    },
    HEIGHT: {
      DEFAULT: '100vh',
    },
    PADDING: {
      DEFAULT: '0',
    },
    MARGIN: {
      DEFAULT: '0',
    },
    TEMPLATE: {
      PRIMARY: '4.5em auto',
      SECONDARY: '15em 10fr ',
      GOL_AREA: '1fr 3em',
    },
    JUSTIFY_CONTENT: {
      ...COMMON_FLEX_VALUES,
      SPACE_AROUND: 'space-around',
      SPACE_BETWEEN: 'space-between',
      SPACE_EVENLY: 'space-evenly',
    },
  },
  HEADER: {
    BACKGROUND_COLOR_INFO: THEME.COLORS.QUATERNARY,
    COLOR_INFO: THEME.COLORS.BLUE,
    TEXT_ALIGN: 'center',
    PADDING: '0.4em 0 0.4em',
    BORDER: {
      RADIUS: '0',
      STYLE: 'solid',
      WIDTH: '2px',
      COLOR: THEME.COLORS.TERTIARY,
    },
  },
  ICON: {
    BASE_SIZE: '0.082em',
    BORDER_RADIUS: {
      HOVER: '0 0.4em 0.4em 0',
      BOTTOM_RIGHT: '0.3em',
      TOP_RIGHT: '0.3em',
    },
    MARGIN: '0',
    PADDING: '0',
    VERTICAL_ALIGN: 'middle',
  },
  INPUTS: {
    BACKGROUND_COLOR: THEME.COLORS.WHITE,
    BORDER: {
      STYLE: 'solid',
      RADIUS: '0.4em',
      WIDTH: {
        TEXT: '0 0 1px 0',
        SELECT: '1px 0 0 1px',
      },
    },
    BOX_SHADOW: {
      NONE: 'none',
      FOCUS: `0 0 5px ${THEME.COLORS.PRIMARY}`,
      DISABLED: '0 0 0 1px transparent inset',
    },
    COLOR: THEME.COLORS.TEXT,
    FONT: {
      FAMILY: 'arial',
      SIZE: '0.82em',
      SPACING: '0em',
      WEIGHT: 'normal',
    },
    OUTLINE_COLOR: THEME.COLORS.BLUES.DEFAULT,
    MARGIN: {
      SELECT: '0.2em -1px 0.2em 0.4em',
      TEXT: '0.2em 0 0.2em 0.4em',
    },
    PADDING: '0.4em',
    WIDTH: {
      SELECT: '8.7em',
      TEXT: '8em',
    },
  },
  LABEL: {
    COLOR: THEME.COLORS.TEXT,
    FONT: {
      FAMILY: 'arial',
      SIZE: '0.9em',
      WEIGHT: {
        DEFAULT: 'lighter',
        BOLD: 'bolder',
      },
    },
    TEXT_ALIGN: {
      LEFT: 'flex-start',
      RIGHT: 'flex-end',
    },
    MARGIN: {
      LEFT: '0.7em',
    },
    PADDING: '0.2em 0',
  },
  TITLE: {
    COLOR: {
      DEFAULT: THEME.COLORS.BLUES.DEFAULT,
    },
    FONT: {
      FAMILY: 'arial',
      SIZE: {
        SMALL: '0.9em',
        MEDIUM: '1.3em',
        BIG: '1.5em',
      },
      WEIGHT: {
        DEFAULT: '500',
        BOLD: '600',
      },
    },
    MARGIN: {
      SMALL: '0em 0.3em 0',
      NONE: '0em',
    },
    PADDING: {
      DEFAULT: '0.3em',
      NONE: '0',
      H3: '0 0 0.05em 0',
    },
    TEXT_SHADOW: `1.2px 1.2px 0px ${THEME.COLORS.SHADOW_LIGHT}`,
    VERTICAL_ALIGN: {
      DEFAULT: 'middle',
    },
  },
};

/**
 * ICONS_TITLES
 * regroupe les icônes SVG chargées dans l'application
 * @return Object of String
 */
export const ICONS_TITLES = {
  CELL: 'cell',
  DEAD_CELL: 'deadCell',
  LIVING_CELL: 'livingCell',
  NONE: 'none',
  PLAY: 'play',
  REFETCH: 'refetch',
  STOP: 'stop',
  TRASH: 'trash',
};

/**
 *
 * LABELS
 * Regroupe les textes affichés dans l'application
 *
 */
export const LABELS = {
  HEADER_TITLE: 'Game Of Life',
  BUTTONS: {
    RESET: 'Reset data',
    CREATE: 'Fill randomly',
    START_LIFE: 'Start life',
    STOP_LIFE: 'Stop life',
    NEXT_STEP: 'Go to next step',
    CLEAR_LIFE: 'Clear living cells',
  },
  INPUTS: {
    DELAY: 'Delay (ms)',
    HEIGHT: 'Height',
    RANDOMN_CELL_NUMBER: 'Number',
    MODE: 'Mode',
    WIDTH: 'Width',
  },
  NO_VALUE: 'Non défini',
  SETTINGS_AREA: {
    COMMANDS: 'Commands',
    RESET: 'Reset all world',
    RANDOMN: 'Create randomn living cells',
    WORLD: 'Game of Life parameters',
  },
};

/**
 *
 * CELLS_IMAGES
 * Regroupe les images SVG utilisées comme background image pour es IconButtons
 *
 */
export const CELLS_IMAGES = {
  DEAD_CELL: '/assets/img/dead.svg',
  LIVING_CELL: '/assets/img/living.svg',
};

export const renderList = {
  ...CELLS_IMAGES,
  ...ICONS_TITLES,
  ...LABELS,
  ...LAYOUT,
  ...THEME,
};

export default renderList;
