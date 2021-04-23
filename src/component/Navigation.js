import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bar: {
        background: '#333',
    },
    headerButtonHome: {
        marginLeft: 'auto',
        color: 'white'
    },
    headerButton: {
        color: 'white'
    },
});


const Navigation = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" className={classes.bar}>
            <Toolbar>
                <h3>BoBroccoli</h3>
                
                <Button size="small" className={classes.headerButtonHome}>
                    Home
                </Button>

                <Button size="small" className={classes.headerButton}>
                    About Me
                </Button>

                <Button size="small" className={classes.headerButton}>
                    Experiences
                </Button>

                <Button size="small" className={classes.headerButton}>
                    Services
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;