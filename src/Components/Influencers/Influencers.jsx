//Import React, Axios, and Material UI Libraries
import React, { Component }   from 'react';
import axios from 'axios';
import { Grid, Typography } from '@material-ui/core';
import { withStyles } from "@material-ui/core/styles";

//File Imports
import InfluencerCard from './InfluencerCard';
import profilePic from "./profilePic.png"

//Quick Styling for margins and Title
const styles = theme => ({
  root: {
    marginTop: "1.5%",
    marginLeft: "4%",
  },
  title: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#404040",
  }
});

//Higher level layout for Influencers page
class Influencers extends Component {
  //used for storing backend API data
  state = {
    api: [],
  };

  //using axios, send get request to API and set state of api storage to the response data (error check for edge cases)
  componentDidMount() {
    axios.get('https://1pzb5pyogj.execute-api.us-east-1.amazonaws.com/prod?businessId=us-east-1:a7584b1c-f10f-4747-9573-dee791a48297')
      .then(response => {
        console.log(response.data);
        this.setState({api: response.data})
      
      }).catch(error => {
        console.log(error.data);
      }) 
  }

  render() {
    const { classes } = this.props; //import quick styles
    //Messages for cards
    const claimedMessage = "Claimed your node Snow Allure Vodka - Luxury Moments";
    const shippedMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse velit massa";
    const submittedMessage = "Sed sagittis sem leo, non blandit est tempor at. Cras a urna eget nulla lobortis placerat.";

    return (
      //Set grid for Influencers section
      <Grid className={classes.root} container spacing={3}>
        {/*Title for Influencers*/}
        <Grid item xs={12}>
          <Typography className={classes.title}>Influencers</Typography>
        </Grid>

        {/*Map data from Backend API to Influencer Cards for display*/}
        {this.state.api.map(api => 
            <Grid key={api.nodeId + api.instagramId} item xs={12} sm={6}> {/*Setup for each Card with unique nodeID key*/}
              <InfluencerCard
                //Export to Avatar
                profilePic={profilePic}
                //Export to Title
                handler={"@" + api.handler + "-" + api.instagramId + "  " + api.name.split(" ")[0]}
                //Change indicator data based on status and export to indicator
                indicator={(api.status === "claimed") ? "Claimed" : (api.status === "activate") ? "Shipped" : "Submitted"}
                //Convert date parameter to readable value then remove day of the week using substring and add comma after month and day number
                date={new Date(api.date).toDateString().substring(4).slice(0,6) + "," + new Date(api.date).toDateString().substring(4).slice(6)}
                //Change message based on status then export to subHeader
                message={(api.status === "claimed") ? claimedMessage : (api.status === "activate") ? shippedMessage : submittedMessage}           
              />
            </Grid>
        )}        
      </Grid>
  );
  }
}

export default withStyles(styles, { withTheme: true })(Influencers);