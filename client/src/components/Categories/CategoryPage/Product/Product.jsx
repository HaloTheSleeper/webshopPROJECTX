import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography,  IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
  let description = product.description;
  
  if (description.length > 100) {
    const descriptionCutIndex = product.description.indexOf(' ', 120) + 1;
    description = product.description.substring(0, descriptionCutIndex) + "...";
  };

  const classes = useStyles();

  const handleAddToCart = () => {
    onAddToCart(product.id, 1);
  }


  return (
   <Card className={classes.root} >
     <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
        <CardContent>
          <div className={classes.cardContent}>
            <Typography variant="h5" gutterBottom style={{color: "white"}}>
              {product.name}
            </Typography>
            <Typography variant="h5" style={{color: "white"}}>
              {product.price.formatted_with_symbol}
            </Typography>
          </div>
          <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" style={{color: "#999999"}}/>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
          <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
            <AddShoppingCart style={{color: "white"}}/>
          </IconButton>
        </CardActions>
    </Card>
  );
};

export default Product;