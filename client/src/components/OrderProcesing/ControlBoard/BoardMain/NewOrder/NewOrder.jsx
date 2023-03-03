import React, {Component, useRef} from 'react'
import { useCookies } from 'react-cookie';


/*function GetCookie() {
    const [cookies, setCookie, removeCookie] = useCookies(['identifier'])
    const cookie = {cookie: cookies.identifier};
    return cookie
}

const cookie = GetCookie();*/

class NewOrder extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            orderRef: "",
            exists: false,
            orderPassword: "",
            uploadPassword: "",
            amountOfPictures: 0,
            arraySlots: 0,
            picturesNeeded: [],
            emailToCreatorSent: false,
            cookie: ""
        }
    }


    Pictures (pictureAmount) {
        console.log(this.state.arraySlots, pictureAmount)
        if (this.state.arraySlots != pictureAmount & pictureAmount >= 0) {
            console.log("arrayslots doesnt add up with amount of pictures, creating more")
            let i = 0;
            let newArray = [];
            while (i < pictureAmount) {
                newArray[i] = "";
                i += 1;
            }
            this.state.arraySlots = i;
            this.state.picturesNeeded = newArray;
        }
    }

    


    changeHandler = e => {
        if (e.target.name === "amountOfPictures") {
            if (e.target.value < 0) {
                alert("Cannot have negative amount of pictures.")
                return
            } else if (e.target.value < 100) {
                this.setState({ [e.target.name]: e.target.value})
            } else {
                alert("Maximum of 99 pictures per order.")
            }
        }
        this.setState({ [e.target.name]: e.target.value})
    };

    changeHandlerArray = (e, index) => {
        let newArray = this.state.picturesNeeded;
        newArray[index] = e.target.value;
        this.state.picturesNeeded = newArray;
    }

    submitHandler = async(e) => {
        if (this.state.orderRef != "" & this.state.orderPassword != "" & this.state.uploadPassword != "") {
            this.state.cookie = this.props.getCookieForClass();
            e.preventDefault();
            console.log("Trying to send to server :", this.state)
            const options = { method: 'POST', 
	        headers: {'Content-Type': 'application/json'},
	        body: JSON.stringify(this.state)};
		    const response = await fetch('http://localhost:5000/createneworder', options);
		    const data = await response.json();
		    console.log("Got back from server: ", data);
            //ei funka if else sitt
            if (data.status == false) {
                alert("Failed creating the order")
                return
            } else if (data.success == false) {
                console.log("Got a negative response for the cookie, refresh needed")
                alert("The cookie is dated/wrong, please refresh the page to continue.")
                return 
            }
            if (this.props.orderDataFetched) {
                this.props.loadOrderData();
            }
            this.setState({
               orderRef: "",
               exists: false,
               orderPassword: "",
               uploadPassword: "",
               amountOfPictures: 0,
               arraySlots: 0,
               picturesNeeded: [],
               emailToCreatorSent: false,
            });
        } else {
            e.preventDefault();
            alert("The ORDER-REF, Order Password and Upload Password properties need values.")
        }
        
    };

    
    
 
    render() {
        const { orderRef, exists, emailToCreatorSent, orderPassword, uploadPassword, amountOfPictures, picturesNeeded } = this.state;
        return(
            <div style={{textAlign: "center", paddingTop: "10vh", color: "white"}}>
                <form onSubmit={(e) => {
                    this.submitHandler(e)
                    document.getElementById("checkBox1").checked = false;
                    document.getElementById("checkBox2").checked = false;       
                    }}>
                <div>
                    <p>OrderREF:</p>
                    <input
                        type="text"
                        name="orderRef"
                        value={orderRef}
                        onChange={this.changeHandler}
                    />
                    <p>Exists:</p>
                    <input type="checkbox"
                           id="checkBox1"
                           value={exists}
                           style={{width: "30px", height: "30px"}}
                           onChange={(e) => {
                           this.state.exists = e.target.checked
                           }} />
                    <p>Order Password:</p>
                    <input
                        type="text"
                        name="orderPassword"
                        value={orderPassword}
                        onChange={this.changeHandler}
                    />
                    <p>Upload Password</p>
                    <input
                        type="text"
                        name="uploadPassword"
                        value={uploadPassword}
                        onChange={this.changeHandler}
                    />
                    <p>Amount of pictures</p>
                    <input
                        type="number"
                        name="amountOfPictures"
                        value={amountOfPictures}
                        onChange={(e) => {
                            this.changeHandler(e);
                            console.log("New value: ", e.target.value)
                            this.Pictures(e.target.value);
                        }}
                    />
                    {amountOfPictures >= 0 ? 
                    <div>
                            {picturesNeeded.map((pictureName, index) => (
                                <>
                                    <input
                                        type="text"
                                        name="pictureName"
                                        defaultValue=""
                                        onChange={(e) => {
                                            console.log("Setting picture", index, "to", e.target.value)
                                            this.changeHandlerArray(e, index);
                                            console.log(picturesNeeded[index])
                                        }}
                                    />
                                    <br/>
                                </>
                            ))}
                    </div>
                    : <p><b>0 Pictures</b>, are you sure about that?</p>}
                    <p>Email to creator sent:</p>
                    <input type="checkbox"
                           id="checkBox2"
                           value={emailToCreatorSent}
                           style={{width: "30px", height: "30px"}}
                           onChange={(e) => {
                           this.state.emailToCreatorSent = e.target.checked
                    }} />
                </div>
                    <button type="submit">Submit</button>
                </form>
            </div>   
        )
    }
}
export default NewOrder;