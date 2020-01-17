import React from 'react';

import { HeaderContainer, LifeContainer, SettingsContainer } from 'containers';
import Grid from 'components/Grid';

import { LAYOUT } from 'utils/constants/render';

import 'index.css';

const { GRID } = LAYOUT;

/**
 *
 * App
 * point d'entrée de l'Application secondary - primary
 *
 */
const App = () => (
  <Grid
    tertiary
    templateRows={GRID.TEMPLATE.PRIMARY}
    height={GRID.HEIGHT.DEFAULT}
  >
    <HeaderContainer />
    <Grid
      tertiary
      justifyItems={GRID.JUSTIFY_CONTENT.CENTER}
      templateColumns={GRID.TEMPLATE.SECONDARY}
      width="100%"
    >
      <SettingsContainer />
      <LifeContainer />
    </Grid>
  </Grid>
);

export default App;
