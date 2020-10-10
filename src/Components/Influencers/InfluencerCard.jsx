import React from 'react';
import InfluencerCardStyles from './InfluencerCardStyles';
import { Card, CardHeader, CardActionArea, Avatar, Typography } from '@material-ui/core';

export default function InfluencerCard(props) {
  const classes = InfluencerCardStyles();
  const { handler, indicator, date, message, profilePic } = props;

  return (
    <Card style={{height:"100%"}}>
        <CardActionArea style={{height:"100%"}}>
          <CardHeader
              classes={{
                root: classes.root,
                avatar: classes.avatar,
                action: (indicator === "Claimed") ? classes.actionClaimed : (indicator === "Submitted") ? classes.actionSubmitted : classes.actionShipped,
                subheader: classes.subheader,
              }}
              avatar={ <Avatar alt="Profile Picture" src={profilePic} /> }
              title={<Typography className={classes.title}>{handler}</Typography>}
              subheader={<div><b>{date}</b>{" - " + message}</div>}
              action={<Typography className={classes.actionSize}>{indicator}</Typography>}
          />
        </CardActionArea>
    </Card>
  );
}