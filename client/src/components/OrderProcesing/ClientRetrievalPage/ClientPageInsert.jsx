import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import { Link, useLocation } from 'react-router-dom';

const styles = () => ({
    viewBox: {
        border: "4px solid #2aabdf",
        borderRadius: "3px",
        marginLeft: "calc(18vw - 25px)",
        marginRight: "calc(18vw - 25px)",
        paddingTop: "calc(2vw + 20px)",
        paddingBottom: "4vh"

    },
    header: {
        marginBottom: "calc(1.5vw + 10px)",
        "& h1": {
            color: "#2aabdf",
            fontSize: "calc(3vw + 33px)"
        },
        "& h2": {
            color: "#999999",
            fontSize: "calc(1.5vw + 16px)"
        }
    },
    wholeShit: {
        paddingTop: "15vh",
        paddingBottom: "5vh",
        height: "100%",
        height: "94vh"
    },
    command: {
        color: '#999999'
    },
    inputBox: {
        marginBottom: "calc(0.7vw + 0.6vh)",
        marginTop: "calc(0.2vw + 0.2vh)",
        width: "calc(70px + 10vw)"
    },
    button1: {
        textDecoration: "none",
        borderRadius: "3px",
        height: "calc(27px + 1vw)",
        width: "calc(65px + 2.5vw)",
        backgroundColor: "#2aabdf",
        fontSize: "calc(15px + 1vw)",
        color: "white",
        textAlign: "center",
        margin: "10px",
        fontWeight: "700",
        padding: "5px",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "manipulation",
        transition: "all .3s",
        "&:hover": {
            backgroundColor: "black",
            border: "2px solid #2aabdf",
        },
    },
    backButton: {
        marginTop: "5vh"
    },
    submitButton: {
        marginTop: "1vh"
    }
});

class ClientPage extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            orderRef: "ORDER-REF",
            inOrderRef: "unchecked",
            orderPassword: "Order Password",
            isOrderPassword: "unchecked"
        }
    }


    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value})
    };

    submitHandler = async(e) => {
        e.preventDefault();
        console.log("Trying to send to server :",this.state)
        const options = { method: 'POST', 
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify(this.state)};
		const response = await fetch('http://localhost:5000/clientdownloadpage', options);
		const data = await response.json();
		console.log("Got back from server: ", data);
        this.props.setUploadPageStatus(data)
    };

    render() {
        const { classes } = this.props;
        const {orderRef, orderPassword} = this.state;
        return(
            <section className={classes.wholeShit}>
                <section className={classes.viewBox}>
                    <article className={classes.header}>
                        <h1>PicHub</h1>
                        <h2>Project X's client space </h2>
                    </article>
        
                
                    <form onSubmit={this.submitHandler}>
                        <div>
                            <a className={classes.command}>Insert Your OrderRef here.</a>
                            <br/>
                            <input
                                type="text"
                                name="orderRef"
                                value={orderRef}
                                onChange={this.changeHandler}
                                className={classes.inputBox}
                            />
                        </div>
                        <div>
                            <a className={classes.command}>Insert Your Order Password here.</a>
                            <br/>
                            <input
                                type="text"
                                name="orderPassword"
                                value={orderPassword}
                                onChange={this.changeHandler}
                                className={classes.inputBox}/>
                        </div>
                        <div className={classes.submitButton}>
                            <a className={classes.button1} type="submit" onClick={(e) => {this.submitHandler(e)}}>Submit</a>
                        </div>
                    </form>
                </section>
                <div className={classes.backButton}>
                    <Link component={Link} to="/" className={classes.button1} ><a>Back</a></Link>
                </div>   
            </section>
        )
    }
}

export default withStyles(styles)(ClientPage);