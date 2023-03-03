import React, { useEffect, useState } from 'react'

const OrderRef = () => {
  const [list, setList] = useState([{}])

  useEffect(() => {
    fetch("/orderref").then(
      response => response.json()
    ).then(
      data => {
        setList(data)
      }
  )}, []);

  return (
    <div>
      {(typeof list.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        list.users.map((user, i) => (
          <p key={i}>{user}</p>
        ))
      )}
    </div>
  )   
}

export default OrderRef