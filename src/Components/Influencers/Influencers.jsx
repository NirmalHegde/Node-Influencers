import React from 'react';
import Card from './Card';
import { Grid, Typography } from '@material-ui/core';

export default function Influencers() {

  return (
      <Grid container spacing={7}>
        <Typography>Influencers</Typography>
        <Grid item xs={5}>
          <Card
            handle="@potato"
            indicator="claimed"
            date="today"
            message="hi"
          />
        </Grid>         
      </Grid>
  );
}