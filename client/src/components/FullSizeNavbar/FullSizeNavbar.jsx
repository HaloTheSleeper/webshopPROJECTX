import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import OpenScreen from '../OpenScreen/OpenScreen';
import useStyles from './styles';

import logo from '../../assets/mainlogo.png';

const FullSizeNavbar = ({totalItems}) => {
    const classes = useStyles();
    const [correctPath, setCorrectPath] = useState(true)
    const location = useLocation();

    useEffect(() => {
        setCorrectPath(location.pathname == "/");
    }, [location]);

    return(
        <>  
            { correctPath ? 
            <header className={classes.openscreen}>
                <OpenScreen/>
            </header>
            :
            <></>
            }
            
            <nav className={classes.appBar} color="inherit">
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
            </nav> 
        </>
    )
};

export default FullSizeNavbar;