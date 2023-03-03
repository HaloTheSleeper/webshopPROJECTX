import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

class UpdatePassword extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            newPassword: "New Password",
            orderRef: this.props.orderRef,
            passwordType: this.props.passwordType
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

    submitHandler = async(e) => {
        if (this.state.newPassword != "New Password") {
            e.preventDefault();
            console.log("Trying to send to server :", this.state)
            const options = { method: 'POST', 
	        headers: {'Content-Type': 'application/json'},
	        body: JSON.stringify(this.state)};
		    const response = await fetch('http://localhost:5000/passwordreset', options);
		    const data = await response.json();
		    console.log("Got back from server: ", data);
            this.props.loadOrderData();
        } else {
            e.preventDefault();
            alert("Cannot reset the password to that value.");
        };      
    };




    render() {
        const { newPassword } = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <input 
                        type="text"
                        name="newPassword"
                        value={newPassword}
                        onChange={this.changeHandler}
                        style={{width: "20vw", fontSize: "0.9vw"}}
                    />
                </div>
                    <button type="submit" style={{width: "8vw", fontSize: "0.9vw"}}>Update</button>
                </form>
            </div>   
        )
    }
}
export default UpdatePassword;