import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  header: {
    fontSize: "calc(2vw + 18px)",
    marginBottom: "3vw",
    textDecoration: "none",
	  listStyle: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: 0,
    letterSpacing: "0.05em",
    display: "inline-block",
	  fontFamily: 'Playfair Display',
    color: "#2aabdf",
    borderBottom: "2.5px solid #2aabdf",
    borderRadius: "2.5px"
  },
  headerClass: {
    textAlign: "center"
  },
  content: {
    flexGrow: 1,
    //backgroundColor: theme.palette.background.default,
    backgroundColor: "black",
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
  divider: {
    border: "none",
	  height: "5px",
	  color: "#2aabdf",
	  backgroundColor: "#2aabdf",
	  textAlign: "center",
	  width: "85%",
	  margin: "0 auto",
	  borderRadius: "2px",
    marginTop: "2.2vw"
  }
}));