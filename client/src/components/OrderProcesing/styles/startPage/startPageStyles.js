import { makeStyles, fade } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wholeShit: {
        backGroundColor: 'black',
        textAlign: "center",
    },
    picHub: {
        paddingTop: "15vh"
    },
    button1box: {
        border: "solid #2aabdf 5px",
        borderRadius: "3px",
        paddingTop: "4vh",
        paddingBottom: "calc(15px + 1.75vw)",
        marginLeft: "calc(25vw - 10vh)",
        marginRight: "calc(25vw - 10vh)",
        "& h2": {
            color: "white",
            fontSize: "calc(20px + 1vw)",
            marginBottom: "calc(2vh + 2vw)"
        }
    },
    picHubText: {
        marginBottom: "calc(1vh + 1.5vw)",
        paddingLeft: "2vw",
        paddingRight: "2vw",
        "& p": {
            color: "#999999",
            fontSize: "calc(13px + 0.5vw)"
        },
    },
    button1: {
        /*textDecoration: "none",
        height: "3vw",
        width: "5vw",
        backgroundColor: "#2aabdf",
        fontSize: "calc(15px + 1vw)",
        color: "white",
        textAlign: "center",
        margin: "10px",
        borderRadius: "10px",
        fontWeight: "700",
        padding: "5px",
        userSelect: "none",
        WebkitUserSelect: "none",
        touchAction: "manipulation",
        transition: "all .3s",
        "&:hover": {
            backgroundColor: "black",
            border: "2px solid #2aabdf",
        },*/
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
    creatorHub: {
        paddingTop: "5vh",
        paddingBottom: "7vh"
    },
    button2box: {
        border: "solid #2aabdf 5px",
        borderRadius: "10px",
        paddingTop: "4vh",
        paddingBottom: "calc(15px + 1.75vw)",
        marginLeft: "20vw",
        marginRight: "20vw",
        "& h2": {
            color: "white",
            fontSize: "calc(20px + 1vw)",
            marginBottom: "calc(2vh + 2vw)"
        }
    },
    creatorHubText: {
        marginBottom: "calc(1vh + 1.5vw)",
        paddingLeft: "2vw",
        paddingRight: "2vw",
        "& a": {
            color: "white",
            fontSize: "calc(13px + 0.5vw)"
        },
    },
    headsUpText: {
        textAlign: "center",
        paddingBottom: "3vh",
        "& p": {
            color: "#999999",
            fontSize: "calc(12px + 0.5vw)"
        }
    }



    
}))