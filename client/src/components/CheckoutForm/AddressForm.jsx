import { Typography, InputLabel, Select, MenuItem, Button, Grid } from '@material-ui/core';
import React, {useState, useEffect } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import { commerce } from '../../lib/commerce';


import FormInput from './CustomTextField';

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    const [shippingSubdivision, setShippingSubdivision] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();

    console.log(checkoutToken);

    const passwordText = "<h3> \"Order Password\" will later be used to access Your order in our system. You can set the password to what ever you want, but make sure it is secure. Billing details (place of origin, name, etc) are needed to make sure the transaction is not fraudulent.</h3>";
    const passwordTextStyle = {
        fontFamily: "Arial",
        color: "Gray",
        fontSize: "13px",
        textAlign: "center"
    };


    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    
        setShippingCountries(countries);
        setShippingCountry(Object.keys(countries)[0]);
    };
    
    const fetchSubdivisions = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);
    
        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0]);
    };
    
    const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });
    
        setShippingOptions(options);
        setShippingOption(options[0].id);
    };
    
    useEffect(() => {
        fetchShippingCountries(checkoutToken.id);
    }, []);
    
    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry);
    }, [shippingCountry]);
    
    useEffect(() => {
        if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
    }, [shippingSubdivision]);
    


    return (
        <>
            <Typography variant="h6" gutterBottom>Billing Address and other Details</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption }))}>
                    <Grid container spacing={3}>
                        <FormInput required name='firstName' label='First name'/>
                        <FormInput required name='lastName' label='Last Name'/>
                        <FormInput required name='address1' label='Address Line 1'/>
                        <FormInput required name='email' label='Your Email'/>
                        <FormInput required name='city' label='City'/>
                        <FormInput required name='zip' label='Zip / Postal code'/>
                        <FormInput required name='orderPassword' label='Order Password'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                        {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel>Town/State</InputLabel>
                           <Select value={shippingSubdivision} fullWidth onChange={(e) => setShippingSubdivision(e.target.value)}>
                               {Object.entries(shippingSubdivisions).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                                    <MenuItem key={item.id} value={item.id}>
                                      {item.label}
                                    </MenuItem>
                                ))}
                           </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                           <InputLabel>Shipping Options</InputLabel>
                           <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                               {shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` })).map((item) => (
                                   <MenuItem key={item.id} value={item.id}>
                                       {item.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <div style={passwordTextStyle} dangerouslySetInnerHTML={{ __html: passwordText}} />
                    </Grid>
                    <br/>
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <Button component={Link}  variant="outlined" to="/cart">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>

                    </div>

                </form>
            </FormProvider>
        </>
    );
}

export default AddressForm