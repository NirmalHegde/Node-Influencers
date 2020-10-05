import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Influencers from './Components/Influencers/Influencers';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
      background: "#F9F9F9"
  }
}))

function App() {
  const classes = useStyles();
  return (
    //layout of node website
    <Grid className={classes.root} container direction = "column">
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
