import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Influencers from './Components/Influencers/Influencers';

function App() {
  return (
    //layout of node website
    <Grid container direction = "column">
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid container direction="row">
        <Grid item xs={12} sm={2}>
          <Menu />
        </Grid>

        <Grid item xs={12} sm={10}>
          <Influencers />
        </Grid>
      </Grid>

    </Grid>
  );
}

export default App;
