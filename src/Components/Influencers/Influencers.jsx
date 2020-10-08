import React, { Component }   from 'react';
import axios from 'axios';
import InfluencerCard from './InfluencerCard';
import { Grid, Typography } from '@material-ui/core';

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
    return (
      <Grid container direction="row">
        <Grid item xs={12}>
          <Typography>Influencers</Typography>
        </Grid>
        <Grid item xs={5}>
          {this.state.api.map(api => 
            <InfluencerCard 
              handle={"@" + api.handler}
              indicator={api.status}
              date="" message={api.status} />)}
        </Grid>         
      </Grid>
  );
  }
}

export default Influencers;