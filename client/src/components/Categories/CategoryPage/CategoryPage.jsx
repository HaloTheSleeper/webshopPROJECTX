import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { commerce } from '../../../lib/commerce';

import useStyles from './styles'

import Product from './Product/Product';

const CategoryPage = ({ onAddToCart }) => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [categoryPictureUrl, setCategoryPictureUrl] = useState("");

    const classes = useStyles();

    async function fetchProducts(id) {
        const { data } = await commerce.products.list({category_id: id});

        console.log("Products of category", id + ":", data);
        setProducts(data);
    }

    async function fetchCategory(id) {
        const data = await commerce.categories.retrieve(id);
        
        console.log(data);
        setCategory(data);
        setCategoryPictureUrl(data.assets[0].url)
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        
        fetchCategory(id[2]);
        fetchProducts(id[2]);
    }, []);
  
    return (
        <main>
            <section className={classes.introduction}>
                <div className={classes.imageBox}>
                    <img className={classes.pictureOfCreator} src={categoryPictureUrl} alt="Picture of the Creator"/>
                </div>  
                <article className={classes.text}>
                    <div className={classes.textHeader}>
                        <h1>{category.name}</h1>
                    </div>
                    <div className={classes.textParagraph}>
                        <p>{category.description}</p>
                    </div>
                </article>
            </section>
            <section className={classes.content}>
                <div className={classes.toolbar}/>
                <header className={classes.headerClass}>
                    <h2 className={classes.header}>Available for order</h2>
                </header>
                <Grid container justifyContent="center" spacing={4}>
                    {products.map((product) => (
                        <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                            <Product product={product} onAddToCart={onAddToCart}/>
                        </Grid>
                    ))}
                </Grid>
            </section>
        </main>
    );
};

export default CategoryPage;