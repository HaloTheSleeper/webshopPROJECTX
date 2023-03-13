import React, { useState } from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography,  IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

import useStyles from './styles'

import OrderProcessorBox from '../../OrderProcessorBox/OrderProcessorBox';
import CategoryDisplay from './CategoryDisplay/CategoryDisplay';

const CategoriesFrontPage = ({ categories, fetchCategoryProducts }) => {
    const classes = useStyles();
  
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <section className={classes.headerClass}>
                <h1 className={classes.header}>Creators</h1>
            
                <Grid container justifyContent="center" spacing={4}>
                    {categories.map((category) => (
                        <Grid key={category.id} item xs={12} sm={6} md={4} lg={3}>
                            <CategoryDisplay category={category} fetchCategoryProducts={fetchCategoryProducts}/>
                        </Grid>
                    ))}
                </Grid>
            </section>
            <hr className={classes.divider}/>
            <OrderProcessorBox/>
        </main>
    );
};

export default CategoriesFrontPage;
