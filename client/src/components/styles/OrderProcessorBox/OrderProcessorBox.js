import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(()=> ({
    wholeSection: {
        border: "4px solid #2aabdf",
        borderRadius: "3px",
        marginTop: "5vh",
        overflow: "hidden",
        height: "100%"
    },
    breaker: {
        ['@media (min-width:400px)']: {
            display: "none",
            height: "0px"
        },   
    },
    wholeArticle: {
        float: "left",
        textAlign: "left",
        marginLeft: "5vw",
        marginTop: "2vw",
        marginBottom: "3vw",
        width: "50vw",
        minWidth: "250px",
        fontWeight: "300",
        "& p": {
            color: "#999999",
            fontSize: "calc(0.7vw + 10px)"
        },
        ['@media (max-width:883px)']: {
            float: "none",
            textAlign: "center",
            width: "80vw",
        },
        ['@media (max-width:400px)']: {
            marginLeft: "0vw",
            width: "100%",
        }, 
    },
    localHeader: {
        textAlign: "center",
        marginTop: "2vh",
        marginBottom: "2vh",
        "& h2": {
            color: "#2aabdf",
            fontSize: "calc(1.9vw + 15px)"
        }
    },
    logo: {
        textAlign: "center",
        float: "left",
        marginLeft: "calc(7vw + 5vh)",
        ['@media (max-width:883px)']: {
            float: "none",
            textAlign: "center",
            marginLeft: "0vw"
        },
        "& h3": {
            float: "none",
            color: "#2aabdf",
            fontSize: "calc(17.5px + 0.5vw)",
        },
        "& img": {
            float: "none",
            width: "calc(80px + 5vw)",
        },
        marginBottom: "2vh",
        transition: "transform 0.3s",
        "&:hover": {
            transform: "translateY(-5px)",
	        color: "white",
        },
        "&:hover h3": {
            color: "white",
        },
    },

}));