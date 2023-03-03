import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { commerce } from '../../../lib/commerce';
import PaymentForm from '../PaymentForm';
import AddressForm from '../AddressForm';

import useStyles from './styles';
const steps = ['Delivery details', 'Payment details'];



const Checkout = ({ cart, order, onCaptureCheckout, error}) => {
  const [activeStep, setActiveStep] = useState(0);
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const [orderPassword, setOrderPassword] = useState('');
  const classes = useStyles();
  

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
        console.log(token);
        setCheckoutToken(token);
      } catch (error){
        console.log(error)

      }
    }

    generateToken();
  }, [cart]);

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
    setOrderPassword(data.orderPassword);
  };
 


  //console.log(order);

  let Confirmation = () => (order.customer ? (
    <div className={classes.confirmationFix}> 
      <div>
        <Typography variant="h5">Thank You for Your purchase, You will be notified when Your content is ready and uploaded to the system. You can access that content only with Your Order password.</Typography>
        <Divider className={classes.divider}/>
        <Typography variant="subtitle2">Email: {order.customer.email} </Typography>
        <br/>
        <Typography variant="subtitle2">Order Password: {orderPassword} </Typography>
      </div>
        <br/>
        <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </div>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress/>

    </div>
  ));

  if(error) {
    <>
      <Typography variant="h5">Error: {error}</Typography>
      <br/>
      <Button component={Link} to="/" variant="outlined" type="button">Back to Home</Button>
    </>
  }

  const Form = () => (activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken} next={next} setShippingData={setShippingData}/>
    : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} onCaptureCheckout={onCaptureCheckout}/>);
  return (
    <div className={classes.wholeShit}>
      <CssBaseline/>
      <div className={classes.toolbar}/>
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Checkout</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form />}
        </Paper>
      </main>
    </div>
    )
};


export default Checkout;