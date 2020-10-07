import React from 'react';
import headerLogo from './headerLogo.png'
import { AppBar, Toolbar, IconButton, Divider } from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HeaderStyles from "./HeaderStyles";

//header section of website
const Header = () => {
    const classes = HeaderStyles(); //gains styles from HeaderStyles.jsx

    return (
    <AppBar className={classes.root} position="static"> {/*Static ensures header is always visible (scalability)*/}
        <Toolbar>
            <img alt='Node' className={classes.logo} src={headerLogo}></img> {/*Website Logo*/}

            <div className={classes.dividerSpacing} />

            <Divider orientation="vertical" flexItem />

            <div className={classes.exitSpacing}></div>

            <IconButton aria-label="exit"> {/*Exit button, functionality can be added as seen fit using onClick*/}
                <ExitToAppIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
    );
};

export default Header;


