import { mergeClasses } from '@material-ui/styles'
import React, { useState, useEffect } from 'react'
import PicturePage from './PicturePage'
import { Link, useLocation } from 'react-router-dom';

import useStyles from '../../styles/mainDisplay/mainDisplay';

const MainDisplay = ({orderData, setUploadPageStatusBack}) => {
    console.log("Processing: ", orderData, " in MainDisplay")

    const classes = useStyles();

    const ToReturnBack = () => {
        const [counter, setCounter] = useState(4);
        //If the orderRef doesnt exist or the password is wrong.
        useEffect(() => {
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
            if (counter < 1) {
                setUploadPageStatusBack();
            };
        }, [counter]);

        return( 
            <section className={classes.wrongPassword}>
                <div className={classes.wrongPasswordText}>
                    <h1>Your OrderREF or OrderPassword is incorrect. You will be redirected back in {counter} seconds</h1>
                </div>     
            </section>
        )     
    };

    const NotToReturn = () => { 
        const NotReady = () => {
            return(
                <section className={classes.wrongPassword}>
                    <article className={classes.wrongPasswordText}>
                        <h1>The order is currently not ready.</h1>
                        <div className={classes.backButton}>
                            <Link component={Link} to="/orders" className={classes.button1}><a>Back</a></Link>
                        </div>
                    </article>          
                </section>
            )
        };
        const FullReady = () => {
            return(
                <section className={classes.picturePage}>
                    <h1>Your order is ready, enjoy!</h1>
                    {orderData.pictures.map((pictureData) => (
                        <PicturePage orderDataPicture={pictureData}/>
                    ))}
                    <section className={classes.picturePageBack}>
                        <Link component={Link} to="/" className={classes.button1} ><a>Back</a></Link>
                    </section>
                </section>
            )   
        };
        return(
            <>
                {orderData.ready ? <FullReady/> : <NotReady/>}
            </>
        )
    };
    
    
    return (
        <>
            {(orderData.exists && orderData.correctPassword && orderData.processed) ? <NotToReturn/> : <ToReturnBack/>}
        </>
    )
}

export default MainDisplay