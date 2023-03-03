import React, { useEffect, useState, Component } from 'react'
import Axios from 'axios';
import PostForm from "./PostForm";
import PostFormPass from "./PostFormPass";
import CreatorUploadPage from './CreatorUploadPage';
import { ClassNames } from '@emotion/react';
import useStyles from '../styles/creatorMainPage/creatorMainPage'

//import OrderRef from './Page1/OrderRef';

const MainPage = () => {

  const classes = useStyles();

  const [inOrderRef, setInOrderRef] = useState({orderRef: "x", exists: "unchecked"});
  const [isOrderPassword, setIsOrderPassword] = useState({orderPassword: "x", isOrderPassword: false});
  const [rendered, setRendered] = useState(false);
  const [gotOrderPassword, setGotOrderPassword] = useState(false);
  const [picturesToUpload, setPicturesToUpload] = useState([]);


  const resetPicturesToUpload = (newData) => {
    console.log("Setting new pictures data to: ", newData);
    setPicturesToUpload(newData);
  };

  const checkOrderRef = async(listFromServer) => {
    setInOrderRef(listFromServer);
    //console.log(inOrderRef);
    if (inOrderRef.exists == false || true) {
      setRendered(true);
      console.log("Called Render")
    }; 
  };

  const checkOrderPassword = async(listFromServer) => {
    setIsOrderPassword(listFromServer);
    if (isOrderPassword.isOrderPassword == false || true) {
      setGotOrderPassword(true);
      console.log("Called Uploadpage")
    };
    //console.log(isOrderPassword); 
  };

  const settingPictures = async(pictures) => {
    let picturesToSet = [];
    picturesToSet = picturesToSet.concat(pictures.pictures);
    setPicturesToUpload(picturesToSet);
  };

  const CheckOrderPage = () => {
    let statement = inOrderRef.exists;

    const DoesExist = () => {
      return(
        <div className={classes.wholeShit2}>
          {/*<h1>Your Ref does exist</h1>*/}
          <PostFormPass checkOrderPassword={checkOrderPassword} settingPictures={settingPictures}/>
        </div>
      )
    };

    const DoesntExist = () => {
      const [counter, setCounter] = useState(4);

      useEffect(() => {
        counter > 0 && setInterval(() => setCounter(counter -1 ), 1000);
        if (counter < 1) {
          setRendered(false)
        }
      }, [counter]);

      return( 
        <div className={classes.wholeShit1}>
          <div className={classes.wrongPasswordText}>
            <h2>Wrong ORDER-REF. You will be redirected back in {counter} seconds</h2>
          </div> 
        </div>
      )
    }

    return(
      <>
        {statement ? <DoesExist/> : <DoesntExist/>}
      </>
    )
  }

  const UploadPage = () => {
    let statement2 = isOrderPassword.isOrderPassword;
    //console.log("statement2: ", statement2)

    const RightOrderPassword = () => {
      return( 
        <>
          <CreatorUploadPage picturesToUpload={picturesToUpload} resetPicturesToUpload={resetPicturesToUpload}/>
        </>
      )
    }

    const WrongOrderPassword = () => {
      const [counter, setCounter] = useState(4);

      useEffect(() => {
        counter > 0 && setInterval(() => setCounter(counter -1 ), 1000);
        if (counter < 1) {
          setGotOrderPassword(false)
        }
      }, [counter]);

      return( 
        <section className={classes.wholeShit1}>
          <article className={classes.wrongPasswordText}>
            <h2>Wrong OrderPassword. You will be redirected back in {counter} seconds</h2>
          </article>   
        </section>
      )
    }

    return(
      <>
        {statement2 ? <RightOrderPassword/> : <WrongOrderPassword/>}
      </>
    )

    
    
  }

  const Rendered = () => {
    return(
      <>
        {rendered ? <CheckOrderPage/> : <PostForm checkOrderRef={checkOrderRef}/>}   
      </>
    )
  }
  

  return(
    <>
      {gotOrderPassword ? <UploadPage/> : <Rendered/>}
    </>
  )

}

export default MainPage