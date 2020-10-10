import React from 'react';
import InfluencerCardStyles from './InfluencerCardStyles';
import { Card, CardHeader, CardActionArea, Avatar } from '@material-ui/core';

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
                title: classes.title,
                action: (indicator === "Claimed") ? classes.actionClaimed : (indicator === "Submitted") ? classes.actionSubmitted : classes.actionShipped,
                subheader: classes.subheader,
              }}
              avatar={ <Avatar alt="Profile Picture" src={profilePic} /> }
              title={handler}
              subheader={date+ " - "+message}
              action={indicator}
          />
        </CardActionArea>
    </Card>
  );
}