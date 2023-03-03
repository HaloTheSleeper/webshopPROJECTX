import { makeStyles, alpha } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles(() => ({
    wholeShit: {
        backgroundColor: "black",
        paddingTop: "10vh"
    },
    button1: {
        textDecoration: "none",
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
        },
    },
    loadButton: {
        textAlign: "center",
        paddingBottom: "10vh",
        paddingTop: "15vh"
    },
    table: {
        marginLeft: "2.5vw"
    },
    newOrder: {
        paddingBottom: "5vh"
    }
}))