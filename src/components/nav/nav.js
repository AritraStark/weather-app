import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
import { Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      color: "white",
      textDecoration: "none",
    },
    link:{
      color: "white",
      textDecoration: "none",
    }
}));

function Nav() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                    </IconButton>
                    <Link to="/"  className={classes.title}>
                      <Typography variant="h3">Weather</Typography>
                    </Link>
                    
                    
                    <Link to="/current" className={classes.link}>
                      <Button color="inherit">Current</Button>
                    </Link>
                    <Link to="/history" className={classes.link}>
                      <Button color="inherit">Forecast</Button>
                    </Link>
                </Toolbar>
            </AppBar>            
        </div>
    )
}

export default Nav;
