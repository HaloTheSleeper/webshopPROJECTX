import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles(() => ({
    wholeShit: {
        textAlign: "center",
        //height: "94vh"
    },
    viewBox: {
        border: "3px solid #2aabdf",
        marginLeft: "calc(18vw - 25px)",
        marginRight: "calc(18vw - 25px)",
        paddingTop: "calc(2vw + 20px)",
        paddingBottom: "4vh"

    },
    header: {
        "& h1": {
            color: "#2aabdf",
            fontSize: "calc(3vw + 33px)"
        },
        "& h2": {
            color: "#2aabdf",
            fontSize: "calc(1.5vw + 16px)"
        }
    }

}))