import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    wholeShit1: {
        height: "94vh",
        backgroundColor: "black",
        paddingTop: "30vh",
        textAlign: "center"
    },
    wrongPasswordText: {
        border: "3px solid #2aabdf",
        marginLeft: "calc(18vw - 25px)",
        marginRight: "calc(18vw - 25px)",
        paddingTop: "calc(2vw + 20px)",
        paddingBottom: "5vh",
        "& h2": {
            color: "white",
            fontSize: "calc(1.5vw + 16px)",
            fontweight: "700"
        }
    },

}))