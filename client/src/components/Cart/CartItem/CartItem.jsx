import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './FormInputCart/FormInputCart';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart, addToPreferationsList }) => {
    const classes = useStyles();
    const methods = useForm();


    return (
        <div className={classes.window}>
            <CardMedia image={item.image.url} alt={item.name} className={classes.media}/>
            <CardContent className={classes.cardContent}>
                <Typography style={{color: "white"}} variant="h4">{item.name}</Typography>
                <Typography variant="h5" style={{color: "white"}}>{item.line_total.formatted_with_symbol}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    {/*<h2 className={classes.buttonAdd}  onClick={() => onUpdateCartQty( item.id, item.quantity - 1)}>-</h2></CardActions>*/}
                    <Typography className={classes.quantityDisplay}>{item.quantity}</Typography>
                    <a className={classes.removeFromCartButton} onClick={() => onRemoveFromCart(item.id)}>REMOVE</a>
                    {/*<h2 className={classes.buttonAdd} onClick={() => onUpdateCartQty( item.id, item.quantity + 1)}>+</h2>*/}
                </div>
                {/*<Button variant="contained" type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>*/}
            </CardActions>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => {
                    data.name = item.name;
                    addToPreferationsList(data);
                    })}>
                    <FormInput required label="Add your preferations" name="preferation"/>
                    <br/>
                    <Button type="submit" variant="contained" color="primary">Save</Button>
                </form>
            </FormProvider>
        </div>
    )
}

export default CartItem