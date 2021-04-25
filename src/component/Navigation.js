import React from 'react';
import { useHistory } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    bar: {
        background: '#333',
        position: 'fixed'
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
    let history = useHistory();  
    const _clickHome=() => {
        let path = `/home`;
        history.push(path);
    };
    const _clickExperience=() => {
        console.log("Clicked")
        let path = `/experience`;
        history.push(path);
    };

    return (
        <AppBar className={classes.bar}>
            <Toolbar>
                <h3>BoBroccoli</h3>
                
                <Button size="small" className={classes.headerButtonHome} onClick={_clickHome}>
                    Home
                </Button>

                <Button size="small" className={classes.headerButton}>
                    About Me
                </Button>

                <Button size="small" className={classes.headerButton} onClick={_clickExperience}>
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