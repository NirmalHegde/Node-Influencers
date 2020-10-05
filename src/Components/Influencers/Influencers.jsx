import React from 'react';
import InfluencerCard from './InfluencerCard';
import { Grid, Typography } from '@material-ui/core';


export default function Influencers() {
  return (
      <Grid container>
        <Grid item xs={12}>
          <Typography>Influencers</Typography>
        </Grid>
        <Grid item xs={5}>
          <InfluencerCard
            handle="@potato"
            indicator="claimed"
            date="today"
            message="hi"
          />
        </Grid>         
      </Grid>
  );
}