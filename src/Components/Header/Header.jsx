//React/Material UI Libraries
import React from 'react';
import { AppBar, Toolbar, IconButton, Divider } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

//File Imports
import headerLogo from './headerLogo.png'
import HeaderStyles from "./HeaderStyles";

//header section of website
const Header = () => {
    const classes = HeaderStyles(); //gains styles from HeaderStyles.jsx

    return (
        //container for header of website
        <AppBar className={classes.root} position="static"> {/*Static ensures header is always visible*/}
            <Toolbar>
                <img alt='Node' className={classes.logo} src={headerLogo}></img> {/*Node Logo*/}

                <div className={classes.dividerSpacing} /> {/*spacing for line*/}

                <Divider orientation="vertical" flexItem />

                <div className={classes.exitSpacing}></div> {/*spacing for exit button*/}

                {/*Exit button; functionality can be added as seen fit using onClick*/}
                <IconButton aria-label="exit">
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Header;


