const orderDataSchema = require('../mongoSchemas/schema');
const multer = require('multer');
const fs = require('fs');

let orderPSWD = "";
// "currentOrderRefDir" is for returning to the server file
let currentOrderRefDir = "../uploads/failed";
let currentDbOrderRef = "";
let pictureNameToUpload = "";
let picturesToUpload = [];


//Create a directory (not for exporting also currently not in use).
function createUploadDirectory(directoryName) {
    if (!fs.existsSync(directoryName)) {
        fs.mkdirSync(directoryName, {recursive: true});
    };
};

async function InOrderRefs(orderRefToCheck) {
    let exists = false;
    try {
        let orderRefs = await orderDataSchema.find({orderRef: orderRefToCheck.orderRef});
        orderRefs = orderRefs[0];
        if (orderRefs.exists === true) {
            //Creating a dir for the OrderREF
            createUploadDirectory("./uploads/" + orderRefs.orderRef);

            exists = true;
            orderPSWD = orderRefs.uploadPassword;
            //picturesToUpload = picturesToUpload.concat(orderRefs.picturesNeeded);
            picturesToUpload = orderRefs.picturesNeeded;
            currentOrderRefDir = "./uploads/" + orderRefs.orderRef;
            currentDbOrderRef = orderRefs.orderRef;
            //createUploadDirectory(currentOrderRef);
            console.log("Current order password is set to: ", orderPSWD);
        }
    } catch(err) {
        exists = false;
    }
    return({CheckedOrderRef: orderRefToCheck.orderRef, exists: exists});

}

function IsOrderPassword(orderPasswordToCheck) {
    let isOrderPSWD = false;
    if (orderPasswordToCheck.orderPassword == orderPSWD) {
        isOrderPSWD = true;
    }
    return({ toSend: {CheckedOrderPassword: orderPasswordToCheck.orderPassword, isOrderPassword: isOrderPSWD, pictures: picturesToUpload}, newOrderRef: currentOrderRefDir});
}

//Giving the image in the database the values to the directory of the image and 
async function SetImageToFalse(imageData) {
    let dataToReset = "";
   
    try {
        console.log(currentDbOrderRef);
        let wholeOrderData = await orderDataSchema.find({orderRef: currentDbOrderRef});
        wholeOrderData = wholeOrderData[0];
        dataToReset = wholeOrderData.picturesNeeded;
        let arrayLength = dataToReset.length;
        let i = 0;
        while (i < arrayLength) {
            if(dataToReset[i].name == imageData){
                dataToReset[i].uploaded = true;
                let pictures = fs.readdirSync('./uploads/' + currentDbOrderRef);
                let x = 0;
                while (x < pictures.length) {
                    if (pictures[x].includes(imageData)) {
                        dataToReset[i].directory = /*"/uploads/" +*/ "/" + currentDbOrderRef + "/" + pictures[x];
                    }
                    x++
                };
            };
            i++
        };
        await orderDataSchema.updateOne({ orderRef: currentDbOrderRef }, { $set: { picturesNeeded: dataToReset }});
    } catch (err) {
        return({success: false});
    }
    return({success: true, newData: dataToReset});
}

async function ClientsPictures(dataToCheck) {
    let dataToReturn = { exists: false, correctPassword: false, ready: false, processed: false};
    try{
        let orderData = await orderDataSchema.find({orderRef: dataToCheck.orderRef});
        orderData = orderData[0];
        dataToReturn.processed = true;
        if (orderData.exists) {
            dataToReturn.exists = true;
            if (orderData.orderPassword === dataToCheck.orderPassword) {
                dataToReturn.correctPassword = true;
                if (orderData.ready === true) {
                    dataToReturn.ready = true;
                    dataToReturn.pictures = orderData.picturesNeeded;
                };
            };
        };
        return(dataToReturn);
    } catch(err) {
        console.log("Failed to check if the password and Order-REF for client login are correct.");
        return(dataToReturn);
    };
}

module.exports = { ClientsPictures, SetImageToFalse, InOrderRefs, IsOrderPassword };