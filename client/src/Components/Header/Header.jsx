import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    typographyStyles: {
        flex: 1
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
    <AppBar position="static">
        <Toolbar>
            <Typography className={classes.typographyStyles}>Node</Typography>
        </Toolbar>
    </AppBar>
    );
};

export default Header;


