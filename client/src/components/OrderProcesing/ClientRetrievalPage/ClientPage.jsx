import React, { useState }from 'react'
import ClientPageInsert from './ClientPageInsert';
import MainDisplay from './AfterClientPage/MainDisplay'

import useStyles from '../styles/clientpage/clientPageStyles';
import styles from '../styles/clientpage/clientpage.css';

const ClientPage = () => {
  const [onUploadPage, setOnUploadPage] = useState(true);
  const [orderData, setOrderData] = useState({});

  const classes = useStyles();

  function setUploadPageStatus(dataToCheck) {
    if (dataToCheck.processed === true) {
      setOrderData(dataToCheck);
      setOnUploadPage(false);
      console.log("Calling MainDisplay to deal with data from server.")
    } else {
      alert("Something went wrong, please try again or connect customer support!");
    }
  };
  function setUploadPageStatusBack() {
    setOnUploadPage(true);
  };

  const UploadPageOrNot = () => {
    return(
      <>
        {onUploadPage ? <ClientPageInsert setUploadPageStatus={setUploadPageStatus}/> : <MainDisplay orderData={orderData} setUploadPageStatusBack={setUploadPageStatusBack}/>}
      </>
    )
  }
    
 
  return (
    <main className={classes.wholeShit} style={{backgroundColor: 'black'}}>  
      <UploadPageOrNot/> 
    </main>
  )
}

export default ClientPage