import React from 'react';
import { AppBar, Toolbar, Menu, MenuItem, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
    hamberger: {
        marginLeft: 'auto',
    },
});


const Navigation = () => {
    
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <h3>BoBroccoli</h3>
                <IconButton className={classes.hamberger}>
                    <MenuIcon onClick={handleClick}/>
                </IconButton>
                <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem >Profile</MenuItem>
                <MenuItem >My account</MenuItem>
                <MenuItem >Logout</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;