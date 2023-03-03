import React from 'react';

import logo from '../../assets/mainlogo.png';
import styles from './OpenScreen.css';

const OpenScreen = ({}) => {

    return (
        <>
            <div className="widelogoclass" style={{marginTop: "calc(30vh - 10%)"}}>
	            <img /*"calc(" + windowSize + "px * 0.1)"*/ src={logo} alt="Logo" id="wideLogoPic" className="widelogoPIC"/>
            </div>	
	        
            <div className="homeinfo" style={{marginTop: "calc(-7vh + 10%)"}}>
                <a href="/sidepage"><h1 style={{fontSize: "calc(3vw + 90%)"}}>About Project X</h1></a>
            </div>
          
	
            <div className="divider">
	            <hr/>
            </div>
        </>
    )

};

export default OpenScreen;
