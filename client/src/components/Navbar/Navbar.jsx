import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/mainlogo.png';
import OpenScreen from '../OpenScreen/OpenScreen';
import useStyles from './styles';


const Navbar = ({ totalItems }) => {
    const classes = useStyles();

    return (
        <nav>  
            <AppBar /*position="fixed"*/ className={classes.appBar} color="inherit">
                <Toolbar>
                    <Link to="/">
                        <img src={logo} alt="Logo" className={classes.image} />
                    </Link>
                    <div className={classes.header}>
                        <Typography variant="h6" className={classes.title} color="inherit">
                            PROJECT X
                        </Typography>
                    </div>
                   
                    <div className={classes.grow} />
                    
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge overlap="rectangular" badgeContent={totalItems} color="primary">
                                <ShoppingCart className={classes.shoppingCart}/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
       </nav>
    )
}

export default Navbar