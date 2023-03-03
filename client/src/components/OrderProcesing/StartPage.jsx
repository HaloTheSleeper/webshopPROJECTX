import React from 'react'
import { Button } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import useStyles from './styles/startPage/startPageStyles';
import styles from './styles/startPage/StartPage.css';
import Footer2 from './Footer2';

const StartPage = () => {
  const classes = useStyles();
  return (
    <main className={classes.wholeShit} style={{backgroundColor: 'black'}}>
      <section className={classes.picHub}>
        <div className={classes.button1box}>
          <div className={classes.picHubText}>
            <h2>Customer Order Retrieval</h2>
            <p>Here You can retrieve Your ordered content when it's ready, any problem should be immediatly reported to customer support.</p>
          </div>
          <Link component={Link} to="/orders/pichub" className={classes.button1} ><a>I am a customer</a></Link>
        </div>
      </section>

      <section className={classes.creatorHub} style={{backGroundColor: 'black'}}>
        <div className={classes.button1box}>
          <article className={classes.picHubText}>
            <h2>Creator Content Upload Enviornment</h2>
            <p>Here a creator can upload the content ordered by the customer, as a customer it isn't reccomended to come here as You won't find anything of interest nor useful.</p>
          </article>
          <Link  component={Link} to="/orders/creatorhub" className={classes.button1} ><a>I am a creator</a></Link>
        </div>
      </section>

      <article className={classes.headsUpText}>
        <p>Any problem receiving Your order or uploading Your content should be immiediatly reported to us.</p>
      </article>
    </main>
    
  )
}

export default StartPage