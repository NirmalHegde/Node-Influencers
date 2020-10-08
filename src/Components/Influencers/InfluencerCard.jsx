import React from 'react';
import profilePic from "./profilePic.png"
import Avatar from '@material-ui/core/Avatar';
import { Card, CardContent, Typography, CardHeader } from '@material-ui/core';

export default function InfluencerCard(props) {
  const { handle, indicator, date, message } = props;

  return (
    <Card>
        <CardHeader
            avatar={ <Avatar alt="Profile Picture" src={profilePic} /> }
            title={handle}
            subtitle={indicator}
        />
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          <b>{date}</b> - {message}
        </Typography>   
      </CardContent>
    </Card>
  );
}