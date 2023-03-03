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
  introduction: {
    marginTop: "calc(-1.2vw + 100px)",
    minHeight: "calc(15vw + 100px)",
    borderBottom: "2px solid #2aabdf",
    "& ::after": {
      content: "",
      clear: "both",
      display: "table"
    }
  },
  pictureOfCreator: {
    height: "calc(15vw + 50px)",
    marginLeft: "5vw",
    ["@media (max-width: 775px)"] : {
      width: "20vw",
      height: "auto"
    },
    ["@media (max-width: 550px)"]: {
      width: "auto",
      height: "30vh",
      marginLeft: "0vw"
    }
  },
  text: {
    textAlign: "center",
    overflow: "hidden",
    paddingLeft: "3vw",
    paddingRight: "3vw",
    width: "70vw",
    textAlign: "center",
    ["@media (max-width: 550px)"]: {
      padding: "0px",
      width: "90vw",
      margin: "auto"
    }
  },
  textHeader: {
    fontSize: "calc(2vw + 18px)",
    marginBottom: "3vw",
    letterSpacing: "0.05em",
	  fontFamily: 'Playfair Display',
    color: "#2aabdf",
  },
  textParagraph: {
    color: "#999999",
    marginBottom: "2vh",
  },
  imageBox: {
    textAlign: "center",
    width: "25vw",
    float: "left",
    ["@media (max-width: 550px)"]: {
      float: "none",
      margin: "auto",
      width: "90vw"
    }
  }

}));