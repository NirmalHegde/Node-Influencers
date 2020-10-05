import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Influencers from './Components/Influencers/Influencers';
import AppStyles from "./AppStyles";

//App contains layout of the node website
export default function App() {
  const classes = AppStyles(); //gets styles from AppStyles.jsx
  return (
    <Grid className={classes.root} container direction = "column">
      {/*Header section of the website*/}
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid container direction="row">
        {/*Sidebar section of the website*/}
        <Grid item xs={12} sm={2}>
          <Menu />
        </Grid>

        {/*Main Content Section*/}
        <Grid item xs={12} sm={10}>
          <Influencers />
        </Grid>
      </Grid>

    </Grid>
  );
}