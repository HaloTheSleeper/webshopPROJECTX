import React, { useState } from 'react'
import { useCookies } from 'react-cookie'
import LogIn from './LogIn/LogIn';
import BoardMain from './BoardMain/BoardMain'
import { useEffect } from 'react';

const StartUpPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['identifier']) //"kutsume" siin useCookies kasutusse

  async function loggedInStatusReset(valueToReset) {
    if (valueToReset.success) {
      setLoggedIn(valueToReset.success);
      console.log("Control Board log in status set to: ", valueToReset.success);
      document.cookie = 'identifier=' + valueToReset.cookie + '; expires=' + valueToReset.expireDate;
      //setCookie('identifier', valueToReset.cookie, {path: "/", expires: valueToReset.expireDate})
    }
  }


  async function sendAuthData (cookieObject) {
    console.log("Trying to send to server (AUTH) :", cookieObject.cookie);
    const options = { method: 'POST', 
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cookieObject)};
    const response = await fetch('http://localhost:5000/authcheck', options);
    const data = await response.json();
    console.log("Got back from server (AUTH): ", data);
    setLoggedIn(data.authenticated)
  }
  
  useEffect(() => {
    const cookie = {cookie: cookies.identifier}; //sebib cookie vaartuse
    sendAuthData(cookie);
  }, [])



  return (
    <div>
      {loggedIn ? <BoardMain/> : <LogIn loggedInStatusReset={loggedInStatusReset}/>}
    </div>
  )
}

export default StartUpPage