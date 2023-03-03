import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { CircularProgress } from '@material-ui/core';
import useStyles from '../../styles/boardMain/BoardMain';
import OrderItem from './OrderItem/OrderItem';
import NewOrder from './NewOrder/NewOrder';

const BoardMain = () => {
    const [allOrderData, setAllOrderData] = useState([]);
    const [orderDataFetched, setOrderDataFetched] = useState(false);

    const [cookies, setCookie, removeCookie] = useCookies(['identifier']);

    const classes = useStyles();

    function getCookieForClass() {
        let cookie = cookies.identifier;
        return cookie
    }
    

    async function loadOrderData() {
        let cookie = {cookie: cookies.identifier};
        const options = { method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cookie)};
        const response = await fetch('http://localhost:5000/requestdata', options);
        const data = await response.json();
        console.log(data)
        if (data && typeof data === "object" && isFinite(data.length) && data.length >= 0 && data.length === Math.floor(data.length) && data.length < 2 ** 32) {
            setAllOrderData(data);
            setOrderDataFetched(true);
            return 
        };
        console.log("Got a negative response for the cookie, refresh needed");
        alert("The cookie is dated/wrong, please refresh the page to continue.");
    };

    const LoadingOrLoadedOrders = () => {
        const DisplayingOrders = () => {
            return(
                <div className={classes.dataOfOrders}>
                    <table className={classes.table}>
                        {allOrderData.map((ordersData) => (
                            <tr>
                                <OrderItem order={ordersData} loadOrderData={loadOrderData}/>
                            </tr>      
                        ))}
                    </table>   
                </div>
            );
        };

        return(
            <div>
                {allOrderData ? <DisplayingOrders/> : <CircularProgress/> }
            </div>    
        );
    };

    const LoadButton = () => {
        return(
            <div className={classes.loadButton}>
                <a className={classes.button1} onClick={() => loadOrderData()} >Load the Data of all orders</a>
            </div>
        );
    };

    
    return (
        <div className={classes.wholeShit}>
            {orderDataFetched ? <LoadingOrLoadedOrders/> : <LoadButton/>}
            <div className={classes.newOrder}>
                <NewOrder loadOrderData={loadOrderData} getCookieForClass={getCookieForClass} orderDataFetched={orderDataFetched}/>
            </div>    
        </div>
    )
}

export default BoardMain