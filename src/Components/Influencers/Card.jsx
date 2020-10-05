import React from 'react';
import profilePic from "./profilePic.png"
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Card,CardActions, CardContent, Button, Typography, CardHeader } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InfluencerCard(props) {
  const classes = useStyles();  
  const { handle, indicator, date, message} = props;

  return (
    <Card className={classes.root}>
        <CardHeader
            avatar={ <Avatar alt="Profile Picture" src={profilePic} /> }
            title={handle}
            subtitle={indicator}
        />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          <b>{date}</b> - {message}
        </Typography>   
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}