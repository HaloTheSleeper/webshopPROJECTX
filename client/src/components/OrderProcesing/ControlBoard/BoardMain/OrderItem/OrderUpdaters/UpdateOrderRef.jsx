import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

class UpdateOrderRef extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            orderRef: "New OrderREF",
            currentOrderRef: this.props.currentOrderRef
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

    submitHandler = async(e) => {
        e.preventDefault();
        console.log("Trying to send to server :", this.state)
        const options = { method: 'POST', 
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify(this.state)};
		const response = await fetch('http://localhost:5000/updateorderref', options);
		const data = await response.json();
		console.log("Got back from server: ", data);
        this.props.loadOrderData();
    };




    render() {
        const { orderRef } = this.state;
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                    <input
                        type="text"
                        name="orderRef"
                        value={orderRef}
                        onChange={this.changeHandler}
                        style={{width: "15vw", fontSize: "0.9vw"}}
                    />
                </div>
                    <button style={{width: "10vw", fontSize: "0.9vw"}} type="submit">Update</button>
                </form>
            </div>   
        )
    }
}
export default UpdateOrderRef;