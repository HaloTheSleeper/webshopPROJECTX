import { ClassNames } from '@emotion/react'
import React from 'react'
import UpdateOrderRef from './OrderUpdaters/UpdateOrderRef';
import StatusReset from './OrderUpdaters/StatusReset';
import UpdatePassword from './OrderUpdaters/UpdatePassword';
import DeleteOrder from './OrderUpdaters/DeleteOrder';
import orderItem from '../../../styles/OrderItem/orderItem';
import useStyles from '../../../styles/OrderItem/orderItem';
import yes from '../../../assets/yes.png';
import no from '../../../assets/no.png';

const OrderItem = ({ order, loadOrderData }) => {
    const classes = useStyles();
    

    let pictureUrlList = [];

    function getPictureUrl() {
        let i = 0;
        let listLength = order.picturesNeeded.length;
        while (i < listLength) {
            try {
                let name2 = order.picturesNeeded[i].name;
                if (order.picturesNeeded[i].uploaded) {
                    let link2 = "http://localhost:5000/images" + order.picturesNeeded[i].directory;
                    pictureUrlList.push({link: link2, name: name2, status: order.picturesNeeded[i].uploaded});
                } else {
                    pictureUrlList.push({link: "no", name: name2, status: order.picturesNeeded[i].uploaded})
                };
            } catch(err) {
                pictureUrlList.push({name: "ERROR", status: false})
            };
            i += 1;
        };
    };


    const LinksToPictures = () => {
        getPictureUrl();

        //console.log(order)
        //console.log("Data of pictures: ", pictureUrlList);
        
        const GiveText = ({ value }) => {
            return(
                <div>
                    {value.status ? <a href={value.link} target="_blank">{value.name}</a> : <a>{value.name}</a>}
                </div>
            )
        }
        return(
            <div>
                {pictureUrlList.map((objekt) => (
                    <GiveText value={objekt}/>
                ))}
            </div>
        )
    }
    


  return (
    <div className={classes.wholeShit}>
        <td className={classes.orderRef}>
            <div>
                <DeleteOrder id={order._id} loadOrderData={loadOrderData}/>
                <h2>{order.orderRef}</h2>
                <div style={{marginTop: "1vh"}}>
                    <UpdateOrderRef currentOrderRef={order.orderRef} loadOrderData={loadOrderData}/>
                </div>
            </div>
        </td>
        <td className={classes.statusCheck}>
            <div>
                <h3>Exists:</h3>
                {order.exists ? <img src={yes} alt="True"/> : <img src={no} alt="False"/>}
                <div className={classes.statusResetButton}>
                    <StatusReset toReset={"exists"} currentStatus={order.exists} orderRef={order.orderRef} loadOrderData={loadOrderData}/>
                </div>         
            </div>
        </td>  
        <td className={classes.passwords}>
            <div>
                <h3>Passwords:</h3>
                <a>Order password: <br/><b>{order.orderPassword}</b></a> <br/>
                <UpdatePassword orderRef={order.orderRef} passwordType={"orderPassword"} loadOrderData={loadOrderData}/>
                <a>Upload password: <br/><b>{order.uploadPassword}</b></a>
                <UpdatePassword orderRef={order.orderRef} passwordType={"uploadPassword"} loadOrderData={loadOrderData}/>
            </div>  
        </td>   
        <td className={classes.statusCheck}>
            <div>
                <h3>Ready:</h3>
                {order.ready ? <img src={yes} alt="True"/> : <img src={no} alt="False"/>}
                <div className={classes.statusResetButton}>
                    <StatusReset toReset={"ready"} currentStatus={order.ready} orderRef={order.orderRef} loadOrderData={loadOrderData}/>
                </div>
            </div>
        </td>
        <td className={classes.links}>
            <div>
                <h3>Links to picture: </h3>
                <LinksToPictures/>
            </div>
        </td>
        <td className={classes.email}>
            <div>
                <h3>E-mail to creator sent:</h3>
                {order.emailToCreatorSent ? <img src={yes} alt="True"/> : <img src={no} alt="False"/>}
                <div className={classes.statusResetButton}>
                    <StatusReset toReset={"emailToCreatorSent"} currentStatus={order.emailToCreatorSent} orderRef={order.orderRef} loadOrderData={loadOrderData}/>
                </div>
            </div>
        </td>    
    </div>
  )
}

export default OrderItem