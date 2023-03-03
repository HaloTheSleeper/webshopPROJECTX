import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from './assets/mainlogo.png';
import useStyles from './styles/navbar2/navbar2styles';

const Navbar2 = () => {
    const classes = useStyles();

    return (
        <header>
            <nav>
                <AppBar className={classes.appBar} color="inherit">
                    <Toolbar>
                        <Link to="/">
                            <img src={logo} alt="Logo" className={classes.image} />
                        </Link>
                        <div className={classes.header}>
                            <Typography variant="h6" className={classes.title} color="inherit">
                                Project X
                            </Typography>
                        </div>
                        <div className={classes.grow} />
                        <div className={classes.button}>
                            <IconButton component={Link} to="/" aria-label="TO HOME" color="inherit" >
                                <Badge overlap="rectangular" color="secondary">
                                    <Home fontSize="large" className={classes.home} />
                                </Badge>
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </nav>
        </header>   
    )
};

export default Navbar2;