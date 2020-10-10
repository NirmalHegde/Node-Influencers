import React from 'react';
import { Typography } from '@material-ui/core';
import PlaceholderStyles from './PlaceholderStyles';

export default function InfluencerCard(props) {
    const classes = PlaceholderStyles();
 
    return (
        <Typography className={classes.placeholder}>Coming Soon!</Typography>
    );
  }
