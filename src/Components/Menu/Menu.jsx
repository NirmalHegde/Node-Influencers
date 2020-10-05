import React from 'react';
import companyLogo from './companyLogo.png';
import { Paper, Avatar, Typography, Divider, Button } from '@material-ui/core';
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

    return (
        <Paper className={classes.root} variant="outlined" square>
            {/*Company section to tell which company is being looked at*/}
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
            <Button className={classes.inactiveButton} startIcon={<DashboardIcon />}>Dashboard</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<SearchIcon />}>My Nodes</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<PeopleIcon />}>Influencers</Button> {/*Active button in this webpage*/}
            <br />
            <Button className={classes.inactiveButton} startIcon={<ImageIcon />}>Content</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<StarIcon />}>Favourite</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<RateReviewIcon />}>Reviews</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<AccountBoxIcon />}>Profile</Button>
            <br />
        </Paper>
    );
};
