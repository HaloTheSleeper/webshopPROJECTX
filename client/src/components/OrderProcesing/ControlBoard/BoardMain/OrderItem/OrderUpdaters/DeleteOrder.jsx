import React from 'react';
import { useCookies } from 'react-cookie';


const DeleteOrder = ({ id, loadOrderData }) => {
    const [cookies, setCookie, removeCookie] = useCookies(['identifier']);

    async function deleteRequest() {
        let permission = window.confirm("Delete the order?")
        if (permission) {
            let toSend = { cookie: cookies.identifier, orderId: id }
            console.log("Trying to send to server (DELETE REQUEST) :", toSend)
            const options = { method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(toSend)};
            const response = await fetch('http://localhost:5000/deleterequest', options);
            const data = await response.json();
            console.log("Got back from server: ", data);
            if (data.success === false) {
               alert("Somehow failed to delete the order");
               return
            } else if (data.cookieSuccess === false) {
                alert("Cookie is invalid, please refresh the page.")
                return
            };
            loadOrderData();
        } else {
            return
        }  
    }


    return (
        <div>
            <button style={{width: "5vw", fontSize: "0.9vw"}} onClick={() => deleteRequest()}>DELETE ORDER</button>
        </div>
    )
}

export default DeleteOrder