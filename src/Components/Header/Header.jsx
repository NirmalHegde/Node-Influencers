import React from 'react';
import headerLogo from './headerLogo.png'
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
    root: {
        background: "#FFFFFF"
    }
}))

const Header = () => {
    const classes = useStyles();

    return (
    <AppBar className={classes.root} position="static">
        <Toolbar>
            <img alt='Node' src={headerLogo}></img>

            <IconButton aria-label="delete">
                <ExitToAppIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    );
};

export default Header;


