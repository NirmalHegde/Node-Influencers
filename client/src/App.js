import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Components/Header';

function App() {
  return (
    <Grid container direction = "column">
      <Grid item>
        <Header/>
      </Grid>
    </Grid>
  );
}

export default App;
