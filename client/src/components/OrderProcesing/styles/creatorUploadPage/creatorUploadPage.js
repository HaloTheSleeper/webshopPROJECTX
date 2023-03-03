import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    wholeShit: {
        paddingTop: "15vh",
        minHeight: "94vh",
        backgroundColor: "black",
        textAlign: "center",
        "& h1": {
            color: "#2aabdf",
            fontSize: "calc(1.5vw + 16px)",
            fontweight: "700"
        }
    }
}))