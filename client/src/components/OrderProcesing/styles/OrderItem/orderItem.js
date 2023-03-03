import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wholeShit: {
        border: "3px solid #2aabdf",
        color: "white",
        width: "95vw",
    },
    orderRef: {
        textAlign: "center",
        width: "19vw",
        verticalAlign: "middle",
        borderRight: "2px solid #2aabdf",
        "& h2": {
            fontSize: "calc(1.5vw + 5px)"
        }
    },
    statusCheck: {
        textAlign: "center",
        verticalAlign: "middle",
        borderRight: "2px solid #2aabdf",
        paddingLeft: "0.5vw",
        paddingRight: "0.5vw",
        "& h3": {
            fontSize: "calc(1.2vw + 4px)"
        },
        "& img": {
            width: "5vw"
        }
    },
    passwords: {
        textAlign: "center",
        width: "25vw",
        verticalAlign: "middle",
        borderRight: "2px solid #2aabdf",
        "& h3": {
            fontSize: "calc(1.2vw + 4px)",
            marginBottom: "1vh"
        },
        "& a": {
            fontSize: "calc(0.8vw + 4px)"
        }
    },
    links: {
        textAlign: "center",
        width: "25vw",
        verticalAlign: "middle",
        borderRight: "2px solid #2aabdf",
        "& h3": {
            fontSize: "calc(1.2vw + 4px)",
            marginBottom: "1vh"
        },
        "& a": {
            fontSize: "calc(0.8vw + 4px)"
        }
    },
    email: {
        textAlign: "center",
        width: "13vw",
        verticalAlign: "middle",
        "& h3": {
            fontSize: "calc(1.2vw + 4px)",
            marginBottom: "1vh"
        },
        "& img": {
            width: "5vw"
        }
    },
    statusResetButton: {
        marginBottom: "1vh"
    }
    
}))