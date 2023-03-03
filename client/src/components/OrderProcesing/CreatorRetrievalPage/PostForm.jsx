import React, { Component, useEffect, setState} from 'react'
import axios from 'axios'
import { withStyles } from '@material-ui/styles'
import { Link, useLocation } from 'react-router-dom';
import ClientPageInsert from '../ClientRetrievalPage/ClientPageInsert'

const styles = () => ({
	wholeShit: {
		height: "94vh",
		paddingTop: "15vh",
		backgroundColor: "black",
		textAlign: "center"
	},
	box: {
		border: "4px solid #2aabdf",
		borderRadius: "3px",
        marginLeft: "calc(18vw - 25px)",
        marginRight: "calc(18vw - 25px)",
        paddingTop: "calc(2vw + 20px)",
        paddingBottom: "4vh"
	},
	header: {
        marginBottom: "calc(1.5vw + 10px)",
        color: "#2aabdf",
        fontSize: "calc(1.5vw + 16px)"
    },
	insertBox: {
		"& a": {
			color: "#999999",
			fontSize: "calc(11px + 0.4vw)"
		}
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
    }
})





class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			orderRef: 'Enter OrderREF here!',
			inOrderRef: 'unchecked'
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}


	submitHandler = async(e) => {
		e.preventDefault()
		console.log("Sending to server (Creator Order-REF check):", this.state)
		const options = { method: 'POST', 
	    headers: {'Content-Type': 'application/json'},
	    body: JSON.stringify(this.state)};
		const response = await fetch('http://localhost:5000/orderrefcreator', options);
		const data = await response.json();
		console.log("Got back from server: ",data);
		this.props.checkOrderRef(data);
	}
	

	render() {
		const { orderRef } = this.state
		const { classes } = this.props
		return (
			<main className={classes.wholeShit}>
				<section className={classes.box}>
				    <h2 className={classes.header}>Creator Upload Enviornment</h2>
				    <form onSubmit={this.submitHandler}>
					<div className={classes.insertBox}>
						<a>Insert Your OrderREF here</a>
						<br/>
						<input
							type="text"
							name="orderRef"
							value={orderRef}
							onChange={this.changeHandler}
							className={classes.inputBox}
						/>
			        </div>
					<a className={classes.button1} type="submit" onClick={(e) => {this.submitHandler(e)}}>Submit</a>
				    </form>
				</section>
				<div className={classes.backButton}>
                    <Link component={Link} to="/" className={classes.button1} ><a>Back</a></Link>
                </div>
			</main>
		)
	}
}

export default withStyles(styles)(PostForm);