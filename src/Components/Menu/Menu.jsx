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
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        height: "700px",
        width: "100%",
    },
    companyLogo: {
        padding: "2% 44%"
    },
    companyText: {
        textAlign: "center",
        padding: "3%"
    },
    createButton: {
        borderRadius: 20,
        background: "#FFFFFF",
        fontFamily: "Montserrat",
        textTransform: "none",
        color: "primary",
        marginTop: "8%",
        marginBottom: "6%",
        marginLeft: "20%",
    },
    inactiveButton: {
        textTransform: "none",
        color: "primary",
        justifyContent: "flex-start",
        width: "100%",
        padding: "4% 12%"

    },
    activeButton: {
        textTransform: "none",
    }
}));

export default function Menu() {
    const classes = useStyles();

    return (
        <Paper className={classes.root} variant="outlined" square>
            <Avatar className={classes.companyLogo} alt="company logo" src={companyLogo} />
            <Typography className={classes.companyText}>
                <b>Smash Kitchen</b>
                <br />
                Restaurant
            </Typography>

            <Divider variant="middle" />

            <Button variant="contained" className={classes.createButton} startIcon={<AddIcon />}><b>Create Node</b></Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<DashboardIcon />}>Dashboard</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<SearchIcon />}>My Nodes</Button>
            <br />
            <Button className={classes.inactiveButton} startIcon={<PeopleIcon />}>Influencers</Button>
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
