const mongoose = require('mongoose');
const orderDataSchema = require('../mongoSchemas/schema.js');
const logInSchema = require('../mongoSchemas/logInSchema.js');
const { deleteOne } = require('../mongoSchemas/schema.js');

mongoose.connect('mongodb://localhost:27017/ProjectBlue')


//Replaced by CreateAuthentication function below, but kept for "safety"
function BoardLogInPasswordCheck(dataToCheck, passwordGiven) {
    let dataToReturn = { value: false }
    if (dataToCheck.text === passwordGiven ) {
        dataToReturn.value = true;
    };
    return dataToReturn;
};

async function GetAllOrderData(){
    return await orderDataSchema.find();
}

async function UpdateOrderREF(oldOrderREF, newOrderREF){
    try{
        await orderDataSchema.updateOne({orderRef: oldOrderREF}, { $set: { orderRef: newOrderREF }});
        console.log("Set OrderREF", oldOrderREF, "to", newOrderREF);
        return({success: true});
    } catch(err) {
        console.log("Failed setting");
        return({success: false});
    };
};

async function StatusReset(orderRef, propertyToReset, currentStatus) {
    if (propertyToReset === "exists") {
        try{
            await orderDataSchema.updateOne({orderRef: orderRef}, { $set: { exists: !currentStatus}});
            console.log("Set OrderREF", orderRef, "property", propertyToReset, "to", !currentStatus);
            return({success: true});
        } catch(err) {
            console.log("Failed to set OrderREF", orderRef, "property", propertyToReset, "to", !currentStatus);
            return({success: false});
        }
    } else if (propertyToReset === "ready") {
        try{
            await orderDataSchema.updateOne({orderRef: orderRef}, { $set: { ready: !currentStatus}});
            console.log("Set OrderREF", orderRef, "property", propertyToReset, "to", !currentStatus);
            return({success: true});
        } catch(err) {
            console.log("Failed to set OrderREF", orderRef, "property", propertyToReset, "to", !currentStatus);
            return({success: false});
        };
    } else {
        try{
            await orderDataSchema.updateOne({orderRef: orderRef}, { $set: { emailToCreatorSent: !currentStatus}});
            console.log("Set OrderREF", orderRef, "property", propertyToReset, "to", !currentStatus);
            return({success: true});
        } catch(err) {
            console.log("Failed to set OrderREF", orderRef, "property", propertyToReset, "to", !currentStatus);
            return({success: false});
        }
    } 
}


async function PasswordReset(orderRef, passwordType, newPassword) {
    if (passwordType === "orderPassword") {
        try {
            await orderDataSchema.updateOne({orderRef: orderRef}, { $set: {orderPassword: newPassword}});
            console.log("Set OrderREF", orderRef, "property", passwordType, "to", newPassword);
            return({success: true});
        } catch(err) {
            console.log("Failed to set OrderREF", orderRef, "property", passwordType, "to", newPassword);
            return({success: false});
        }
    } else if (passwordType === "uploadPassword") {
        try {
            await orderDataSchema.updateOne({orderRef: orderRef}, { $set: {uploadPassword: newPassword}});
            console.log("Set OrderREF", orderRef, "property", passwordType, "to", newPassword);
            return({success: true});
        } catch(err) {
            console.log("Failed to set OrderREF", orderRef, "property", passwordType, "to", newPassword);
            return({success: false});
        }
    } else {
        console.log("Somethings really fucked up with changing passwords.");
        return({success: true});
    }
}

async function CreateNewOrder (orderData) {
    let toReturn = {status: false};
    function MakeArray (array) {
        let newArray = [];
        let i = 0;
        while(i < array.length) {
            newArray[i] = ({
                name: array[i],
                uploaded: false
            })
            i += 1
        }
        return(newArray);
    }
    orderData.picturesNeeded = MakeArray(orderData.picturesNeeded);
    try {
        const orderData2 = {
            orderRef: orderData.orderRef,
            exists: orderData.exists,
            orderPassword: orderData.orderPassword,
            uploadPassword: orderData.uploadPassword,
            ready: false,
            picturesNeeded: orderData.picturesNeeded,
            emailToCreatorSent: orderData.emailToCreatorSent
        };
        await orderDataSchema.create(orderData2);
        toReturn.status = true;
        console.log("Successfuly added a new order.");
    } catch(err) {
        console.log("Failed to create a new order");
    }
    return(toReturn);
}

//For creating a random string for a cookie.
function makeRandomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//Creating users for the controlboard.
/*logInSchema.create({
    userName: "user2",
    accessAllowed: true,
    logInPassword: "test2",
    identifierCookie: makeRandomString(30),
    timeCookieWasCreated: new Date().getTime()
})*/

async function CreateAuthentication(username, password) {  
    let toReturn = {success: false}
    try {
        let userData = await logInSchema.find({userName: username});
        userData = userData[0]
        if (username == userData.userName & userData.accessAllowed & password === userData.logInPassword) {
            toReturn.success = true;
            let newCookie = makeRandomString(30);
            let today = new Date().getTime();
            await logInSchema.updateOne({userName: username}, { $set: {identifierCookie: newCookie, timeCookieWasCreated: today}});
            toReturn.cookie = newCookie;
            toReturn.url = "/orders/32f32adminiklajsdda901jnkjh2";

            let expireDate = new Date();
            expireDate.setTime(expireDate.getTime() + ( 60 * 60 * 1000));
            toReturn.expireDate = expireDate;

            return toReturn
        }
    } catch(err) {
        console.log("Failed to create authentication token");
        return toReturn;
    }
}

async function CheckAuthentication(cookievalue) {
    let toReturn = {authenticated: false};
    console.log("Called AUTH function");
    try {
        let userData = await logInSchema.find({identifierCookie: cookievalue});

        let cookieExpireTime = userData[0].timeCookieWasCreated;
       
        cookieExpireTime = cookieExpireTime.setTime(cookieExpireTime.getTime() + ( 60 * 60 * 1000 )); //setib kui kaua cookie kehtib justkui
        console.log("cookie expire time:", cookieExpireTime);
        let timeNow = new Date().getTime();
        console.log("time now:", timeNow);

        if (timeNow <= cookieExpireTime) {
            console.log("Cookie was good");
            toReturn.authenticated = true;
        }

        return toReturn;
    } catch(err) {
        console.log("AUTH failed");
        return toReturn;
    }
}

async function DeleteOrder(orderId) {
    let toReturn = { success: false };
    try{  
        orderId = orderId.toString().trim();
        let orderId2 = mongoose.Types.ObjectId(orderId);

        console.log("Deleting order with _id:", orderId2);

        let value = await orderDataSchema.findByIdAndRemove(orderId2);
        console.log(value);

        if (value != null ) {
            toReturn.success = true;
            console.log("Deleted the order.");
        };

        return toReturn;
    } catch(err) {
        console.log("Failed to delete the order.");
        return toReturn;
    };
};


module.exports = { DeleteOrder, CheckAuthentication, CreateAuthentication, GetAllOrderData, UpdateOrderREF, StatusReset, PasswordReset, CreateNewOrder };

