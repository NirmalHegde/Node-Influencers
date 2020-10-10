import React, { Component }   from 'react';
import axios from 'axios';
import InfluencerCard from './InfluencerCard';
import profilePic from "./profilePic.png"
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    marginTop: "1%",
    marginLeft: "1%",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
  }
});


class Influencers extends Component {
  state = {
    api: [],
  };

  componentDidMount() {
    axios.get('https://1pzb5pyogj.execute-api.us-east-1.amazonaws.com/prod?businessId=us-east-1:a7584b1c-f10f-4747-9573-dee791a48297')
      .then(response => {
        console.log(response.data);
        this.setState({api: response.data});
      })
  }

  render() {
    const { classes } = this.props;
    const claimedMessage = "Claimed your node ";
    const shippedMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit massa";
    const submittedMessage = "Sed sagittis sem leo, non blandit est tempor at. Cras a urna eget nulla lobortis placerat.";

    return (
      <Grid className={classes.root} container spacing={3}>
        <Grid item xs={12}>
          <Typography className={classes.title}>Influencers</Typography>
        </Grid>
        {this.state.api.map(api => 
            <Grid key={api.nodeId + api.instagramId} item xs={12} sm={6}>
              <InfluencerCard
                profilePic={profilePic} 
                handler={"@" + api.handler + "-" + api.instagramId}
                indicator={(api.status === "claimed") ? "Claimed" : (api.status === "activate") ? "Shipped" : "Submitted"}
                date=""
                message={(api.status === "claimed") ? claimedMessage + api.name : (api.status === "activate") ? shippedMessage : submittedMessage}
                id={api.nodeId}            
              />
            </Grid>
        )}        
      </Grid>
  );
  }
}

export default withStyles(styles, { withTheme: true })(Influencers);