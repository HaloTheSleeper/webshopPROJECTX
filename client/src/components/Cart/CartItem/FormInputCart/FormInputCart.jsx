import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

const styles = theme => ({
    textField: {
        border: "3px solid white"
    }
})

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
  
    return (
        <Grid item xs={12} sm={6}>
            <Controller
               defaultValue=""
               control={control} 
               name={name} 
               render = {({ field }) => (
                  <TextField
                      {...field}
                      name={name}
                      fullWidth
                      label={label}
                      required={required}
                      InputProps={{
                        style: { backgroundColor: "darkgrey",
                        maxWidth: "400px",
                        fontSize: "15px",
                        borderRadius: "3px"
                                 
                    }
                      }}/>
               )}
        
            />
        </Grid>
        
    );
};

export default FormInput;