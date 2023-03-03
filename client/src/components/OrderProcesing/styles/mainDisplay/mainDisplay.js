import { makeStyles, alpha } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wrongPassword: {
        textAlign: "center",
        height: "94vh",
        paddingTop: "30vh"
    },
    wrongPasswordText: {
        border: "3px solid #2aabdf",
        marginLeft: "calc(18vw - 25px)",
        marginRight: "calc(18vw - 25px)",
        paddingTop: "calc(2vw + 20px)",
        paddingBottom: "5vh",
        "& h1": {
            color: "white",
            fontSize: "calc(1.5vw + 16px)",
            fontweight: "700"
        }
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

    picturePage: {
        paddingTop: "15vh",
        paddingBottom: "10vh",
        "& h1": {
            color: "white",
            fontSize: "calc(1.5vw + 16px)"
        }
    },
    picturePageBack: {
        marginTop: "5vh"
    }



}))