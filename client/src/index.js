import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {MuiThemeProvider, createTheme } from '@material-ui/core/styles';

import App from './App';


const theme = createTheme({
    palette: {
        primary: {
            main: "#2aabdf"
        }
    }
});

function App2() {
    return ( 
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    )
}

ReactDOM.render(<App2/>, document.getElementById('root'));