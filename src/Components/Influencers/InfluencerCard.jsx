//React/Material UI Libraries
import React from 'react';
import { Card, CardHeader, CardActionArea, Avatar, Typography } from '@material-ui/core';

//File Imports
import InfluencerCardStyles from './InfluencerCardStyles';

//Card Formatting for the Influencers page
export default function InfluencerCard(props) {
  const classes = InfluencerCardStyles(); //Styles taken from InfluencerCardStyles.jsx
  const { handler, indicator, date, message, profilePic } = props; //props from Influencers.jsx

  return (
    <Card style={{height:"100%"}}> {/*Makes Cards same size*/}
        <CardActionArea style={{height:"100%"}}> {/*Makes Card clickable*/}
          <CardHeader
              classes={{
                root: classes.root,
                avatar: classes.avatar,
                action: (indicator === "Claimed") ? classes.actionClaimed:
                        (indicator === "Submitted") ? classes.actionSubmitted:
                        classes.actionShipped, //changes colour of indicator based on value
                subheader: classes.subheader,
              }}
              //Import props from Influencers.jsx for use in cards
              avatar={<Avatar alt="Profile Picture" src={profilePic} />}
              title={<Typography className={classes.title}>{handler}</Typography>}
              subheader={<div><b>{date}</b>{" - " + message}</div>}
              action={<Typography className={classes.actionSize}>{indicator}</Typography>}
          />
        </CardActionArea>
    </Card>
  );
}