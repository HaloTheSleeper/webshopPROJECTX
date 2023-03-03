import { withEmotionCache } from '@emotion/react';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5vh',
    color: "white",
    textAlign: "center",
  },
  emptyButton: {
    minWidth: '150px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  lineBreaker: {
    ['@media (min-width:650px)']: {
      display: "none !important",
    },
    height: "35px"
  },
  lineBreaker2: {
    ['@media (min-width:500px)']: {
      display: "none !important"
    },
    height: "35px"
  },
  buttonEmptyCart: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textDecoration: "none",
    borderRadius: "3px",
    height: "calc(35px + 0.3vw)",
    width: "calc(90px + 1vw)",
    backgroundColor: "#bf0606",
    fontSize: "calc(15px + 0.2vw)",
    color: "white",
    paddingTop: "12px",
    paddingBottom: "12px",
    textAlign: "center",
    margin: "15px",
    fontWeight: "700",
    padding: "5px",
    userSelect: "none",
    WebkitUserSelect: "none",
    touchAction: "manipulation",
    transition: "all .3s",
    "&:hover": {
      backgroundColor: "#EE4B2B",
    },
  },
  backToShopAndCheckoutButton: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textDecoration: "none",
    borderRadius: "3px",
    height: "calc(35px + 0.3vw)",
    width: "calc(90px + 1vw)",
    backgroundColor: "#2aabdf",
    fontSize: "calc(15px + 0.2vw)",
    color: "white",
    paddingTop: "12px",
    paddingBottom: "12px",
    textAlign: "center",
    margin: "15px",
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
  checkoutButton: {
    minWidth: '150px',
  },
  backButton: {
    minWidth: "150px",
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  wholeShit: {
    marginBottom: "5vh",
  },
  emptyCart: {
    height: "50vh",
    textAlign: "center",
    marginTop: "12vh",
    marginBottom: "11vh",
    border: "4px solid #2aabdf",
    borderRadius: "3px",
    ['@media (max-width:450px)']: {
      marginTop: "8vh"
    },
  },
  emptyCartH2: {
    color: "white",
    marginBottom: "8vh",
    marginTop: "4vh",
    fontSize: "calc(20px + 0.5vw)"
  },
  emptyCartP: {
    color: "white",
  },
  emptyCartButton: {
    marginTop: "12vh",
  },
  emptyCartButton2: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textDecoration: "none",
    borderRadius: "3px",
    height: "calc(35px + 0.3vw)",
    width: "calc(90px + 1vw)",
    backgroundColor: "#2aabdf",
    fontSize: "calc(15px + 0.2vw)",
    color: "white",
    paddingTop: "12px",
    paddingBottom: "12px",
    textAlign: "center",
    margin: "15px",
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
  textBox: {
    width: "90%",
    marginLeft: "5%",
    marginBottom: "5%"
  }
}));