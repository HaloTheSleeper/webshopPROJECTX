import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";

class LogIn extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            password: "test",
            username: "user"
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
		const response = await fetch('http://localhost:5000/boardlogin', options);
		const data = await response.json();
		console.log("Got back from server: ", data);
        this.props.loggedInStatusReset(data)
    };




    render() {
        const { username, password } = this.state;
        return(
            <div style={{textAlign: "center", height:"94vh", paddingTop: "40vh"}}>
                <form onSubmit={this.submitHandler}>
                <div>
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={this.changeHandler}
                    />
                    <br/>
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={this.changeHandler}
                    />
                </div>
                    <button type="submit">Check</button>
                </form>
            </div>   
        )
    }
}
export default LogIn;