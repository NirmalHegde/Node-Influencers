import React from 'react';
import companyLogo from './companyLogo.png';
import { Grid, Paper, Avatar, Typography, Divider, Button, Tab, Tabs } from '@material-ui/core';
import Influencers from "../Influencers/Influencers";
import Placeholder from "../Placeholder/Placeholder";

import AddIcon from '@material-ui/icons/Add';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/People';
import ImageIcon from '@material-ui/icons/Image';
import StarIcon from '@material-ui/icons/Star';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuStyles from "./MenuStyles";

//sidebar section of the website
export default function Menu() {

    const classes = MenuStyles(); //gets styles from MenuStyles.jsx
    const [tab, setTab] = React.useState(2);

    const handleChange = (event, newValue) => {
        setTab(newValue);
    };

    return (
        <Grid container direction="row">
            <Grid item xs={12} sm={2}>
                <Paper square className={classes.root}>
                    <Avatar className={classes.companyLogo} alt="company logo" src={companyLogo} />
                    <Typography className={classes.companyText}>
                        <b>Smash Kitchen</b>
                        <br />
                        Restaurant
                    </Typography>

                    <Divider variant="middle" />

                    {/*Main buttons of the website*/}
                    <Button variant="contained" className={classes.createButton} startIcon={<AddIcon />}><b>Create Node</b></Button>
                    <br />
                    <Tabs
                        orientation="vertical"
                        value={tab}
                        onChange={handleChange}
                    >
                        <Tab label={<div> <DashboardIcon className={classes.dashboardIcon} /> &nbsp; Dashboard </div>} />
                        <Tab label={<div> <SearchIcon className={classes.myNodesIcon} /> &nbsp; My Nodes </div>} />
                        <Tab label={<div> <PeopleIcon className={classes.influencersIcon} /> &nbsp; Influencers </div>} />
                        <Tab label={<div> <ImageIcon className={classes.contentIcon} /> &nbsp; Content </div>} />
                        <Tab label={<div> <StarIcon className={classes.favouriteIcon} /> &nbsp; Favourite </div>} />
                        <Tab label={<div> <RateReviewIcon className={classes.reviewsIcon} /> &nbsp; Reviews </div>} />
                        <Tab label={<div> <AccountBoxIcon className={classes.profileIcon} /> &nbsp; Profile </div>} />
                    </Tabs>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={9}>
                {tab === 0 && <Placeholder />}
                {tab === 1 && <Placeholder />}
                {tab === 2 && <Influencers />}
                {tab === 3 && <Placeholder />}
                {tab === 4 && <Placeholder />}
                {tab === 5 && <Placeholder />}
                {tab === 6 && <Placeholder />}
            </Grid>
        </Grid>

    );
};

