import React from 'react';
import useStyles from '../styles/OrderProcessorBox/OrderProcessorBox';
import orderProcessorLogo from '../../assets/orderProcessorLogo.png';

const OrderProcessorBox = () => {
    const classes = useStyles();

    function toFacility() {
        window.location = "/orders";
    };
    

    return (
        <section className={classes.wholeSection}>
            <header className={classes.localHeader}>
                <h2>Order Retrieval system</h2>
            </header>
            <article className={classes.wholeArticle}>
                <p>Project X offers a great way to access <br className={classes.breaker}/> the content You ordered, with our <br className={classes.breaker}/> own Order Retrieval System (clickable <br className={classes.breaker}/> link to the right).
                You just enter Your <br className={classes.breaker}/>Order-REF (created personally for You at the checkout <br className={classes.breaker}/>and e-mailed to You later on) and 
                Order <br className={classes.breaker}/>Password (which You create Yourself <br className={classes.breaker}/>at the checkout and will also be e-mailed <br className={classes.breaker}/>to You later on),
                then the system will let <br className={classes.breaker}/>You know the status of Your order and <br className={classes.breaker}/>if possible give You the content You ordered.</p>
            </article>
            <section className={classes.logo} onClick={toFacility}>
                <div className={classes.clickableLogoBox}>
                    <img src={orderProcessorLogo} alt="Order Processing System logo"/>
                    <br/>
                    <h3>Order Retrieval System</h3>
                </div>
            </section>
            
        </section>
   ) 
}

export default OrderProcessorBox