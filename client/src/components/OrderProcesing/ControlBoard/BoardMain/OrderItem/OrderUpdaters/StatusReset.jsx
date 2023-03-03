import React from 'react'

const StatusReset = ({ toReset, currentStatus, orderRef, loadOrderData}) => {

    async function serverRequest() {
      let toSend = { toReset: toReset, currentStatus: currentStatus, orderRef: orderRef}
      console.log("Trying to send to server :", toSend)
      const options = { method: 'POST', 
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify(toSend)};
	    const response = await fetch('http://localhost:5000/statusreset', options);
	    const data = await response.json();
	    console.log("Got back from server: ", data);
      loadOrderData();
    }

    


  return (
    <div>
        <button style={{width: "5vw", fontSize: "0.9vw"}} onClick={(() => serverRequest())}>Change Status</button>
    </div>
  )
}

export default StatusReset