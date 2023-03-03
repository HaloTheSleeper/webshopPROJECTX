import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, addToPreferationsList, preferations }) => {
    /*const isEmpty = !cart.line_items.length;*/
    const isEmpty = Object.keys(cart).length && !cart.line_items.length;
    const classes = useStyles();

    const EmptyCart = () => (
        <section className={classes.emptyCart}>
            <article className={classes.textBox}>
                <h2 className={classes.emptyCartH2}>The cart seems to be empty.</h2>
                <p className={classes.emptyCartP}>Try adding some items to Your Shopping Cart.</p>
            </article>
            <br/>
            {/*<Button className={classes.emptyCartButton} component={Link} to="/" type="button" size="large" variant="contained" color="primary">Back To Shop</Button>*/}
            <Link to="/" className={classes.emptyCartButton2}><a> BACK TO SHOP</a></Link>
        </section>  
    );

    const FilledCart = () => (
        <>
           <Grid container spacing={1}>
                {cart.line_items?.map((item) => (
                    <Grid item xs/*={12}*/ sm/*={4}*/ key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} addToPreferationsList={addToPreferationsList}/>
                    </Grid>
                ))}
           </Grid>
           <section className={classes.cardDetails}>
               <Typography variant="h4" style={{color: "white", fontSize: "calc(2.1vw + 100%)", marginRight: "5vw"}}>Subtotal: {cart.subtotal?.formatted_with_symbol}</Typography>
               <div className={classes.buttons}>
                    {/*<Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>*/}
                    <a className={classes.buttonEmptyCart} onClick={() => handleEmptyCart()}>EMPTY CART</a>
                    <div className={classes.lineBreaker}/>
                    {/*<Button component={Link} to="/" type="button" size="large" variant="contained" color="primary" className={classes.backButton}>Back To Shop</Button>*/}
                    <Link to="/" className={classes.backToShopAndCheckoutButton}><a>BACK TO SHOP</a></Link>
                    <div className={classes.lineBreaker2}/>
                    {/*<Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>*/}
                    <div /*to="/checkout"*/ onClick={() => {
                        if(preferations.length != cart.line_items.length) {
                            alert("Add preferations to each of the products.");
                        } else {
                            window.location.pathname = "/checkout";
                        };
                    }} className={classes.backToShopAndCheckoutButton} style={{width: "calc(97px + 1.1vw)"}}><a>CHECKOUT</a></div>

               </div>
           </section>
        

        </>
    )

    if(!cart.line_items) return 'Loading...';

    return (
        <Container className={classes.wholeShit}>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart