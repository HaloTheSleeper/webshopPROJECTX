import { makeStyles, alpha } from '@material-ui/core/styles'

export default makeStyles(() => ({
    picturePage: {
        borderBottom: "2px solid #2aabdf",
        borderRadius: "2px",
        marginLeft: "calc(18vw - 25px)",
        marginRight: "calc(18vw - 25px)",
        paddingTop: "4vh"
    },
    picture: {
        width: "calc(150px + 20vw)"
    },
    button: {
        marginTop: "4vh",
        marginBottom: "2vh"
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
    pictureName: {
        color: "#999999",
        marginBottom: "1.5vh",
        fontSize: "calc(1.5vw + 11px)",
        fontWeight: "500"
    }
}))