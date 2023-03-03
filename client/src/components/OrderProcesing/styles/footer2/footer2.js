import { makeStyles } from '@material-ui/core/styles';
 
export default makeStyles(() => ({
    copyrightText: {
        width: "100%",
        textAlign: "center",
        paddingTop: "2vh",
        marginBottom: "2vh",
        backgroundColor: "black",
        borderTop: "solid #2aabdf 2px",
        fontFamily: 'Playfair Display',
        flex: 0,
        height: "6vh",
        "& a": {
            fontSize: "calc(0.35vw + 13px)",
            marginBottom: "3vh"
        }
    },
    copyrightTextSecond: {
        width: "90%",
        color: "#999999",
    }
}));