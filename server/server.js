const express = require('express');
const app = express();
const mongoose = require('mongoose');
const multer = require('multer');
const cors = require('cors');
var fs = require('fs');

//importing functions
const { DeleteOrder, CheckAuthentication, CreateAuthentication, GetAllOrderData, UpdateOrderREF, StatusReset, PasswordReset, CreateNewOrder } = require('./functions/BoardFunctions');
const { ClientsPictures, SetImageToFalse, InOrderRefs, IsOrderPassword } = require('./functions/ClientFunctions');

app.use(express.json({ limit: "10mb"}));
app.use("/images", express.static("uploads"));
app.use(cors({
    origin: ["http://localhost:3000"], //front end
    methods: ["POST", "GET"], //only requests permitted to be sent to the server
    credentials: true //for cookies
}));

mongoose.connect('mongodb://localhost:27017/ProjectBlue');


let currentOrderRef = "./uploads/failed";


//Multers settings and the setting of upload directory.
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let newDestination = currentOrderRef;
        let stat = null;
        try {
            stat.fs.statSync(newDestination);
        } catch(err) {
            fs.mkdirSync(newDestination, {recursive: true});
        };
        if (stat && !stat.isDirectory()) {
            throw new Error("Dir cant be created");
        };
        cb(null, newDestination);
    },
    filename: (req, file, cb) => {
        let date = Date.now();
        cb( null, file.originalname );
    }
});

let upload = multer({
        dest: "./uploads/failed",
        limits: {
            fieldNameSize: 100,
            fileSize: 600000000
        },
        storage: storage
    });


//Checking if the Order-REF exists for the creator.
app.post('/orderrefcreator', async (req, res) => {
    console.log("=================================");
    console.log('I got an response: ');
    console.log(req.body);
    let toReturn = await InOrderRefs(req.body);
    res.json(toReturn);
    console.log("Returning: ", toReturn);
})

//Checking the upload password and adjusting the multer to the upload path.
app.post("/uploading1", (req, res) => {
    console.log("+++++++++++++++++++++++++++++++++++++++++++++");
    console.log("Got:", req.body);
    let returned = IsOrderPassword(req.body);
    let toReturn = returned.toSend;
    currentOrderRef = returned.newOrderRef;
    res.json(toReturn);
    console.log("Returning:", toReturn);
});

//Uploading a picture
app.post("/imageupload", upload.single('image'), async (req, res) =>{
    console.log("--------------------------------------");
    console.log("Got changing request for: ", req.body.imageName);
    let toReturn = await SetImageToFalse(req.body.imageName);
    console.log("Returning changed: ", toReturn);
    res.send(toReturn);
});

//The "function" for a client trying to retrieve his/her photos.
app.post("/clientdownloadpage", async (req, res) => {
    console.log("/////////////////////////////////////////////");
    console.log("Got: ", req.body);
    let toReturn = await ClientsPictures(req.body);
    console.log("Returning: ", toReturn);
    res.json(toReturn);
});

//The "function" for a client downloading a photo.
app.post('/imagedownload', function(req, res){
    const file = "./uploads" + req.body.pictureUrl;
    res.download(file); // Set disposition and send it.
});


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Control Board

//For logging in to the control board
app.post("/boardlogin", async (req, res) => {
    console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");
    console.log("Got: ", req.body);
    let toReturn = await CreateAuthentication(req.body.username, req.body.password);
    console.log("Returning: ", toReturn);
    res.json(toReturn);
});

//For requesting the data of the orders to be displayed and then manipulated.
app.post("/requestdata", async(req, res) => {
    console.log("*************************************************");
    console.log("Got a request for the data of all the orders", req.body);
    let cookieStatus = await CheckAuthentication(req.body.cookie);
    if (cookieStatus.authenticated) {
        let toSend = await GetAllOrderData();
        console.log(toSend);
        console.log("Sending the data of all the orders.");
        res.json(toSend);
    } else {
        let toSend = {success: false};
        console.log(toSend);
        console.log("Cookie was invalid sending a message with orders to refresh it.");
        res.json(toSend);
    } 
})

//For updating the Order-REF, cookie authentication is to be added later on.
app.post("/updateorderref", async(req, res) => {
    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
    console.log("Got: ", req.body);
    let toReturn = await UpdateOrderREF(req.body.currentOrderRef, req.body.orderRef);
    res.json(toReturn);
})

//For updating the status (exists, ready, etc.), cookie authentication is to be added later on.
app.post("/statusreset", async(req, res) => {
    console.log("*******************************************************");
    console.log("Got: ", req.body);
    let toReturn = await StatusReset( req.body.orderRef, req.body.toReset, req.body.currentStatus);
    res.json(toReturn);
})

//For updating the password, cookie authentication is to be added later on.
app.post("/passwordreset", async(req, res) => {
    console.log("*******************************************************");
    console.log("Got: ", req.body);
    let toReturn = await PasswordReset( req.body.orderRef, req.body.passwordType, req.body.newPassword);
    res.json(toReturn);
})

//For creating a new order.
app.post("/createneworder", async(req, res) => {
    console.log("***********************************************************");
    console.log("Got:", req.body);

    let cookieStatus = await CheckAuthentication(req.body.cookie);

    if (cookieStatus.authenticated) {
        let toReturn = await CreateNewOrder(req.body);
        res.json(toReturn);
    } else {
        let toSend = {success: false};
        console.log(toSend);
        console.log("Cookie was invalid sending a message with orders to refresh it.");
        res.json(toSend);
    };  
});

//For checking the authentication (if u have authentication the you shall be logged in automatically), automatic with useEffect.
app.post("/authcheck", async(req, res) => {
    console.log("*****************************************************************");
    console.log("Got:", req.body);
    let toReturn = await CheckAuthentication(req.body.cookie);
    console.log("returning", toReturn);
    res.json(toReturn);
});

////For deleting a certain order.
app.post("/deleterequest", async(req, res) => {
    console.log("**************************************************");
    console.log("Got delete request: ", req.body);
    
    let toReturn = {};

    let cookieValid = await CheckAuthentication(req.body.cookie);
    console.log(cookieValid);
    if (cookieValid.authenticated) {
        console.log("Called delete function");
        toReturn = await DeleteOrder(req.body.orderId);
        console.log("Sending back: ", toReturn);
        res.json(toReturn);
    };
    if (cookieValid.authenticated != true) {
        toReturn = {cookieSuccess: false};
        console.log("Sending back:", toReturn);
        res.json(toReturn);
    };
});


app.listen(5000, () => { console.log("Server started on port 5000") })