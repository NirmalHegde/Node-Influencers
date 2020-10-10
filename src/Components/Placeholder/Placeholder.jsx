//React/Material UI Libraries
import React from 'react';
import { Typography } from '@material-ui/core';

//File Imports
import PlaceholderStyles from './PlaceholderStyles';

//Placeholder for all webpages aside from Influencers
export default function InfluencerCard(props) {
    const classes = PlaceholderStyles();
 
    return (
        <Typography className={classes.placeholder}>Coming Soon!</Typography>
    );
  }
